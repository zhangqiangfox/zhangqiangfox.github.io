var str = document.getElementById('one');
var p1 = document.getElementById('main');
var string = document.getElementById('two')
var reset = document.getElementById('three')

$(document).ready(function() {
    var link_classname = localStorage.getItem("link_h"); //获取link_h的value值
    p1.className = link_classname;
});

str.onclick = function() {
    p1.className = 'mainone';
    localStorage.setItem("link_h", 'mainone');
}

string.onclick = function() {
    p1.className = 'maintwo';
    localStorage.setItem("link_h", 'maintwo');
}


reset.onclick = function() {
    p1.className = 'container';
    localStorage.setItem("link_h", 'container');
}
