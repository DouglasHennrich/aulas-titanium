/* ===============================
@ Vars
=============================== */
let callback;

/* ===============================
@ Functions
=============================== */
/*
@ Initialize
*/
const Initialize = () => {

  if ($.args.titulo) {
    $.title.setText($.args.titulo);
  }

};

/* ===============================
@ Exports
=============================== */
//
exports.cleanUp = () => {
  console.warn('============');
  console.warn('[clean up dentro da nav]');
  $.destroy();
  $.off();
};

/*
@
*/
exports.setCallback = (Next) => {
  callback = Next;
};

/* ===============================
@
=============================== */
Initialize();

/*
* clickFunc
*/
function clickFunc (event) {

  // $.trigger('back');
  callback && callback();

}
