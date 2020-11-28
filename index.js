const header = document.getElementById('header');
const section1 = document.getElementById("section1-id");
const div2text = document.getElementsByClassName("div2-text");
const div3text = document.getElementsByClassName("div3-text");
const section2 = document.getElementById('section2-id')

const options = { rootMargin : "-100px 0px 0px 0px" };
const options2 = { rootMargin : "-200px 0px 0px 0px" };

const section1Observer = new IntersectionObserver(function(entry,sectionObserver){
	entry.forEach(entered => {
		if(!entered.isIntersecting){
			header.classList.add("background");
			div2text[0].classList.add("in-position");
			div2text[1].classList.add("in-position");
		}
		else{
			header.classList.remove("background")
		}

	});
},options);

section1Observer.observe(section1);

const sectionsObserver = new IntersectionObserver(function(entry,sectionsObserver){
	entry.forEach(entered => {
		console.log(entered.target.id)
		if(!entered.isIntersecting){
			div3text[0].classList.add("in-position")
			div3text[1].classList.add("in-position")
		}
	});
},options2);

sectionsObserver.observe(section2);


// window.addEventListener("scroll",function(e){
// 	console.log("scrolled");
// 	console.log(window.pageYOffset); // getting equal to 0
// 	section1.style.opacity="0"
// 	section1.style.backgroundSize = 120 - +window.pageYOffset/12 +"%";
// 	section1.style.opacity = 1- +window.pageYOffset/700 + "" ;
// },true);
