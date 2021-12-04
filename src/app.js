// Unused Xpanel Config //
//////////////////////////
// const webXpanel = require('@crestron/ch5-webxpanel/dist/cjs/index.js');

// const configuration = {
//     host: '192.168.115.24',
//     ipId: '79'
// };

// if (webXpanel.isActive) {
//     console.log(`WebXPanel version: ${webXpanel.getVersion()}`);
//     console.log(`WebXPanel build date: ${webXpanel.getBuildDate()}`);

//     webXpanel.default.initialize(configuration);
// }
// else {
//     console.log('Skipping WebXPanel since running on touchpanel');
// }

// Info from 'Jared - Status Controls' - utroda#5159 on Crestron discord
////////////////////////////////////////////////////////////////////////////
//The amd and cjs module types do not create or expose any global objects
// or functions.Projects created by advanced JavaScript developers using
// amd and cjs modules must expose four functions from the Crestron CH5
//communications library to allow the control systems communications to
//be received by the CH5 library.As example for cjs projects, the following
//code should be executed at startup of the project. 
////////////////////////////////////////////////////////////////////////////
// import { bridgeReceiveIntegerFromNative, bridgeReceiveBooleanFromNative, bridgeReceiveStringFromNative, bridgeReceiveObjectFromNative }
// 	from '@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib';
// window['bridgeReceiveIntegerFromNative'] = bridgeReceiveIntegerFromNative;
// window['bridgeReceiveBooleanFromNative'] = bridgeReceiveBooleanFromNative;
// window['bridgeReceiveStringFromNative'] = bridgeReceiveStringFromNative;
// window['bridgeReceiveObjectFromNative'] = bridgeReceiveObjectFromNative;

const crComLib = require('../node_modules/@crestron/ch5-crcomlib/build_bundles/cjs/cr-com-lib.js');

window.crComLib = crComLib;
window.bridgeReceiveIntegerFromNative = crComLib.bridgeReceiveIntegerFromNative;
window.bridgeReceiveBooleanFromNative = crComLib.bridgeReceiveBooleanFromNative;
window.bridgeReceiveStringFromNative = crComLib.bridgeReceiveStringFromNative;
window.bridgeReceiveObjectFromNative = crComLib.bridgeReceiveObjectFromNative;

const titleBtn = document.getElementById('titleBtn');
const launchBtnA = document.getElementById('launchBtnA');
const launchBtnB = document.getElementById('launchBtnB');
const launchBtnC = document.getElementById('launchBtnC');
const footBtnA = document.getElementById('footBtnA');
const footBtnB = document.getElementById('footBtnB');
const footBtnC = document.getElementById('footBtnC');
const footBtnD = document.getElementById('footBtnD');
const footBtnE = document.getElementById('footBtnE');
// const homeBtn = document.getElementById('homeBtn');
const btnFade = document.querySelector('.fadeButton');
const eleFade = document.querySelector('.launchBtn');
const sources = document.querySelector('.src');

//Digital Join function and listeners
// function onClick1(digitalJoin) {
// 	crComLib.publishEvent('b', digitalJoin, true);
// 	crComLib.publishEvent('b', digitalJoin, false);
// }
// launchBtnA.addEventListener('click', onClick1('1'));
// launchBtnB.addEventListener('click', onClick1('2'));
// launchBtnC.addEventListener('click', onClick1('3'));
// footBtnA.addEventListener('click', onClick1('4'));


var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
	document.querySelectorAll('*'),
	function (el) {
		if (el.offsetWidth > docWidth) {
			console.log(el);
		}
	}
);





// Each button recieves this function. Replace the 'num1'
//parameter with the Simpl Digital Join number desired
function cresInteract(num1) {
	console.log('Button has been Pushed');
	crComLib.publishEvent('b', num1, 'true');
	console.log(num1, 'High');
	setTimeout(() => {
		crComLib.publishEvent('b', num1, 'false');
	}, 500);
	console.log(num1, 'Low');
};

// Animation Timing JS
function fadeAnimate() {
	sources.classList.add('elementToFadeInAndOut');
	setTimeout(() => {
		div.classList.remove('elementToFadeInAndOut');
	}, 4000);
}

// crComLib.subscribeState('s', 1, (value) => {
// 	const elem = document.getElementById('room-name');
// 	elem.innerHTML = value;
// });

// crComLib.subscribeState('s', 2, (value) => {
// 	const elem = document.getElementsByClassName('subtitle');
// 	elem.innerHTML = value;
// });


const pageTurn = (pageName) => {
	location.href = pageName;
};

// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
// Remove these due to function above?
// const pageTurnPC = () => {
// 	location.href = 'localPC.html';
// };

// const pageTurnCBL = () => {
// 	location.href = 'cable.html';
// };

// const pageTurnAPL = () => {
// 	location.href = 'appleTV.html';
// };

// const pageTurnLog = () => {
//   console.log('PageTurn');
// };
///////////////////////////////////////////

titleBtn.addEventListener('click', () => {
	pageTurn('index.html');
});


sources.addEventListener('click', () => {
	fadeAnimate();
});


launchBtnA.addEventListener('click', () => {
	cresInteract('41');
	setTimeout(function () {
		pageTurn('localPC.html');
	}, 1000);
});

launchBtnB.addEventListener('click', () => {
	cresInteract('42');
	setTimeout(function () {
		pageTurn('cable.html');
	}, 1000);
});

launchBtnC.addEventListener('click', () => {
	cresInteract('43');
	setTimeout(function () {
		pageTurn('appleTV.html');
	}, 1000);
});

footBtnA.addEventListener('click', () => {
	cresInteract('60');
	// location.href = 'localPC.html';
});

footBtnB.addEventListener('click', () => {
	cresInteract('61');
	// location.href = 'cable.html';
});

footBtnC.addEventListener('click', () => {
	cresInteract('62');
	// location.href = 'appleTV.html';
});

footBtnD.addEventListener('click', () => {
	cresInteract('63');
	// location.href = 'appleTV.html';
});

footBtnE.addEventListener('click', () => {
	cresInteract('64');
	// location.href = 'appleTV.html';
});

// homeBtn.addEventListener('click', () => {
// 	cresInteract('64');
// 	location.href = 'index.html'
// });

// launchBtnA.addEventListener('click', () => {
//         console.log('PC button has been pushed');
//         publishEvent('b', '20', 'true');
//         console.log('20 High');
//         setTimeout(() => {
//           publishEvent('b', '20', 'false');
//         }, 2000);
//         console.log('20 Low')
//         location.href = 'localPC.html';
//     });

// launchBtnA.addEventListener('click');

console.log('!!!SCRIPTEND!!!');