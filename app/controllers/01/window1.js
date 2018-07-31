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

  Alloy.Globals.Nav = $.nav;

};

/*
* clickFunc
*/
function clickFunc (event) {

  // Alloy.Globals.Nav.openWindow(Alloy.createController('/01/window2', {
  //   alguma: 'Coisa'
  //
  //   , callback: function (params) {
  //     $.btn.setTitle(params.titulo);
  //
  //     params.fn();
  //   }
  // }).getView());

  Alloy.Globals.Nav.openWindow(Alloy.createController('/01/window2', {
    alguma: 'Coisa'
  })
    .on('volta', function (params) {
      $.btn.setTitle(params.titulo);
      params.fn();
    })
    .getView());
  // Alloy.createController('/01/window2', {
  //   alguma: 'Coisa'
  //   , callback: function (params) {
  //     $.btn.setTitle(params.titulo);
  //
  //     params.fn();
  //   }
  // }).getView().open();

}

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
