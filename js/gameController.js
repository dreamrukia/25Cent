// JavaScript Document

var body = document.getElementById("bd");
var DOWN_COUNT = 0;
var ROLL = 1;
var STOP = 2;

var status = DOWN_COUNT;

if (body != null) {
    var Interval = window.setInterval(selector, 1);
} else {
    alert("error");
}

var t = 0;
var curr_dc = 9;

var dir_dc = "assert/gameStart/nums/";

function selector() {
    if(status == DOWN_COUNT){
        if(t == 100){
            t %=100;
            curr_dc--;
            $('#down_count').attr('src',dir_dc+curr_dc);
        }
    }
}
