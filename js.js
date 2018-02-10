var status =1;
function ramy() {
if (status==1){
  document.getElementById('menu').style.left = "-250px";
status =0;
}
else if (status==0){
  document.getElementById('menu').style.left = "0px";
status=1;
}
}

//for Game



var arr=[1,1,2,2,3,3,4,4,5,5,6,6,7,7];
var randarr=[];

for (var k = 0; k < 14; k++) {
  var m=Math.floor(Math.random()*arr.length);
  randarr.push(arr[m]);
  arr.splice(m,1);
  }

var count=0;
var purl=0;
var pstr2=100;
var ppurl=120;
var ppstr2=125;
var check=0;
var done=0;
var score=0;
var arr2=[];//str0 url0 str1 url1
function show(str2) {

  if (count>0&&count%2==0&&ppurl!=purl&&pstr2!==ppstr2) {
    document.getElementById(ppstr2).style.backgroundImage="url(101.png)";
    document.getElementById(pstr2).style.backgroundImage="url(101.png)";
score=score-10;
  }
  if (ppurl==purl&&count>0&&pstr2!==ppstr2&&count%2==0) {
document.getElementById(ppstr2).removeAttribute("onclick");
document.getElementById(pstr2).removeAttribute("onclick");
score =score+25;
done++;
  }
  var n= str2.split("").splice(2,2).join("");
  var url="url("+randarr[n-1]+".png)";
  document.getElementById(str2).style.backgroundImage=url;
ppurl=purl;
ppstr2=pstr2;
purl=url;
pstr2=str2;
count++;
if (done==6) {
score=score+25;
}
//if (done==10) {
  document.getElementById('scorebtn').innerHTML="Your Score : "+score;
//}
}



function move(id){
document.getElementById("aboutme").style.zIndex=400;
document.getElementById("contacts").style.zIndex=400;
document.getElementById("education").style.zIndex=400;
document.getElementById("skills").style.zIndex=400;
document.getElementById("mygame").style.zIndex=400;
document.getElementById(id).style.zIndex=500;
}
