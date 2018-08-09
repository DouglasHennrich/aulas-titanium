/* ===============================
@ Vars
=============================== */

/* ===============================
@ Functions
=============================== */
/*
@ Initialize
*/
const Initialize = () => {

  $.navBar.on('back', () => {
    $.getView().close();
  });

  $.navBar.setCallback(() => {
    $.getView().close();
  });

};

/*
* openWin
*/
function openWin () {

  Alloy.Globals.loading.show('Buscando Pins');

  _.delay(() => {

    $.map.addAnnotations([
      Alloy.Globals.Map.createAnnotation({
        latitude: 37.368122
        , longitude: -121.913653
        , title: 'Appcelerator Headquarters'
        , subtitle: 'San Jose, CA'
        , pincolor: Alloy.Globals.Map.ANNOTATION_RED
      })
      , Alloy.Globals.Map.createAnnotation({
        latitude: -29.6621163
        , longitude: -51.1694047
        , title: 'Minha casa'
        , pincolor: Alloy.Globals.Map.ANNOTATION_GREEN
      })
    ]);

    var circle = Alloy.Globals.Map.createCircle({
    center: { latitude: -29.6621163, longitude: -51.1694047 }
    , radius: 10000 // 1km
    , fillColor: '#20FF0000'
    });
    $.map.addCircle(circle);

    Alloy.Globals.loading.hide();

  });

};

/* ===============================
@ Exports
=============================== */
//
exports.cleanUp = () => {
  $.destroy();
  $.off();
};

/* ===============================
@
=============================== */
Initialize();

/*
* clickFunc
*/
function clickFunc (event) {

  App.Navigation.open('/03/window3');

}

/*
* cleanUp
*/
function clean (event) {

  $.navBar.cleanUp();
  $.destroy();
  $.off();

}
