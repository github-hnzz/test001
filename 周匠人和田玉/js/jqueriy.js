function closer() {
    document.getElementById("zzc").style.display ='none';
};
function myFunction() {
    alert("复制成功，可以去微信添加了");
    window.location.href="weixin://";
};
function showdiv(id) {
    var div1 = document.getElementById(id+"aa");
    div1.scrollIntoView(true);
};
function showdiva(id) {
    var div1 = document.getElementById(id+"a");
    div1.scrollIntoView(true);};
var system ={};
var p = navigator.platform;
system.win = p.indexOf("Win") == 0;
system.mac = p.indexOf("Mac") == 0;
system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
if(system.win||system.mac||system.xll){
    document.getElementById('img1').src="images/"+randnum[rand]+".png";
    document.getElementById('img2').src="images/"+randnum[rand]+"1.png";
    document.getElementById("float").style.display ="block";
    document.getElementById("bottom_nav").style.display ="block";
}else{
    document.getElementById('img2').src="images/"+randnum[rand]+"1.png";
    document.getElementById("float").style.display ="none";
    document.getElementById("bottom_nav").style.display ="block";
    window.onpopstate = function(){
        document.getElementById("zzc").style.display ="block";
    };
    window.history.pushState('forward', null, '');
    window.history.forward(1);
}