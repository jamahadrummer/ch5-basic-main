console.log("!!!SCRIPTRUN!!!");
import * as crComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";

document.querySelector(".sources").addEventListener("click", (event) => {
	console.log(event);

});

// const launchBtnA = document.getElementById("btn_20");
// const launchBtnB = document.getElementById("btn_21");
// const launchBtnC = document.getElementById("btn_22");
// const instHide = document.getElementsByTagName("H3");
// // const footBtnA   = document.getElementById("footBtnA");
// // const footBtnB   = document.getElementById("footBtnB");
// // const footBtnC   = document.getElementById("footBtnC");
// // const footBtnD   = document.getElementById("footBtnD");
// // const footBtnE   = document.getElementById("footBtnE");
// const srcBtnA   = document.getElementById("btn_30");
// // const srcBtnB   = document.getElementById("btn_32");
// // const srcBtnC   = document.getElementById("btn_33");
function buttonPush() {
	console.log("PC button has been pushed");
}

// launchBtnA.addEventListener("click", () => {
//     console.log("PC button has been pushed");
//     ch5Crcomlib.publishEvent("b", "20", "true");
//     console.log("20 High");
//     setTimeout(() => {
//       ch5Crcomlib.publishEvent("b", "20", "false");
//     }, 2000);
//     console.log("20 Low")
//     location.href = "localPC.html";
// })

// launchBtnB.addEventListener("click", () => {
//     // location.href = "cable.html";
//     console.log("Cable button has been pushed");
//     ch5Crcomlib.publishEvent("b", "21", "true");
//     console.log("21 High")
//     setTimeout(() => {
//       ch5Crcomlib.publishEvent("b", "21", "false");
//     }, 2000);
//     console.log("21 Low")
//   });

//   launchBtnC.addEventListener("click", function () {
//   // location.href = "appleTV.html";
//   console.log("Apple button has been pushed");
//   ch5Crcomlib.publishEvent("b", "22", "true");
//   console.log("22 High")
//     setTimeout(() => {
//       ch5Crcomlib.publishEvent("b", "22", "false");
//     }, 2000);
//     console.log("22 Low");
//   });

// footBtnA.addEventListener("click", () => {
//   // location.href = "index.html";
//   console.log("Power");
// });

// footBtnB.addEventListener("click", () => {
//   // location.href = "index.html";
//   console.log("Settings");
// });

// footBtnC.addEventListener("click", () => {
//   // location.href = "index.html";
//   console.log("Vol Up");
// });

// footBtnD.addEventListener("click", () => {
//   // location.href = "index.html";
//   console.log("Vol Down");
// });

// footBtnE.addEventListener("click", () => {
//   // location.href = "index.html";
//   console.log("Vol Mute");
// });

// srcBtnA.addEventListener("click",() => {
//   // location.href = "localPC.html";
//   console.log("srcLocal PC")
// });


// srcBtnA.addEventListener("click", function () {
//   location.href = "localPC.html"; 
//   console.log("PC button has been pushed");
//   ch5Crcomlib.publishEvent("b", "1", "true");
//   console.log("1 High")
//     setTimeout(() => {
//       ch5Crcomlib.publishEvent("b", "1", "false");
//     }, 2000);
//     console.log("1 Low")
// });


// // srcBtnB.addEventListener("click", function () {
// // location.href = "cable.html";
// // console.log("Cable button has been pushed");
// // ch5Crcomlib.publishEvent("b", "2", "true");
// // console.log("2 High")
// //   setTimeout(() => {
// //     ch5Crcomlib.publishEvent("b", "2", "false");
// //   }, 2000);
// //   console.log("2 Low")
// // });

// // srcBtnC.addEventListener("click", function () {
// // location.href = "appleTV.html";
// // console.log("Apple button has been pushed");
// // ch5Crcomlib.publishEvent("b", "3", "true");
// // console.log("3 High")
// //   setTimeout(() => {
// //     ch5Crcomlib.publishEvent("b", "3", "false");
// //   }, 2000);
// //   console.log("3 Low");
// // });


console.log("!!!ENDSCRIPT!!!");