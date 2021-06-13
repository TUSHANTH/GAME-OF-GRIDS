var A=0;moves=0;
var threeMinutes=60*3;Timeup=0
function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  Timeup=setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
        clearInterval(Timeup);
        document.getElementById("background_2").style.display="block";
        document.getElementById("s4").play()
      }
  }, 1000);
}
function getrandomcolor(){
    var colors=  ["#ffffff","#ff0000","#fbff00","#15ff00","#ff9900","#8527a1"]
    var repetition=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24"]
    A=25;moves=0;threeMinutes=179;clearInterval(Timeup)
    document.getElementById(A.toString()).style.backgroundColor="transparent";
    display = document.querySelector('#time');
    startTimer(threeMinutes, display);
    for(var  i=1;i<=9;i++){
        color=colors[Math.floor(Math.random()*6)];
        rep1='x'
        rep1+=i
        document.getElementById("moves").innerHTML=moves;
        rep=Math.floor(Math.random()*repetition.length)
            document.getElementById(rep1.toString()).style.backgroundColor=color;
            document.getElementById(repetition[rep]).style.backgroundColor=color;
            if(repetition[rep]=="7" || repetition[rep]=="8" || repetition[rep]=="9" || repetition[rep]=="12" || repetition[rep]=="13" || repetition[rep]=="14" || repetition[rep]=="17" ||  repetition[rep]=="18" || repetition[rep]=="19"){
              document.getElementById(repetition[rep]).style.border="2px solid black" 
            }
            repetition.splice(rep,1);
    }
    i=0;
    for(var i=1;i<=15;i++){
        rep=Math.floor(Math.random()*repetition.length)
        color=colors[Math.floor(Math.random()*6)];
        document.getElementById(repetition[rep]).style.backgroundColor=color;
        if(repetition[rep]=="7" || repetition[rep]=="8" || repetition[rep]=="9" || repetition[rep]=="12" || repetition[rep]=="13" || repetition[rep]=="14" || repetition[rep]=="17" ||  repetition[rep]=="18" || repetition[rep]=="19"){
          document.getElementById(repetition[rep]).style.border="2px solid black";
          document.getElementById(repetition[rep]).style.borderRadius="10px";
        }
        repetition.splice(rep,1);
    }
}
function MOVEMENT(B){
  if(A<=25 && A!=0 && A>=1){
    if(A==6 || A==11 || A==16 || A== 21){
      if(B==A+5 || B==A-5 || B==A+1){  
        document.getElementById("s2").play() 
        document.getElementById(A.toString()).style.backgroundColor=document.getElementById(B.toString()).style.backgroundColor;
        document.getElementById(B.toString()).style.backgroundColor="transparent";
        moves++;
        document.getElementById("moves").innerHTML = moves;
        A=B;
      }
    }
    else if(A%5==0){
      if(B==A+5 || B==A-5 || B==A-1){  
        document.getElementById("s2").play() 
        document.getElementById(A.toString()).style.backgroundColor=document.getElementById(B.toString()).style.backgroundColor;
        document.getElementById(B.toString()).style.backgroundColor="transparent";
        moves++;
        document.getElementById("moves").innerHTML = moves;
        A=B;
      }
    }
    else{
      if (A==B+1 || A==B-1 || A==B+5 || A==B-5){
        document.getElementById("s2").play()
        document.getElementById(A.toString()).style.backgroundColor=document.getElementById(B.toString()).style.backgroundColor;
        document.getElementById(B.toString()).style.backgroundColor="transparent";
        moves++
        document.getElementById("moves").innerHTML=moves;
        A=B;
      }
    }
  }
    if(document.getElementById("button1").innerHTML=="Stop"){
      if(document.getElementById("x1").style.backgroundColor===document.getElementById("7").style.backgroundColor && document.getElementById("x2").style.backgroundColor===document.getElementById("8").style.backgroundColor && document.getElementById("x3").style.backgroundColor===document.getElementById("9").style.backgroundColor && document.getElementById("x4").style.backgroundColor===document.getElementById("12").style.backgroundColor && document.getElementById("x5").style.backgroundColor===document.getElementById("13").style.backgroundColor && document.getElementById("x6").style.backgroundColor===document.getElementById("14").style.backgroundColor && document.getElementById("x7").style.backgroundColor===document.getElementById("17").style.backgroundColor && document.getElementById("x8").style.backgroundColor===document.getElementById("18").style.backgroundColor && document.getElementById("x9").style.backgroundColor===document.getElementById("19").style.backgroundColor){
        document.getElementById("background_1").style.display="block";
        clearTimeout(Timeup)
        document.getElementById("s1").play();
        score=1000-(2*moves);
        document.getElementById("score1").innerHTML=score.toString();
      }   
    }       
}

function restart(){
  document.getElementById("background_2").style.display="none";
  document.getElementById("background_1").style.display="none";
  document.getElementById("easy").style.display="Block";
  document.getElementById("normal").style.display="none";
  if(z==1){
    change1();
  }
  else{
    change2();
  }
  location.reload();
}
function getrandomcolor2(){
  var colors=  ["#0400ff","#ff0000","#fbff00","#15ff00","#ff9900","#8527a1"]
  var repetition=["a1","a2","a3","a4","a5","a6","a7","a8","a9","a10","a11","a12","a13","a14","a15","a16","a17","a18","a19","a20","a21","a22","a23","a24","a25","a26","a27","a28","a29","a30","a31","a32","a33","a34","a35"]
  A=36;moves=0;threeMinutes=299;clearInterval(Timeup)
  document.getElementById("a"+A).style.backgroundColor="transparent";
  display = document.querySelector('#time');
  startTimer(threeMinutes, display);
  for(var  i=1;i<=16;i++){
      color=colors[Math.floor(Math.random()*6)];
      rep1='y'
      rep1+=i
      document.getElementById("moves").innerHTML=moves;
      rep=Math.floor(Math.random()*repetition.length)
          document.getElementById(rep1.toString()).style.backgroundColor=color;
          document.getElementById(repetition[rep]).style.backgroundColor=color;
          if(repetition[rep]=="a8" || repetition[rep]=="a9" || repetition[rep]=="a10" || repetition[rep]=="a11" || repetition[rep]=="a14" || repetition[rep]=="a15" || repetition[rep]=="a16" ||  repetition[rep]=="a17" || repetition[rep]=="a20" || repetition[rep]=="a21" || repetition[rep]=="a22" || repetition[rep]=="a23" || repetition[rep]=="a26" || repetition[rep]=="a27" || repetition[rep]=="a28" || repetition[rep]=="a29"){
            document.getElementById(repetition[rep]).style.border="2px solid black" 
            document.getElementById(repetition[rep]).style.borderRadius="10px";
          }
          repetition.splice(rep,1);
  }
  i=0;
  for(var i=1;i<=19;i++){
      rep=Math.floor(Math.random()*repetition.length)
      color=colors[Math.floor(Math.random()*6)];
      document.getElementById(repetition[rep]).style.backgroundColor=color;
      if(repetition[rep]=="a8" || repetition[rep]=="a9" || repetition[rep]=="a10" || repetition[rep]=="a11" || repetition[rep]=="a14" || repetition[rep]=="a15" || repetition[rep]=="a16" ||  repetition[rep]=="a17" || repetition[rep]=="a20" || repetition[rep]=="a21" || repetition[rep]=="a22" || repetition[rep]=="a23" || repetition[rep]=="a26" || repetition[rep]=="a27" || repetition[rep]=="a28" || repetition[rep]=="a29"){
        document.getElementById(repetition[rep]).style.border="2px solid black" 
      }
      repetition.splice(rep,1);
  }
}
function move(B){
p="a"
if(A<=36 && A!=0 && A>=1){
  if(A==7 || A==13 || A==19 || A== 25 || A==31){
    if(B==A+6 || B==A-6 || B==A+1){  
      document.getElementById("s2").play() 
      document.getElementById(p+A).style.backgroundColor=document.getElementById(p+B).style.backgroundColor;
      document.getElementById(p+B).style.backgroundColor="transparent";
      moves++;
      document.getElementById("moves").innerHTML = moves;
      A=B;
    }
  }
  else if(A%6==0){
    if(B==A+6 || B==A-6 || B==A-1){  
      document.getElementById("s2").play() 
      document.getElementById(p+A).style.backgroundColor=document.getElementById(p+B).style.backgroundColor;
      document.getElementById(p+B).style.backgroundColor="transparent";
      moves++;
      document.getElementById("moves").innerHTML = moves;
      A=B;
    }
  }
  else{
    if (A==B+1 || A==B-1 || A==B+6 || A==B-6){
      document.getElementById("s2").play()
      document.getElementById(p+A).style.backgroundColor=document.getElementById(p+B).style.backgroundColor;
      document.getElementById(p+B).style.backgroundColor="transparent";
      moves++
      document.getElementById("moves").innerHTML=moves;
      A=B;
    }
  }
 } 
 if(document.getElementById("button1").innerHTML=="Stop"){
  if(document.getElementById("y1").style.backgroundColor===document.getElementById("a8").style.backgroundColor && document.getElementById("y2").style.backgroundColor===document.getElementById("a9").style.backgroundColor && document.getElementById("y3").style.backgroundColor===document.getElementById("a10").style.backgroundColor && document.getElementById("y4").style.backgroundColor===document.getElementById("a11").style.backgroundColor && document.getElementById("y5").style.backgroundColor===document.getElementById("a14").style.backgroundColor && document.getElementById("y6").style.backgroundColor===document.getElementById("a15").style.backgroundColor && document.getElementById("y7").style.backgroundColor===document.getElementById("a16").style.backgroundColor && document.getElementById("y8").style.backgroundColor===document.getElementById("a17").style.backgroundColor && document.getElementById("y9").style.backgroundColor===document.getElementById("a20").style.backgroundColor && document.getElementById("y10").style.backgroundColor===document.getElementById("a21").style.backgroundColor && document.getElementById("y11").style.backgroundColor===document.getElementById("a22").style.backgroundColor && document.getElementById("y12").style.backgroundColor===document.getElementById("a23").style.backgroundColor&& document.getElementById("y13").style.backgroundColor===document.getElementById("a26").style.backgroundColor&& document.getElementById("y14").style.backgroundColor===document.getElementById("a27").style.backgroundColor && document.getElementById("y15").style.backgroundColor===document.getElementById("a28").style.backgroundColor&& document.getElementById("y16").style.backgroundColor===document.getElementById("a29").style.backgroundColor){
    document.getElementById("background_1").style.display="block";
    clearTimeout(Timeup)
    document.getElementById("s1").play();
    score=1000-moves;
    document.getElementById("score1").innerHTML=score.toString();
  } 
 }
       
}
var z;
function easy(){
  document.getElementById("easy").style.display="Block";
  document.getElementById("normal").style.display="none";
  document.getElementById("button").innerHTML="Reset";
  document.getElementById("button").removeAttribute("onclick");
  document.getElementById("button").disabled=true;
  document.getElementById("button1").innerHTML="Start";
  document.getElementById("button1").removeAttribute("onclick");
  document.getElementById("button1").setAttribute("onclick","change()");
  z=1;
}
function normal(){
  document.getElementById("time").innerHTML="05:00";
  document.getElementById("normal").style.display="Block";
  document.getElementById("easy").style.display="none";
  document.getElementById("button").innerHTML="Reset";
  document.getElementById("button").removeAttribute("onclick");
  document.getElementById("button").disabled=true;
  document.getElementById("button1").innerHTML="Start";
  document.getElementById("button1").removeAttribute("onclick");
  document.getElementById("button1").setAttribute("onclick","change()");
 
  z=2;
}
function change(){
    if(z==1){
      if(document.getElementById("button1").innerHTML=="Start"){
        getrandomcolor();
        document.getElementById("button").setAttribute("onclick","getrandomcolor()");
        document.getElementById("button").disabled=false;
        document.getElementById("button1").innerHTML="Stop";
      }
      else if(document.getElementById("button1").innerHTML=="Stop"){
       change1();
    }
  }
    else if(z==2){
      if(document.getElementById("button1").innerHTML=="Start"){
        getrandomcolor2();
        document.getElementById("button").setAttribute("onclick","getrandomcolor2()");
        document.getElementById("button").disabled=false;
        document.getElementById("button1").innerText="Stop";
      }
      else if(document.getElementById("button1").innerHTML=="Stop") {
        change2();
    }
  }
}

function change2(){
  A=0;
  clearInterval(Timeup)
        document.getElementById("time").innerHTML="03:00"
        document.getElementById("button").innerHTML="Normal";
        document.getElementById("button").removeAttribute("onclick");
        document.getElementById("button").setAttribute("onclick","normal()");
        document.getElementById("button1").innerHTML="Easy";
        document.getElementById("button1").removeAttribute("onclick");
        document.getElementById("button1").setAttribute("onclick","easy()");
      for(var i=1;i<=16;i++){
        it1='y'
        it1+=i
        document.getElementById(it1.toString()).style.backgroundColor="transparent";
      }
      for(i=1;i<=36;i++){
        a="a"
        document.getElementById(a+i).style.backgroundColor="transparent";
        document.getElementById(a+i).style.border="0.2px solid rgba(0, 0, 0, 0.8)";
      }
}
function change1(){
  A=0;
  clearInterval(Timeup)
  document.getElementById("time").innerHTML="03:00"
  document.getElementById("button").innerHTML="Normal";
  document.getElementById("button").removeAttribute("onclick");
  document.getElementById("button").setAttribute("onclick","normal()");
  document.getElementById("button1").innerHTML="Easy";
  document.getElementById("button1").removeAttribute("onclick");
  document.getElementById("button1").setAttribute("onclick","easy()");
  for(var i=1;i<=9;i++){
    it1='x'
    it1+=i
    document.getElementById(it1.toString()).style.backgroundColor="transparent";
  }
  for(i=1;i<=25;i++){
    document.getElementById(i).style.backgroundColor="transparent";
    document.getElementById(i).style.border= "0.2px solid rgba(0, 0, 0, 0.8)";
  }
}
function part1(txt){
  const person = {
    name: txt,
    Score: score,
  }
  p = JSON.parse(window.localStorage.getItem('user'));
  if(p.Score<=person.Score || person.Score==undefined){
    window.localStorage.setItem('user',JSON.stringify(person))
  }
  restart();
}
window.onload=function(){
  p = JSON.parse(window.localStorage.getItem('user'));
  document.getElementById("highscore1").innerHTML= p.name + "  " + p.Score  ;
}