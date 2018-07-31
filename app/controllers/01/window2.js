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

  // $.args.callback({
  //   titulo: 'Mudou o titulo'
  //
  //   , fn: function () {
  //
  //     _.delay(() => {
  //       // Alloy.createController('/01/window3').getView().open();
  //
  //       Alloy.Globals.Nav.openWindow(Alloy.createController('/01/window3').getView());
  //     }, 2000);
  //
  //   }
  // });

  $.trigger('volta', {
    titulo: 'Mudou o titulo'

    , fn: function () {

      _.delay(() => {
        // Alloy.createController('/01/window3').getView().open();

        Alloy.Globals.Nav.openWindow(Alloy.createController('/01/window3').getView());
      }, 2000);

    }
  });

};

/*
* clickFunc
*/
function clickFunc (event) {

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
