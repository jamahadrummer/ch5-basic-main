console.log("!!!SCRIPTRUN!!!");
import * as crComLib from "@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js";

const srcBtnA = document.getElementById("srcBtnA");
const srcBtnB = document.getElementById("srcBtnB");
const srcBtnC = document.getElementById("srcBtnC");
const footBtnA = document.getElementById("footBtnA");
const footBtnB = document.getElementById("footBtnA");
const footBtnC = document.getElementById("footBtnC");
const footBtnD = document.getElementById("footBtnD");
const footBtnE = document.getElementById("footBtnE");



function cresInteract(num1) {
	console.log("PC button has been Pushed");
	publishEvent("b", num1, "true");
	console.log(num1, "High");
	setTimeout(() => {
		publishEvent("b", num1, "false");
	}, 2000);
	console.log(num1, "Low");
};


srcBtnA.addEventListener("click", () => {
	cresInteract("30");
	location.href = "localPC.html";
});

srcBtnB.addEventListener("click", () => {
	cresInteract("21");
	// location.href = "cable.html";
});

srcBtnC.addEventListener("click", () => {
	cresInteract("22");
	// location.href = "appleTV.html";
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

console.log("!!!SCRIPTEND!!!");