if (!OS_IOS) {

  var NavigationWindow = function (args) {
    this.args = args;
  };

  NavigationWindow.prototype.open = function (params) {
    params = params || {};
    params.displayHomeAsUp = false;
    return this.openWindow(this.args.window, params);
  };

  NavigationWindow.prototype.close = function (params) {
      return this.closeWindow(this.args.window, params);
  };

  NavigationWindow.prototype.openWindow = function (window, options) {
    var that = this;
    options = options || {};
    options.swipeBack = (typeof options.swipeBack === 'boolean') ? options.swipeBack : that.args.swipeBack;
    options.displayHomeAsUp = (typeof options.displayHomeAsUp === 'boolean') ? options.displayHomeAsUp : that.args.displayHomeAsUp;

    if (OS_ANDROID && options.animated !== false) {
      options.activityEnterAnimation = Ti.Android.R.anim.slide_in_left;
      options.activityExitAnimation = Ti.Android.R.anim.slide_out_right;
    }

    // if (options.swipeBack !== false) {
    //     window.addEventListener('swipe', function (e) {
    //         if (e.direction === 'right') {
    //             that.closeWindow(window, options);
    //         }
    //     });
    // }

    // if (options.displayHomeAsUp !== false && !window.navBarHidden) {
    //     window.addEventListener('open', function () {
    //         var activity = window.getActivity();
    //         if (activity) {
    //             var actionBar = activity.actionBar;
    //             if (actionBar) {
    //                 actionBar.displayHomeAsUp = true;
    //                 actionBar.onHomeIconItemSelected = function () {
    //                     that.closeWindow(window, options);
    //                 };
    //             }
    //         }
    //     });
    // }

    return window.open(options);
  };

  NavigationWindow.prototype.closeWindow = function (window, options) {
        options = options || {};

        if (OS_ANDROID && options.animated !== false) {
            options.activityEnterAnimation = Ti.Android.R.anim.slide_in_left;
            options.activityExitAnimation = Ti.Android.R.anim.slide_out_right;
        }

        return window.close(options);
    };
}

exports.createNavigationWindow = function (args) {
    var navWin = OS_IOS ? Ti.UI.iOS.createNavigationWindow(args) : new NavigationWindow(args);

    App.Navigation = require('navigation')({
      parent: navWin
    });

    return navWin;
};

exports.createWindow = function (args) {
	return Ti.UI[OS_IOS ? 'createWindow' : 'createView'](args);
};

/**
 * Fixes the auto focus on textfield on android
 */
exports.createTextField = function (args) {
    if (OS_ANDROID) {
        var view = Ti.UI.createTextField(args);

        // fix auto focus
        view.addEventListener('focus', function focusFix (e) {
            e.source.blur();
            e.source.removeEventListener('focus', focusFix);
        });
        return view;
    } else {
        return Ti.UI.createTextField(args);
    }
};

exports.createTextArea = function (args) {
  const $textArea = Ti.UI.createTextArea(args);

  if (args.hintText) {
    $textArea.originalColor = $textArea.color || '#000';
    if (!$textArea.value) {
      $textArea.applyProperties({
        value: $textArea.hintText
          , color: args.hintTextColor || '#ccc'
      });
    }

    $textArea.addEventListener('focus', function (e) {
      if (e.source.value == e.source.hintText) {
        e.source.applyProperties({
          value: ''
          , color: e.source.originalColor
        });
      }
    });

    $textArea.addEventListener('blur', function (e) {
      if (!e.source.value || (e.source.value && !e.source.value.length)) {
        console.log('inside blur if');
        e.source.value = e.source.hintText;
        e.source.color = e.source.hintTextColor || '#ccc';
      }
    });
  }

  return $textArea;
};

/*
@ Map
*/
exports.createMap = function (args) {

  var mapView
    , params
    ;

  if (OS_IOS) {
    params = {
      mapType: Alloy.Globals.Map.MAP_TYPE_NORMAL
      , indoorEnabled: false // shows indoor polygons of mapped indoor venues
      , indoorPicker: false // shows the vertical floor level
      , compassButton: true // shows the compass (top/right) when bearing is non-zero
      , myLocationEnabled: false // default: false
      , myLocationButton: false // shows the default My location button
      , mapStyle: JSON.stringify(require('/core/mapStyle'))

      , region: _.extend({
        zoom: 13 // Zoom in points
        , bearing: 0 // orientation measured in degrees clockwise from north
        , viewingAngle: 90 // measured in degrees
      }, args.region ? args.region : {})
    };

  } else {
    params = {
      animate: true
      , compassEnabled: false
      , mapType: Alloy.Globals.Map.NORMAL_TYPE
      , userLocation: false
      , style: JSON.stringify(require('/core/mapStyle'))

      , region: _.extend({
        latitudeDelta: 0.02
        , longitudeDelta: 0.02
      }, args.region ? args.region : {})
    };

  }

  mapView = Alloy.Globals.Map.createView(_.extend(params, _.omit(args, 'region')));

  return mapView;

};

/*
@ ImageView
*/
exports.createImageView = function (args) {

  args.loadingIndicator = true;

  if (OS_IOS) return AvImageview.createImageView(args);

  var card = Ti.UI.Android.createCardView(_.extend(args, {
    elevation: 8
  }));

  delete args.borderRadius;

  card.add(AvImageview.createImageView(args));

  card.setImage = function (image) {
    card.children[0].image = image;
  };

  return card;

};

/*
@ Loading
*/
exports.createLoading = function (args) {

  _.defaults(args, {
    indicatorColor: Alloy.CFG.style.defaults.navBarLabel
  });

  return Ti.UI.createActivityIndicator(args);

};
