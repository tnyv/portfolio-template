var scrollSpeed = 500;
/************************************************************************************** */
// Change main-image on hover

function distortIn(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/distorted.jpg');
}

function distortOut(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/main-picture.jpg');
}
// END
/************************************************************************************** */


/************************************************************************************** */
// Setting up auto-scroll for nav links
function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
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

// Skills link
var scrollSkills = document.querySelector('.skills-js-trigger');
scrollSkills.addEventListener('click', function () {
	smoothScroll('.skills-container', scrollSpeed);
});
// Projects link
var scrollProjects = document.querySelector('.projects-js-trigger');
scrollProjects.addEventListener('click', function () {
	smoothScroll('.projects-container', scrollSpeed);
});
// Contact link
var scrollContact = document.querySelector('.contact-js-trigger');
scrollContact.addEventListener('click', function () {
	smoothScroll('.contact-container', scrollSpeed);
});

// END
/************************************************************************************** */



/**************************************************************************************
// Homepage animations
var scrollArea = window.innerWidth;
var skillsBox = document.querySelector('.skills-move');
var projectsBox = document.querySelector('.projects-move');
var contactBox = document.querySelector('.contact-move');
var logoBox = document.querySelector('.logo-block');
var mainPicture = document.querySelector('.main-picture');

window.addEventListener('scroll', function () {
	var scrollTop = window.pageYOffset || window.scrollTop;
	var scrollPercent = scrollTop / scrollArea || 0;
	var moveDistance = (scrollPercent * window.innerWidth) * 0.3;
	var quickMove = (scrollPercent * window.innerWidth) * 0.7;

	if (moveDistance > 40) {
		var distanceTravelled = moveDistance - 40;
		contactBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 40) {
		contactBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance > 20) {
		var distanceTravelled = moveDistance - 20;
		projectsBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 20) {
		projectsBox.style.transform = "translateX(" + "-" + 0 + "vw)";
	}

	if (moveDistance < 23.19) {
		logoBox.style.transform = "translateX(" + "+" + distanceTravelled + "vw)";
	}
	else if (moveDistance <= 20) {
	}

	skillsBox.style.transform = "translateX(" + "-" + moveDistance + "vw)";
	logoBox.style.transform = "translateX(" + "-" + moveDistance + "vw)";
});
// END
************************************************************************************** */



/************************************************************************************** */
// Setting up HOME button to appear when below homepage, and disappear when at homepage. 
var currentPosition = "Above";
var homeClicked = false;
var scrollHome = document.querySelector('.home-link');

scrollHome.addEventListener('click', function () {
	smoothScroll('.html', scrollSpeed);

	if (currentPosition === "Below") {
		document.querySelector('.home-bar').style.animationName = "home-animation-in";
		homeClicked = true;
	}
});

window.addEventListener('scroll', function () {
	var skillsPos = document.querySelector('.skills-container').offsetTop;

	if (skillsPos >= (window.pageYOffset + 5)) {
		// this.console.log("Above");

		if ((currentPosition === "Below") && homeClicked === false) {
			document.querySelector('.home-bar').style.animationName = "home-animation-in";
			currentPosition = "Above";
		}
	}
	else {
		// this.console.log("Below");

		if ((currentPosition === "Above") && homeClicked === false) {
			document.querySelector('.home-bar').style.animationName = "home-animation-out";
			currentPosition = "Below";
		}
	}

	if (this.window.pageYOffset === 0) {
		homeClicked = false;
	}
	// Used for debugging
	//this.console.log("skills C offset: " + document.querySelector('.skills-container').offsetTop);
	//this.console.log("pageYoffset: " + window.pageYOffset);

});
// END
/************************************************************************************** */







