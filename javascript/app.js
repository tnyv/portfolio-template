function distortIn(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/distorted.jpg');
}

function distortOut(element) {
	element.style.opacity = "1";
	element.setAttribute('src', 'images/main-picture.jpg');
}

function smoothScroll(target, duration) {
	var target = document.querySelector(target);
	var targetPosition = target.getBoundingClientRect().top;
	var startPosition = window.pageYOffset;
	var distance = targetPosition - startPosition;
	var startTime = null;

	// This makes the animation smooth
	function animation(currentTime) {
		if(startTime === null) startTime = currentTime;
		var timeElapsed = currentTime - startTime;
		var run = ease(timeElapsed, startPosition, targetPosition, duration);
		window.scrollTo(0, run);
		if(timeElapsed < duration) requestAnimationFrame(animation);
	}

	function ease(t, b, c, d) {
		t /= d / 2;
		if(t < 1) return c / 2 * t * t + b;
		t--;
		return -c / 2 * (t * (t-2) - 1) + b;
	}

	requestAnimationFrame(animation);
}



var scrollSkills = document.querySelector('.skills-js-trigger');
scrollSkills.addEventListener('click', function() {
	smoothScroll('.skills-container', 2000);
});

var scrollProjects = document.querySelector('.projects-js-trigger');
scrollProjects.addEventListener('click', function() {
	smoothScroll('.projects-container', 2000);
});

var scrollAbout = document.querySelector('.about-js-trigger');
scrollAbout.addEventListener('click', function() {
	smoothScroll('.about-container', 2000);
});

var scrollContact = document.querySelector('.contact-js-trigger');
scrollContact.addEventListener('click', function() {
	smoothScroll('.contact-container', 2000);
});

var scrollHome = document.querySelector('.home-link');
scrollHome.addEventListener('click', function() {
	smoothScroll('.html', 2000);
});




var scrollArea = window.innerWidth;
var skillsBox = document.querySelector('.skills-move');
var projectsBox = document.querySelector('.projects-move');
var aboutBox = document.querySelector('.about-move');
var contactBox = document.querySelector('.contact-move');
var logoBox = document.querySelector('.logo-block');
var mainPicture = document.querySelector('.main-picture');



window.addEventListener('scroll', function() {
  var scrollTop = window.pageYOffset || window.scrollTop;
  var scrollPercent = scrollTop/scrollArea || 0;
  var moveDistance = (scrollPercent*window.innerWidth) * 0.3;
  var quickMove = (scrollPercent*window.innerWidth) * 0.7;


  if(moveDistance > 60) {
	var distanceTravelled = moveDistance - 60;
	contactBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 60) {
	contactBox.style.transform = "translateX(" + "-" + 0 + "vw)";
  }

  if(moveDistance > 40) {
	var distanceTravelled = moveDistance - 40;
	aboutBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 40) {
	aboutBox.style.transform = "translateX(" + "-" + 0 + "vw)";
  }
 

  if(moveDistance > 20) {
	var distanceTravelled = moveDistance - 20;
	projectsBox.style.transform = "translateX(" + "-" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 20) {
	projectsBox.style.transform = "translateX(" + "-" + 0 + "vw)";
  }

  if(moveDistance < 23.19) {
	logoBox.style.transform = "translateX(" + "+" + distanceTravelled + "vw)";
  }
  else if(moveDistance <= 20) {
  }

  logoBox.style.transform = "translateX(" + "+" + quickMove + "vw)";
	skillsBox.style.transform = "translateX(" + "-" + moveDistance + "vw)";

	
});







window.addEventListener('scroll', function()  {
	var skillsPos = document.querySelector('.skills-container').offsetTop;


	if(skillsPos >= (window.pageYOffset+5)) {
		document.querySelector('.home-bar').style.visibility = "hidden";
		document.querySelector('.home-bar').style.animationName = "";
	}
		
	else {
		document.querySelector('.home-bar').style.visibility = "visible";
		document.querySelector('.home-bar').style.animationName = "home-animation";
	}
	
		this.console.log("skills C offset: " + document.querySelector('.skills-container').offsetTop);
		this.console.log(window.pageYOffset);

	});











