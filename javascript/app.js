
/***************************************************************************************/
// Setting up type-writer animation for loader
var i = 0;
var txt = '     Ice Cream Day';
var speed = 100;

function typeWriter() {
	if (i === 8) {
		document.querySelector('.loadme').innerHTML += "Y ";
		i++;
		i++;
		setTimeout(typeWriter, speed);
	}
	else if (i < txt.length) {
		document.querySelector('.loadme').innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

typeWriter();
// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up homepage pictures to alternate on click AND media queries for nav clicks
var imgIndex = 1;
var phoneImgIndex = 1;
var leftPicture = document.querySelector('.block-left');
var leftPictureFrame = document.querySelector('.homepage-block-left');
var rightPicture = document.querySelector('.block-right');
var rightPictureFrame = document.querySelector('.homepage-block-right');

var mainPicture = document.querySelector('.main-picture');
var mainAnimator = document.querySelector('.middle-frame');
var mainHeader = document.querySelector('.main-header');


function resetSideAnimations() {
	leftPictureFrame.style.animation = 'none';
	leftPictureFrame.offsetHeight; /* trigger reflow */
	leftPictureFrame.style.animation = null;
	rightPictureFrame.style.animation = 'none';
	rightPictureFrame.offsetHeight;
	rightPictureFrame.style.animation = null;
}

function resetEnlargeMain() {
	mainPicture.style.animation = 'none';
	mainPicture.offsetHeight; /* trigger reflow */
	mainPicture.style.animation = null;
}

function resetFromLeft() {
	mainAnimator.style.WebkitAnimationName = "middle-animate-left";
	mainAnimator.style.animation = 'none';
	mainAnimator.offsetHeight; /* trigger reflow */
	mainAnimator.style.animation = null;
	mainAnimator.style.WebkitAnimationName = "middle-animate-left";
}

function resetFromRight() {
	mainAnimator.style.WebkitAnimationName = "middle-animate-right";
	mainAnimator.style.animation = 'none';
	mainAnimator.offsetHeight; /* trigger reflow */
	mainAnimator.style.animation = null;
	mainAnimator.style.WebkitAnimationName = "middle-animate-right";
}

// Scroll to container on click
mainPicture.addEventListener('click', function () {
	if (imgIndex === 1) {
		smoothScroll('.projects-container', scrollSpeed);
	}
	else if (imgIndex === 2) {
		smoothScroll('.vlogs-container', scrollSpeed);
	}
	else if (imgIndex === 3) {
		smoothScroll('.contact-container', scrollSpeed);
	}
})

leftPicture.onclick = function () {
	if (imgIndex === 1) {
		leftPicture.style.backgroundImage = 'url(images/strawberry.jpg)';
		mainPicture.setAttribute('src', 'images/vanilla.jpg');
		rightPicture.style.backgroundImage = 'url(images/chocolate.jpg)';
		imgIndex = 3;
		mainHeader.innerHTML = "Vanilla";
		resetSideAnimations();
		resetFromRight();
		resetEnlargeMain();
	}
	else if (imgIndex === 3) {
		leftPicture.style.backgroundImage = 'url(images/chocolate.jpeg)';
		mainPicture.setAttribute('src', 'images/strawberry.jpg');
		rightPicture.style.backgroundImage = 'url(images/vanilla.jpg)';
		imgIndex = 2;
		mainHeader.innerHTML = "Strawberry";
		resetSideAnimations();
		resetFromRight();
		resetEnlargeMain();
	}
	else if (imgIndex === 2) {
		leftPicture.style.backgroundImage = 'url(images/vanilla.jpg)';
		mainPicture.setAttribute('src', 'images/chocolate.jpeg');
		rightPicture.style.backgroundImage = 'url(images/strawberry.jpg)';
		imgIndex = 1;
		mainHeader.innerHTML = "Chocolate";
		resetSideAnimations();
		resetFromRight();
		resetEnlargeMain();
	}
};

rightPicture.onclick = function () {
	if (imgIndex === 1) {
		leftPicture.style.backgroundImage = 'url(images/chocolate.jpeg)';
		mainPicture.setAttribute('src', 'images/strawberry.jpg');
		rightPicture.style.backgroundImage = 'url(images/vanilla.jpg)';
		imgIndex = 2;
		mainHeader.innerHTML = "Strawberry";
		resetSideAnimations();
		resetFromLeft();
		resetEnlargeMain();
	}
	else if (imgIndex === 2) {
		leftPicture.style.backgroundImage = 'url(images/strawberry.jpg)';
		mainPicture.setAttribute('src', 'images/vanilla.jpg');
		rightPicture.style.backgroundImage = 'url(images/chocolate.jpeg)';
		imgIndex = 3;
		mainHeader.innerHTML = "Vanilla";
		resetSideAnimations();
		resetFromLeft();
		resetEnlargeMain();
	}
	else if (imgIndex === 3) {
		leftPicture.style.backgroundImage = 'url(images/vanilla.jpg)';
		mainPicture.setAttribute('src', 'images/chocolate.jpeg');
		rightPicture.style.backgroundImage = 'url(images/strawberry.jpg)';
		imgIndex = 1;
		mainHeader.innerHTML = "Chocolate";
		resetSideAnimations();
		resetFromLeft();
		resetEnlargeMain();
	}
};

// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up button functions in project container. These functions will animate and update
// project information upon button clicks.
var currentBtn = 1;
var p1Container = document.querySelector('.project-one-container');
var btn1Project = document.querySelector('.btn-one');
var btn2Project = document.querySelector('.btn-two');
var btn3Project = document.querySelector('.btn-three');

var title = document.querySelector('.p1-title');
var lang1 = document.querySelector('.p1-lang1');
var lang2 = document.querySelector('.p1-lang2');
var lang3 = document.querySelector('.p1-lang3');
var lang4 = document.querySelector('.p1-lang4');
var lang5 = document.querySelector('.p1-lang5');
var paragraph = document.querySelector('.p1-paragraph');
var visitSite = document.querySelector('.btn-p1-visit');
var viewGit = document.querySelector('.btn-p1-git');
var projectImg = document.querySelector('.p1-picture');

function resetP1Animate(qSelect, animateName) {
	qSelect.style.WebkitAnimationName = animateName;
	qSelect.style.animation = 'none';
	qSelect.offsetHeight; /* trigger reflow */
	qSelect.style.animation = null;
	qSelect.style.WebkitAnimationName = animateName;
}

function animateOutPro() {
	p1Container.style.transform = "translateX(-150rem)";
}
function animateOutPro2() {
	p1Container.style.transform = "translateX(0rem)";
}

function btn1ChangeColors() {
	if (currentBtn == 2 || currentBtn == 3) {
		btn1Project.style.background = "#c584bc";
		btn1Project.style.color = "white";
		btn2Project.style.background = "white";
		btn2Project.style.color = "black";
		btn3Project.style.background = "white";
		btn3Project.style.color = "black";
		currentBtn = 1;
	}
}

function btn2ChangeColors() {
	if (currentBtn == 1 || currentBtn == 3) {
		btn2Project.style.background = "#c584bc";
		btn2Project.style.color = "white";
		btn1Project.style.background = "white";
		btn1Project.style.color = "black";
		btn3Project.style.background = "white";
		btn3Project.style.color = "black";
		currentBtn = 2;
	}
}

function btn3ChangeColors() {
	if (currentBtn == 1 || currentBtn == 2) {
		btn3Project.style.background = "#c584bc";
		btn3Project.style.color = "white";
		btn1Project.style.background = "white";
		btn1Project.style.color = "black";
		btn2Project.style.background = "white";
		btn2Project.style.color = "black";
		currentBtn = 3;
		console.log(currentBtn);
	}
}

function updateSummaryP1() {
	title.innerHTML = "UNITY TUTORING";
	lang1.innerHTML = "VUE.JS";
	lang2.innerHTML = "EXPRESS.JS";
	lang3.innerHTML = "MONGO.DB";
	lang4.style.visibility = "visible";
	lang5.style.visibility = "visible";
	lang4.innerHTML = "BOOTSTRAP";
	lang5.innerHTML = "HEROKU";
	paragraph.innerHTML = "I wanted to build a website that allowed English tutors " +
		"to connect with students globally via webcam. The goal of the website " +
		"was to have the UI and UX as simple and intuitive as possible for students, " +
		"tutors, and admin. For the backend infrastrucutre, I used express.js and " +
		"mongoDB. The front-end was built with vue.js and bootstrap. The website is " +
		"deployed on Heroku."
	projectImg.setAttribute('src', 'images/tutor.jpg');
}

function updateSummaryP2() {
	title.innerHTML = "PROJECT 2";
	lang1.innerHTML = "REACT.NATIVE";
	lang2.innerHTML = "MONGODB";
	lang3.innerHTML = "AWS";
	lang4.style.visibility = "hidden";
	lang5.style.visibility = "hidden";
	lang4.innerHTML = "";
	lang5.innerHTML = "";
	paragraph.innerHTML = "Concept for web project 2 is currently in the making. Check back later for updates!"
	projectImg.setAttribute('src', 'images/native.png');
}

function updateSummaryP3() {
	title.innerHTML = "TONYVU.IO";
	lang1.innerHTML = "JAVASCRIPT";
	lang2.innerHTML = "HTML";
	lang3.innerHTML = "SASS";
	lang4.style.visibility = "visible";
	lang5.style.visibility = "hidden";
	lang4.innerHTML = "PHP";
	lang5.innerHTML = "";
	paragraph.innerHTML = "This is my portfolio website. The idea behind developing "
		+ "this site was to use raw html, sass, javascript, and php to develop foundational "
		+ "design and coding skills. The biggest struggle I faced developing this site was making "
		+ "the site responsive "
		+ "on multiple devices and screen sizes. I definetely have a much greater appreciation for "
		+ "Bootstrap after building this site!"
	projectImg.setAttribute('src', 'images/tonyvuio.png');
}

function resetLangAnimate() {
	lang1.style.opacity = "0";
	lang2.style.opacity = "0";
	lang3.style.opacity = "0";
	lang4.style.opacity = "0";
	lang5.style.opacity = "0";

	resetP1Animate(lang1, "lang-animate");
	resetP1Animate(lang2, "lang-animate");
	resetP1Animate(lang3, "lang-animate");
	resetP1Animate(lang4, "lang-animate");
	resetP1Animate(lang5, "lang-animate");
}


btn1Project.onclick = function () {
	btn1ChangeColors();

	resetP1Animate(p1Container, "float-out");

	var cycleInterval = setInterval(function () {
		updateSummaryP1();
		resetLangAnimate();
		resetP1Animate(p1Container, "float-in");
		clearInterval(cycleInterval);
	}, 200);
};

btn2Project.onclick = function () {
	btn2ChangeColors();

	resetP1Animate(p1Container, "float-out");

	var cycleInterval = setInterval(function () {
		updateSummaryP2();
		resetLangAnimate();
		resetP1Animate(p1Container, "float-in");
		clearInterval(cycleInterval);
	}, 200);

};

btn3Project.onclick = function () {
	btn3ChangeColors();

	resetP1Animate(p1Container, "float-out");

	var cycleInterval = setInterval(function () {
		updateSummaryP3();
		resetLangAnimate();
		resetP1Animate(p1Container, "float-in");
		clearInterval(cycleInterval);
	}, 200);
};





// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up auto-scroll for nav links
var scrollSpeed = 1000;
var scrollDash = 400;

function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var startTime = null;

	// This makes the animation smooth
	function animation(currentTime) {
		if (startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if (timeElapsed < duration) requestAnimationFrame(animation);
	}

	// Math formula used for ease motion
	function ease(t, b, c, d) {
		t /= d / 2;
		if (t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t - 2) - 1) + b;
	}
	requestAnimationFrame(animation);
}
// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up about header and about me to scroll in and out based on page scroll position. 
var aboutHeader = document.querySelector('.about-header');
var aboutMeContainer = document.querySelector('.about-me-container');
var sFrameOne = document.querySelector('.s-frame-one');
var sFrameTwo = document.querySelector('.s-frame-two');
var sFrameThree = document.querySelector('.s-frame-three');
var projects1Container = document.querySelector('.project-one-container');
var contactFrame = document.querySelector('.contact-frame');


function aboutHeaderStateScroll() {
	if (document.documentElement.scrollTop <= 400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
	else if ((document.documentElement.scrollTop > 400) && (document.documentElement.scrollTop < 1400)) {
		aboutHeader.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 1400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
}

function aboutMeStateScroll() {
	if (document.documentElement.scrollTop <= 900) {
		aboutMeContainer.style.transform = "translateX(50rem)";

	}
	else if ((document.documentElement.scrollTop > 900) && (document.documentElement.scrollTop < 2200)) {
		aboutMeContainer.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2200) {
		aboutMeContainer.style.transform = "translateX(50rem)";
	}
}

function sFrameStateScroll() {
	if (document.documentElement.scrollTop <= 800) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
	else if ((document.documentElement.scrollTop > 800) && (document.documentElement.scrollTop < 2000)) {
		sFrameOne.style.height = "40rem";
		sFrameTwo.style.height = "40rem";
		sFrameThree.style.height = "40rem";
	}
	else if (document.documentElement.scrollTop >= 2000) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
}

function projectsStateScroll() {
	if (document.documentElement.scrollTop <= 2000) {
		projects1Container.style.opacity = 0;
	}
	else if ((document.documentElement.scrollTop > 2000) && (document.documentElement.scrollTop < 2900)) {
		projects1Container.style.opacity = 1;
	}
	else if (document.documentElement.scrollTop >= 2900) {
		projects1Container.style.opacity = 0;
	}
}


function contactStateScroll() {
	if (document.documentElement.scrollTop <= 3950) {
		contactFrame.style.transform = "translateX(-150rem)";
	}
	else if (document.documentElement.scrollTop >= 3950) {
		contactFrame.style.transform = "translateX(0rem)";
	}
}


/************************************************************************************** */
/*                           MEDIA QUERY ANIMATIONS 480 PX                              */
/************************************************************************************** */

function aboutHeader480Scroll() {
	if (document.documentElement.scrollTop <= 400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
	else if ((document.documentElement.scrollTop > 400) && (document.documentElement.scrollTop < 2400)) {
		aboutHeader.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
}

function aboutMe480Scroll() {
	if (document.documentElement.scrollTop <= 1075) {
		aboutMeContainer.style.transform = "translateX(100rem)";

	}
	else if ((document.documentElement.scrollTop > 1075) && (document.documentElement.scrollTop < 3800)) {
		aboutMeContainer.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 3800) {
		aboutMeContainer.style.transform = "translateX(100rem)";
	}
}

function projects480Scroll() {
	if (document.documentElement.scrollTop <= 2590) {
		projects1Container.style.opacity = 0;
	}
	else if ((document.documentElement.scrollTop > 2590) && (document.documentElement.scrollTop < 5300)) {
		projects1Container.style.opacity = 1;
	}
	else if (document.documentElement.scrollTop >= 5300) {
		projects1Container.style.opacity = 0;
	}
}

function contact480Scroll() {
	if (document.documentElement.scrollTop <= 3950) {
		contactFrame.style.transform = "translateX(-150rem)";
	}
	else if (document.documentElement.scrollTop >= 3950) {
		contactFrame.style.transform = "translateX(0rem)";
	}
}
// END
/************************************************************************************** */


/************************************************************************************** */
/*                           MEDIA QUERY ANIMATIONS 640 PX                              */
/************************************************************************************** */

function aboutHeader640Scroll() {
	if (document.documentElement.scrollTop <= 160) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
	else if ((document.documentElement.scrollTop > 160) && (document.documentElement.scrollTop < 2400)) {
		aboutHeader.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
}

function aboutMe640Scroll() {
	if (document.documentElement.scrollTop <= 300) {
		aboutMeContainer.style.transform = "translateX(100rem)";

	}
	else if ((document.documentElement.scrollTop > 300) && (document.documentElement.scrollTop < 3800)) {
		aboutMeContainer.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 3800) {
		aboutMeContainer.style.transform = "translateX(100rem)";
	}
}

function projects640Scroll() {
	if (document.documentElement.scrollTop <= 1420) {
		projects1Container.style.opacity = 0;
	}
	else if ((document.documentElement.scrollTop > 1420) && (document.documentElement.scrollTop < 3800)) {
		projects1Container.style.opacity = 1;
	}
	else if (document.documentElement.scrollTop >= 3800) {
		projects1Container.style.opacity = 0;
	}
}

function contact640Scroll() {
	if (document.documentElement.scrollTop <= 3950) {
		contactFrame.style.transform = "translateX(-150rem)";
	}
	else if (document.documentElement.scrollTop >= 3950) {
		contactFrame.style.transform = "translateX(0rem)";
	}
}
// END
/************************************************************************************** */


/************************************************************************************** */
/*                           MEDIA QUERY ANIMATIONS 960 PX                              */
/************************************************************************************** */

function aboutHeader960Scroll() {
	if (document.documentElement.scrollTop <= 160) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
	else if ((document.documentElement.scrollTop > 160) && (document.documentElement.scrollTop < 2400)) {
		aboutHeader.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
}

function aboutMe960Scroll() {
	if (document.documentElement.scrollTop <= 1560) {
		aboutMeContainer.style.transform = "translateX(100rem)";

	}
	else if ((document.documentElement.scrollTop > 1560) && (document.documentElement.scrollTop < 3500)) {
		aboutMeContainer.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 3500) {
		aboutMeContainer.style.transform = "translateX(100rem)";
	}
}

function projects960Scroll() {
	if (document.documentElement.scrollTop <= 2730) {
		projects1Container.style.opacity = 0;
	}
	else if ((document.documentElement.scrollTop > 2730) && (document.documentElement.scrollTop < 4550)) {
		projects1Container.style.opacity = 1;
	}
	else if (document.documentElement.scrollTop >= 4550) {
		projects1Container.style.opacity = 0;
	}
}

function contact960Scroll() {
	if (document.documentElement.scrollTop <= 3950) {
		contactFrame.style.transform = "translateX(-150rem)";
	}
	else if (document.documentElement.scrollTop >= 3950) {
		contactFrame.style.transform = "translateX(0rem)";
	}
}

function sFrame960Scroll() {
	if (document.documentElement.scrollTop <= 800) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
	else if ((document.documentElement.scrollTop > 800) && (document.documentElement.scrollTop < 2580)) {
		sFrameOne.style.height = "40rem";
		sFrameTwo.style.height = "40rem";
		sFrameThree.style.height = "40rem";
	}
	else if (document.documentElement.scrollTop >= 2580) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
}
// END
/************************************************************************************** */


/************************************************************************************** */
/*                           MEDIA QUERY ANIMATIONS 1024 PX                              */
/************************************************************************************** */

function aboutHeader1024Scroll() {
	if (document.documentElement.scrollTop <= 160) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
	else if ((document.documentElement.scrollTop > 160) && (document.documentElement.scrollTop < 2400)) {
		aboutHeader.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
}

function aboutMe1024Scroll() {
	if (document.documentElement.scrollTop <= 1560) {
		aboutMeContainer.style.transform = "translateX(100rem)";

	}
	else if ((document.documentElement.scrollTop > 1560) && (document.documentElement.scrollTop < 3500)) {
		aboutMeContainer.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 3500) {
		aboutMeContainer.style.transform = "translateX(100rem)";
	}
}

function projects1024Scroll() {
	if (document.documentElement.scrollTop <= 2300) {
		projects1Container.style.opacity = 0;
	}
	else if ((document.documentElement.scrollTop > 2300) && (document.documentElement.scrollTop < 3500)) {
		projects1Container.style.opacity = 1;
	}
	else if (document.documentElement.scrollTop >= 3500) {
		projects1Container.style.opacity = 0;
	}
}

function contact1024Scroll() {
	if (document.documentElement.scrollTop <= 3950) {
		contactFrame.style.transform = "translateX(-150rem)";
	}
	else if (document.documentElement.scrollTop >= 3950) {
		contactFrame.style.transform = "translateX(0rem)";
	}
}

function sFrame1024Scroll() {
	if (document.documentElement.scrollTop <= 420) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
	else if ((document.documentElement.scrollTop > 420) && (document.documentElement.scrollTop < 2580)) {
		sFrameOne.style.height = "40rem";
		sFrameTwo.style.height = "40rem";
		sFrameThree.style.height = "40rem";
	}
	else if (document.documentElement.scrollTop >= 2580) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
}
// END
/************************************************************************************** */


/************************************************************************************** */
/*                           MEDIA QUERY ANIMATIONS 1281 PX                              */
/************************************************************************************** */

function aboutHeader1281Scroll() {
	if (document.documentElement.scrollTop <= 160) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
	else if ((document.documentElement.scrollTop > 160) && (document.documentElement.scrollTop < 2400)) {
		aboutHeader.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2400) {
		aboutHeader.style.transform = "translateX(-150rem)";
	}
}

function aboutMe1281Scroll() {
	if (document.documentElement.scrollTop <= 1040) {
		aboutMeContainer.style.transform = "translateX(100rem)";

	}
	else if ((document.documentElement.scrollTop > 1040) && (document.documentElement.scrollTop < 2536)) {
		aboutMeContainer.style.transform = "translateX(0rem)";
	}
	else if (document.documentElement.scrollTop >= 2536) {
		aboutMeContainer.style.transform = "translateX(100rem)";
	}
}

function projects1281Scroll() {
	if (document.documentElement.scrollTop <= 1970) {
		projects1Container.style.opacity = 0;
	}
	else if ((document.documentElement.scrollTop > 1970) && (document.documentElement.scrollTop < 3660)) {
		projects1Container.style.opacity = 1;
	}
	else if (document.documentElement.scrollTop >= 3660) {
		projects1Container.style.opacity = 0;
	}
}

function contact1281Scroll() {
	if (document.documentElement.scrollTop <= 3950) {
		contactFrame.style.transform = "translateX(-150rem)";
	}
	else if (document.documentElement.scrollTop >= 3950) {
		contactFrame.style.transform = "translateX(0rem)";
	}
}

function sFrame1281Scroll() {
	if (document.documentElement.scrollTop <= 340) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
	else if ((document.documentElement.scrollTop > 340) && (document.documentElement.scrollTop < 2580)) {
		sFrameOne.style.height = "40rem";
		sFrameTwo.style.height = "40rem";
		sFrameThree.style.height = "40rem";
	}
	else if (document.documentElement.scrollTop >= 2580) {
		sFrameOne.style.height = "0rem";
		sFrameTwo.style.height = "0rem";
		sFrameThree.style.height = "0rem";
	}
}
// END
/************************************************************************************** */


/***************************************************************************************/
// Setting up HOME bar to appear when below homepage, and disappear when at homepage. 
var navState = false;

var query480 = window.matchMedia("(min-device-width: 0px)" && "(max-device-width: 480px)");
runInterval(query480);// Call listener function at run time
query480.addListener(runInterval); // Attach listener function on state changes

// This function makes sure the infinite interval does not run on phones. (Top stop phone glitching)
function runInterval() {
	if (query480.matches) {
		clearInterval(navStateInterval);
	}
	else {
		// Function is constantly running. Use this until a better solutions comes along!
		// This process could destroy CPU cycles
		var navStateInterval = setInterval(function () {
			showNavBar(navState);

			console.log(imgIndex);
		}, 500);
	}
}

function showNavBar(navState) {
	if (navState == true) {
		document.querySelector('.home-bar').style.top = "0";
	}
	else {
		document.querySelector('.home-bar').style.top = "-10vw";
	}
}

function nav480ScrollStatus() {
	if (document.body.scrollTop > 1430 || document.documentElement.scrollTop > 1430) {
		document.querySelector('.phone-homebar').style.top = "0";
	}
	else {
		document.querySelector('.phone-homebar').style.top = "-10rem";
	}
}

function nav640ScrollStatus() {
	if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
		navState = true;
	} else {
		navState = false;
	}
}

function nav960ScrollStatus() {
	if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
		navState = true;
	} else {
		navState = false;
	}
}

function nav1024ScrollStatus() {
	if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
		navState = true;
	} else {
		navState = false;
	}
}

function nav1281ScrollStatus() {
	if (document.body.scrollTop > 640 || document.documentElement.scrollTop > 640) {
		navState = true;
	} else {
		navState = false;
	}
}
// END
/************************************************************************************** */


/************************************************************************************** */
// Merging all window.onscroll funtions together

window.onscroll = function () {
	var phone480 = window.matchMedia("(min-device-width: 0px)");
	adjust480Animations(phone480);// Call listener function at run time
	phone480.addListener(adjust480Animations); // Attach listener function on state changes

	var media640 = window.matchMedia("(min-device-width: 481px)");
	adjust640Animations(media640);
	media640.addListener(adjust640Animations);

	var media960 = window.matchMedia("(min-device-width: 641px)");
	adjust960Animations(media960);
	media960.addListener(adjust960Animations);

	var media1024 = window.matchMedia("(min-device-width: 960px)");
	adjust1024Animations(media1024);
	media1024.addListener(adjust1024Animations);

	var media1281 = window.matchMedia("(min-device-width: 1024px)");
	adjust1281Animations(media1281);
	media1281.addListener(adjust1281Animations);

	function adjust480Animations() {
		if (phone480.matches) { // For all phone screen sizes
			aboutHeader480Scroll();
			aboutMe480Scroll();
			projects480Scroll();
			contact480Scroll();
			nav480ScrollStatus();
		}
	}

	function adjust640Animations() {
		if (media640.matches) {
			aboutHeader640Scroll();
			aboutMe640Scroll();
			projects640Scroll();
			contact640Scroll();
			nav640ScrollStatus();
		}
	}

	function adjust960Animations() {
		if (media960.matches) {
			aboutHeader960Scroll();
			aboutMe960Scroll();
			projects960Scroll();
			contact960Scroll();
			sFrame960Scroll();
			nav960ScrollStatus();
		}
	}

	function adjust1024Animations() {
		if (media1024.matches) {
			aboutHeader1024Scroll();
			aboutMe1024Scroll();
			projects1024Scroll();
			contact1024Scroll();
			sFrame1024Scroll();
			nav1024ScrollStatus();
		}
	}

	function adjust1281Animations() {
		if (media1281.matches) {
			aboutHeader1281Scroll();
			aboutMe1281Scroll();
			projects1281Scroll();
			contact1281Scroll();
			sFrame1281Scroll();
			nav1281ScrollStatus();
		}
	}
};

function allMedia1840() {
	navStateScrollStatus();
	aboutHeaderStateScroll();
	aboutMeStateScroll();
	sFrameStateScroll();
	projectsStateScroll();
	contactStateScroll();
}
// END
/************************************************************************************** */

/************************************************************************************** */
// Scrollable homepage pics
const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
	isDown = true;
	startX = e.pageX - slider.offsetLeft;
	scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
	isDown = false;
});

slider.addEventListener('mouseup', () => {
	isDown = false;


});

slider.addEventListener('mousemove', (e) => {
	if (!isDown) return;
	e.preventDefault(); // prevents links or
	// other actions from happening
	const x = e.pageX - slider.offsetLeft;
	const walk = (x - startX) * 1; //scroll-fast
	slider.scrollLeft = scrollLeft - walk;
});

// Center div on start
slider.scrollLeft = 763;

// END
/************************************************************************************** */


/************************************************************************************** */
// Change phone header based on scrollLeft position and set up navigation scrolling
var phoneHeader = document.querySelector('.phone-header');
var phoneMidPic = document.querySelector('.middle-block');
var phoneLeftPic = document.querySelector('.left-block');
var phoneRightPic = document.querySelector('.right-block');
var phoneArrow = document.querySelector('.phone-arrow');
var phoneAboutNav = document.querySelector('.phone-about-li');
var phoneProjectsNav = document.querySelector('.phone-projects-li');
var phoneVlogsNav = document.querySelector('.phone-vlogs-li');
var phoneContactNav = document.querySelector('.phone-contact-li');

slider.addEventListener('scroll', function (event) {
	if (slider.scrollLeft < 240) {
		phoneHeader.innerHTML = "CONTACT";
		phoneMidPic.style.opacity = "0";
		phoneRightPic.style.opacity = "0";

		phoneImgIndex = 3;
	}
	else if (slider.scrollLeft > 240 && slider.scrollLeft < 1150) {
		phoneHeader.innerHTML = "PROJECTS";
		phoneMidPic.style.opacity = "1";
		phoneLeftPic.style.opacity = "1";
		phoneRightPic.style.opacity = "1";

		phoneImgIndex = 1;
	}
	else if (slider.scrollLeft > 1150) {
		phoneHeader.innerHTML = "VLOGS";
		phoneMidPic.style.opacity = "0";
		phoneLeftPic.style.opacity = "0";

		phoneImgIndex = 2;
	}
});

phoneArrow.addEventListener('touchstart', function () {
	if (phoneImgIndex === 1) {
		smoothScroll('.projects-container', scrollSpeed);
	}
	else if (phoneImgIndex === 2) {
		smoothScroll('.vlogs-container', scrollSpeed);
	}
	else if (phoneImgIndex === 3) {
		smoothScroll('.phone-contact-container', scrollSpeed);
	}
})

phoneAboutNav.addEventListener('touchstart', function () {
	smoothScroll('.about-container', scrollDash);
	menu.style.visibility = "hidden";
	menuVisible = false;
});

phoneProjectsNav.addEventListener('touchstart', function () {
	smoothScroll('.projects-container', scrollDash);
	menu.style.visibility = "hidden";
	menuVisible = false;
});

phoneVlogsNav.addEventListener('touchstart', function () {
	smoothScroll('.vlogs-container', scrollDash);
	menu.style.visibility = "hidden";
	menuVisible = false;
});

phoneContactNav.addEventListener('touchstart', function () {
	smoothScroll('.contact-container', scrollDash);
	menu.style.visibility = "hidden";
	menuVisible = false;
});
// END
/************************************************************************************** */


/************************************************************************************** */
// Menu icon functions. Setting up phone nav link animations

var menuIcon = document.querySelector(".phone-menu-icon");
var menu = document.querySelector(".phone-nav");
var menuVisible = false;

menuIcon.addEventListener('touchstart', function () {
	if (menuVisible == false) {
		menu.style.visibility = "visible";
		menuVisible = true;

		animatePhoneNavs();
	}
	else if (menuVisible == true) {
		menu.style.visibility = "hidden";
		menuVisible = false;

		animateResetPhoneNavs();
	}
});

function animatePhoneNavs() {
	phoneAboutNav.style.transform = "translateX(" + "0" + "rem)";
	phoneProjectsNav.style.transform = "translateX(" + "0" + "rem)";
	phoneVlogsNav.style.transform = "translateX(" + "0" + "rem)";
	phoneContactNav.style.transform = "translateX(" + "0" + "rem)";
}

function animateResetPhoneNavs() {
	phoneAboutNav.style.transform = "translateX(" + "-50" + "rem)";
	phoneProjectsNav.style.transform = "translateX(" + "-50" + "rem)";
	phoneVlogsNav.style.transform = "translateX(" + "-50" + "rem)";
	phoneContactNav.style.transform = "translateX(" + "-50" + "rem)";
}

// END
/************************************************************************************** */

/************************************************************************************** */
// Setting up project buttons to make warning message appear on DEMO or CODE button presses
var demoBtn = document.querySelector('.btn-p1-visit');
var codeBtn = document.querySelector('.btn-p1-git');
var warningSign = document.querySelector('.warning-wrapper');

function showUndergoingD() {
	warningSign.style.opacity = "1";
	warningSign.style.zIndex = "5";
	warningSign.style.transitionDuration = "0s";

	setTimeout(function () {
		revertWarningMsg();
	}, 100);

	console.log('hey');
}

demoBtn.onclick = function () {
	if (currentBtn == 3) {
		location.href = 'https://tonyvu.io';
	}
	else {
		showUndergoingD();
	}

}

codeBtn.onclick = function () {
	if (currentBtn == 3) {
		location.href = 'https://github.com/tonyvu1/tonyvu.io';
	}
	else {
		showUndergoingD();
	}
}




function revertWarningMsg() {
	warningSign.style.transitionDuration = "1s";
	warningSign.style.opacity = "0";
	warningSign.style.zIndex = "0";
}
// END
/************************************************************************************** */


/************************************************************************************** */
// 

// END
/************************************************************************************** */