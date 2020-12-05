import * as ch5Crcomlib from "@crestron/ch5-crcomlib";


const launchBtnA = document.getElementById("launchBtnA");
const launchBtnB = document.getElementById("launchBtnB");
const launchBtnC = document.getElementById("launchBtnC");
const footBtnA   = document.getElementById("footBtnA");
const footBtnB   = document.getElementById("footBtnB");
const footBtnC   = document.getElementById("footBtnC");
const footBtnD   = document.getElementById("footBtnD");
const footBtnE   = document.getElementById("footBtnE");
const srcBtnA   = document.getElementById("srcBtnA");
const srcBtnB   = document.getElementById("srcBtnB");
const srcBtnC   = document.getElementById("srcBtnC");

  launchBtnA.addEventListener("click", () => {
    // location.href = "localPC.html";
    console.log("PC button has been pushed");
    ch5Crcomlib.publishEvent("b", "1", "true");
    console.log("1 High")
      setTimeout(() => {
        ch5Crcomlib.publishEvent("b", "1", "false");
      }, 2000);
      console.log("1 Low")
  });

  launchBtnB.addEventListener("click", function () {
  // location.href = "cable.html";
  console.log("Cable button has been pushed");
  ch5Crcomlib.publishEvent("b", "2", "true");
  console.log("2 High")
    setTimeout(() => {
      ch5Crcomlib.publishEvent("b", "2", "false");
    }, 2000);
    console.log("2 Low")
  });

  launchBtnC.addEventListener("click", function () {
  // location.href = "appleTV.html";
  console.log("Apple button has been pushed");
  ch5Crcomlib.publishEvent("b", "3", "true");
  console.log("3 High")
    setTimeout(() => {
      ch5Crcomlib.publishEvent("b", "3", "false");
    }, 2000);
    console.log("3 Low");
  });

  footBtnA.addEventListener("click", () => {
    // location.href = "index.html";
    console.log("Power");
  });

  footBtnB.addEventListener("click", () => {
    // location.href = "index.html";
    console.log("Settings");
  });

  footBtnC.addEventListener("click", () => {
    // location.href = "index.html";
    console.log("Vol Up");
  });

  footBtnD.addEventListener("click", () => {
    // location.href = "index.html";
    console.log("Vol Down");
  });

  footBtnE.addEventListener("click", () => {
    // location.href = "index.html";
    console.log("Vol Mute");
  });

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
  

  // srcBtnB.addEventListener("click", function () {
  // location.href = "cable.html";
  // console.log("Cable button has been pushed");
  // ch5Crcomlib.publishEvent("b", "2", "true");
  // console.log("2 High")
  //   setTimeout(() => {
  //     ch5Crcomlib.publishEvent("b", "2", "false");
  //   }, 2000);
  //   console.log("2 Low")
  // });

  // srcBtnC.addEventListener("click", function () {
  // location.href = "appleTV.html";
  // console.log("Apple button has been pushed");
  // ch5Crcomlib.publishEvent("b", "3", "true");
  // console.log("3 High")
  //   setTimeout(() => {
  //     ch5Crcomlib.publishEvent("b", "3", "false");
  //   }, 2000);
  //   console.log("3 Low");
  // });
