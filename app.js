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
var interval;

function timer(){
    msec++;
    msecHeading.value = msec;
    if(msec >= 100){
        sec++;
        secHeading.value = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        minHeading.value = min;
        sec = 0;
    }
}
