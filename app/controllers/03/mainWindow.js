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

  App.Navigation.open('/03/window2');

}
