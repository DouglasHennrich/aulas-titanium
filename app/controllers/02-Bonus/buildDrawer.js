// Alloy.Globals.Drawer = $.drawer;

/*
* clickFunc
*/
function clickFunc (event) {
  if (event.source.id == 'btnLeft') {
    $.drawer.toggleLeftWindow();

  } else if (event.source.id == 'btnRight') {
    $.drawer.toggleRightWindow();

  } else {
    $.nav.openWindow(Alloy.createController('/02-Bonus/window2').getView());
  }
}
