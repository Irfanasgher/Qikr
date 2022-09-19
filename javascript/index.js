$(document).ready(function () {
  if (
    navigator.userAgent.indexOf("Safari") != -1 &&
    navigator.userAgent.indexOf("Chrome") == -1
  ) {
    $("#preloader").remove();
  }
});
$(window).on("load", function () {
  $("#preloader").remove();
});
var wb_Timer1;
function TimerStartTimer1() {
  wb_Timer1 = setTimeout(function () {
    var event = null;
    window.open("http://www.qikrairports.co.uk");
  }, 1500);
}
function TimerStopTimer1() {
  clearTimeout(wb_Timer1);
}
var wb_Timer2;
function TimerStartTimer2() {
  wb_Timer2 = setTimeout(function () {
    var event = null;
    window.open("http://www.qikrbookings.co.uk");
  }, 1500);
}
function TimerStopTimer2() {
  clearTimeout(wb_Timer2);
}
var wb_Timer3;
function TimerStartTimer3() {
  wb_Timer3 = setTimeout(function () {
    var event = null;
    window.open("https://play.google.com/store/apps");
  }, 1500);
}
function TimerStopTimer3() {
  clearTimeout(wb_Timer3);
}
var wb_Timer4;
function TimerStartTimer4() {
  wb_Timer4 = setTimeout(function () {
    var event = null;
    window.open("https://www.apple.com/app-store/");
  }, 1500);
}
function TimerStopTimer4() {
  clearTimeout(wb_Timer4);
}
