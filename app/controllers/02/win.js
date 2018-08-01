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

};

/*
* openWin
*/
function openWin () {

  // $.win.add(
  //   Map.createView({
  //     mapType: Map.NORMAL_TYPE
  //     , userLocation: true
  //   })
  // );

  const pin = Alloy.Globals.Map.createAnnotation({
    latitude: 37.368122
    , longitude: -121.913653
    , title: 'Appcelerator Headquarters'
    , subtitle: 'San Jose, CA'
    , pincolor: Alloy.Globals.Map.ANNOTATION_RED
  });

  $.mapview.addAnnotation(pin);

  //
  _.delay(() => {
    Alloy.Globals.loading.show('Alguma mensagem');

    _.delay(() => {
      Alloy.Globals.loading.hide();
    }, 2000);
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
