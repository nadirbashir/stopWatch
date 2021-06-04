// var count = 0;
// var interval;

// function timer(){
//     count++;
//     console.log(count);

// }

// // //set interval ek javascript ka default function hai jo apny aap kuch time badh repeat hota hai
// interval = setInterval(timer,1000);

// // //set interval ko setTimeout method se roksakty hain

// // // setTimeOut ye ek bar chalta hai or dhusry argument mein jo time dhengy utny time badh ye chalega
// // function timeOut(){
// //     console.log("running...");
// // }

// // // setTimeout(timeOut, 3000);

// setTimeout(function(){
//    // //clearInterval by default method hai jo timer ko rokta
//     clearInterval(interval);
// },5000)

var min = 0;
var sec = 0;
var msec = 0;

var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");
var progress = document.getElementById("progress");
var rightProgress = document.getElementById("rightProgress");
var heading = document.getElementById("heading");
var timerButtons = document.getElementById("timer_btn");
var stopWatchButtons = document.getElementById("stopWatch_btn");
var totalSec = 0;
var interval;

function stopWatch_btn() {
  clearInterval(interval);
  heading.innerHTML = "Stop Watch";
  document.getElementById("startStopWatch").removeAttribute("disabled");
  min = 0;
  sec = 0;
  msec = 0;
  minHeading.value = min;
  secHeading.value = sec;
  msecHeading.value = msec;
  timerButtons.style.display = "none";
  stopWatchButtons.style.display = "block";
  minHeading.style.border = "none";
  secHeading.style.border = "none";
  msecHeading.style.border = "none";
  progress.style.width = "0%";
  progress.style.height = "0%";
  rightProgress.style.width = "0%";
  rightProgress.style.height = "0%";

}

function setTimer() {
  minHeading.value = 0;
  secHeading.value = 0;
  msecHeading.value = 0;
  stopWatchButtons.style.display = "none";
  timerButtons.style.display = "block";
  heading.innerHTML = "Timer";
  minHeading.focus();
  secHeading.style.border = "1px solid #c3b20f";
  msecHeading.style.border = "1px solid #c3b20f";
  progress.style.width = "0%";
  progress.style.height = "0%";
  rightProgress.style.width = "0%";
  rightProgress.style.height = "0%";
}

function stopWatch() {
  msec++;
  msecHeading.value = msec;
  if (msec >= 100) {
    sec++;
    secHeading.value = sec;
    msec = 0;
  } else if (sec >= 60) {
    min++;
    minHeading.value = min;
    sec = 0;
  }
}
function timer() {
  msec--;
  msecHeading.value = msec;
  if (msec <= 0) {
    msec = 100;
    sec--;
    console.log(sec);
    secHeading.value = sec;
  } else if (sec <= 0) {
    min--;
    minHeading.value = min;
    sec = 60;
  } else if (min < 0){
    reset();
    clearInterval(interval);
  }
}

function startStopWatch() {
    interval = setInterval(stopWatch, 10);
    document.getElementById("startStopWatch").setAttribute("disabled", ""); 
}

function startTimer(){
  min = minHeading.value;
  sec = secHeading.value;
  msec = msecHeading.value;
  interval = setInterval(timer, 10);
  document.getElementById("startTimer").setAttribute("disabled", "");
  if(rightProgress.style.animationPlayState === 'paused' || progress.style.animationPlayState === 'paused' && (totalSec == 0)){
    rightProgress.style.animationPlayState = 'running';
    progress.style.animationPlayState = 'running'
  }else{
    console.log(totalSec + "total sec")
    minHeading.style.border = "none";
  secHeading.style.border = "none";
  msecHeading.style.border = "none";
  totalSec = ((min * 60 + (+sec)) / 2);
  rightProgress.style.animationDuration = totalSec + "s";
  rightProgress.style.animationDelay = 3 + "s";
  // rightProgress.style.animationIterationCount = 1;
  rightProgress.style.width = "100%";
  rightProgress.style.height = "100%";
  progress.style.animationDuration = +totalSec + 3 + "s";
  rightProgress.style.animationDelay =+ totalSec + 3 + "s";
  // progress.style.animationIterationCount = 1;
  progress.style.width = "100%";
  progress.style.height = "100%";
  // console.log(progress.style.animationDuration);
  // rightProgress.style.animationDelay = '6s';
}
}

function pause() {
  clearInterval(interval);
  document.getElementById("startStopWatch").removeAttribute("disabled");
  document.getElementById("startTimer").removeAttribute("disabled");
  rightProgress.style.animationPlayState = 'paused';
  progress.style.animationPlayState = 'paused';
}
function reset() {
  pause();
  min = 0;
  sec = 0;
  msec = 0;
  totalSec = 0;
  minHeading.value = min;
  secHeading.value = sec;
  msecHeading.value = msec;
  progress.style.width = "0%";
  progress.style.height = "0%";
  rightProgress.style.width = "0%";
  rightProgress.style.height = "0%";
}



function borderYellow(x) {
  x.style.border = "1px solid #c3b20f";
}
function removeBorder(x) {
  x.style.border = "none";
}

// window.addEventListener("click",function(){
//     minHeading.style.border = 'none';
//     secHeading.style.border = 'none';
//     msecHeading.style.border = 'none';
// });
// const seconds = document.querySelector(".sec").value;
// let counter = 0;
// setInterval(()=>{
//     if(counter == 60){
//         clearInterval();
//     }else{
//         counter += 1;
//         seconds = counter;
//     }
// },900)
