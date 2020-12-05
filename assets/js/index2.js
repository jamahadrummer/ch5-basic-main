import * as CrComLib from "@crestron/ch5-crcomlib";

const launchBtnA = document.getElementById("launchBtnA");
const launchBtnB = document.getElementById("launchBtnB");
const launchBtnC = document.getElementById("launchBtnC");
const mainBtnA = document.getElementById("mainBtnA");
const mainBtnB = document.getElementById("mainBtnB");
const mainBtnC = document.getElementById("mainBtnC");

launchBtnA.addEventListener("click", () => {
  location.href = "localPC.html";
  console.log("PC button has been pushed");
  CrComLib.publishEvent("b", "1", "true");
  console.log("1 High")
    setTimeout(() => {
      CrComLib.publishEvent("b", "1", "false");
    }, 2000);
    console.log("1 Low")
});

launchBtnB.addEventListener("click", function () {
location.href = "cable.html";
console.log("Cable button has been pushed");
CrComLib.publishEvent("b", "2", "true");
console.log("2 High")
  setTimeout(() => {
    CrComLib.publishEvent("b", "2", "false");
  }, 2000);
  console.log("2 Low")
});

launchBtnC.addEventListener("click", function () {
location.href = "appleTV.html";
console.log("Apple button has been pushed");
CrComLib.publishEvent("b", "3", "true");
console.log("3 High")
  setTimeout(() => {
    CrComLib.publishEvent("b", "3", "false");
  }, 2000);
  console.log("3 Low");
});

// mainBtnA.addEventListener("click", () => {
//   location.href = "localPC.html";
//   console.log("PC button has been pushed");
//   CrComLib.publishEvent("b", "1", "true");
//   console.log("1 High")
//     setTimeout(() => {
//       CrComLib.publishEvent("b", "1", "false");
//     }, 2000);
//     console.log("1 Low")
// });

// mainBtnB.addEventListener("click", function () {
// location.href = "cable.html";
// console.log("Cable button has been pushed");
// CrComLib.publishEvent("b", "2", "true");
// console.log("2 High")
//   setTimeout(() => {
//     CrComLib.publishEvent("b", "2", "false");
//   }, 2000);
//   console.log("2 Low")
// });

// mainBtnC.addEventListener("click", function () {
// location.href = "appleTV.html";
// console.log("Apple button has been pushed");
// CrComLib.publishEvent("b", "3", "true");
// console.log("3 High")
//   setTimeout(() => {
//     CrComLib.publishEvent("b", "3", "false");
//   }, 2000);
//   console.log("3 Low");
// });
