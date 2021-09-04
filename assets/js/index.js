console.log("!!!SCRIPTRUN!!!")
// import * as ch5CrcomLib from "@crestron/ch5-crcomlib";
import * as crComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";


const launchBtnA = document.getElementById("launchBtnA");
const launchBtnB = document.getElementById("launchBtnB");
const launchBtnC = document.getElementById("launchBtnC");
const footBtnA = document.getElementById("footBtnA");
const footBtnB = document.getElementById("footBtnB");
const footBtnC = document.getElementById("footBtnC");
const footBtnD = document.getElementById("footBtnD");
const footBtnE = document.getElementById("footBtnE");
const btnFade = document.querySelector(".fadeButton");
const eleFade = document.querySelector(".launchBtn");
const sources = document.querySelector(".sources");


// Each button recieves this function. Replace the 'num1' parameter with the Simpl Digital Join number desired
function cresInteract(num1) {
  console.log("Button has been Pushed");
  publishEvent("b", num1 , "true");
  console.log(num1,"High");
  setTimeout(() => {
    publishEvent("b", num1 , "false");
  }, 2000);
  console.log(num1,"Low")
};

// Animation Timing JS
function fadeAnimate (){
  sources.classList.add("elementToFadeInAndOut");
  setTimeout(() => {
      div.classList.remove("elementToFadeInAndOut");
    }, 4000);
}

const pageTurn = (pageName) => {
  location.href = pageName;
}

const pageTurnPC = () => {
  location.href = "localPC.html";
}

const pageTurnCBL = () => {
  location.href = "cable.html";
}

const pageTurnAPL = () => {
  location.href = "appleTV.html";
}

// const pageTurnLog = () => {
//   console.log('PageTurn');
// };

sources.addEventListener("click", () => {
  fadeAnimate();
});

launchBtnA.addEventListener("click", () => {
  cresInteract("41");
  setTimeout (function() {
    pageTurn("localPC.html");
  }, 1000);
  
});

launchBtnB.addEventListener("click", () => {
  cresInteract("42");
  fadeAnimate();
  setTimeout (pageTurnCBL, 1000);
});

launchBtnC.addEventListener("click", () => {
  cresInteract("43");
  fadeAnimate();
  setTimeout (pageTurnAPL, 1000);
});

footBtnA.addEventListener("click", () => {
  cresInteract("60");
  // location.href = "localPC.html";
});

footBtnB.addEventListener("click", () => {
  cresInteract("61");
  // location.href = "cable.html";
});

footBtnC.addEventListener("click", () => {
  cresInteract("62");
  // location.href = "appleTV.html";
});

footBtnD.addEventListener("click", () => {
  cresInteract("63");
  // location.href = "appleTV.html";
});

footBtnE.addEventListener("click", () => {
  cresInteract("64");
  // location.href = "appleTV.html";
});

// launchBtnA.addEventListener("click", () => {
//         console.log("PC button has been pushed");
//         publishEvent("b", "20", "true");
//         console.log("20 High");
//         setTimeout(() => {
//           publishEvent("b", "20", "false");
//         }, 2000);
//         console.log("20 Low")
//         location.href = "localPC.html";
//     });

    // launchBtnA.addEventListener("click");

console.log("!!!SCRIPTEND!!!")