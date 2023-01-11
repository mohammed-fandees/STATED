let header = document.querySelector('header').classList;
let logo = document.querySelector('.logo a').classList;
let a = document.querySelectorAll('header ul a');
let icon = document.querySelector('.nav-icon');
let list = document.querySelector('header ul');
let closeButton = document.querySelector("header ul .fa-x");
let sections = document.querySelectorAll('section');
let pre = document.querySelector("#pre");
let next = document.querySelector("#next");
let iPre = document.querySelector("#i-pre");
let iNext = document.querySelector("#i-next");
onscroll = (_) => {
	navStyle();
	const currentScroll = document.documentElement.scrollTop + 250;
	sections.forEach((section) => {
		let currentId = section.attributes.id.value;
		let selector = `nav a[href = "#${currentId}"]`;
		if (currentScroll >= section.offsetTop && currentScroll < section.offsetTop + section.offsetHeight) {
			removeAllActiveClasses();
			if (window.scrollY >= 1) {
				document.querySelector(selector).classList.add('active-b');
				document.querySelectorAll('.nav-icon span').forEach(el => el.classList.add("m-navIcon"));
			} else {
				document.querySelector(selector).classList.add('active-g');
				document.querySelectorAll('.nav-icon span').forEach(el => el.classList.remove("m-navIcon"));
			}
		}
	});
};

icon.addEventListener('click', _ => {
	list.classList.add("appear");
});

closeButton.addEventListener('click', _ => {
	list.classList.remove("appear");
});

function removeAllActiveClasses() {
	a.forEach((el) => el.classList.remove('active-g', 'active-b'));
}

function navStyle() {
	if (window.scrollY >= 1) {
		header.add('w-nav');
		ulStyle();
		logoStyle();
	} else {
		header.remove('w-nav');
		defaultUl();
		defaultLogo();
	}

	if (window.scrollY >= 200) {
		header.add('short-nav');
	} else {
		header.remove('short-nav');
	}
}

function logoStyle() {
	logo.add('b-logo');
}

function defaultLogo() {
	logo.remove('b-logo');
}

function ulStyle() {
	a.forEach((el) => el.classList.add('b-links'));
}

function defaultUl() {
	a.forEach((el) => el.classList.remove('b-links'));
}

var swiper = new Swiper('.mySwiper', {
	slidesPerView: 1,
	spaceBetween: 30,
	pagination: {
		el: '.swiper-pagination',
		clickable: true
	},
    autoplay: {
        delay:2000,
    },
	breakpoints: {
		520: {
			slidesPerView: 2,
			spaceBetween: 20
		},
		768: {
			slidesPerView: 3,
			spaceBetween: 20
		},
		1199: {
			slidesPerView: 4,
			spaceBetween: 30
		},
	},
	navigation: {
		nextEl: ".next",
		prevEl: ".pre",
	},
});

var swiper = new Swiper('.mySecSwiper', {
	autoplay: {
		delete: 2000
	},
	navigation: {
		nextEl: "#i-next",
		prevEl: "#i-pre",
	},
});

var swiper = new Swiper('.myThirdSwiper', {});


pre.addEventListener('click', (el) => {
    el.preventDefault();
    
});

next.addEventListener('click', (el) => {
    el.preventDefault();
})

iPre.addEventListener('click', (el) => {
    el.preventDefault();
    
});

iNext.addEventListener('click', (el) => {
    el.preventDefault();
});

document.getElementById("button-send").addEventListener("click", (e) => {
	e.preventDefault();
	let params = {
		firstName: document.getElementById("f-name").value,
		lastName: document.getElementById("l-name").value,
        email: document.getElementById("email").value,
		subject:document.getElementById("subject").value,
        message: document.getElementById("message").value,
    };

    let serviceID = "service_sbzm0y9";
    let templateID = "template_yj9dach";

        emailjs.send(serviceID, templateID, params)
        .then(res => {
			params.firstName = "";
			params.lastName = "";
			params.email = "";
			params.subject = "";
			params.message = "";
			console.log(res);
        alert("Your Message send successfully!");
    }).catch(err=>console.log(err));
});

document.getElementById("send-email").addEventListener('click', (e) => {
	e.preventDefault();
	let params = {
		email: document.getElementById("e-send").value,
	}

    let serviceID = "service_sbzm0y9";
    let templateID = "template_yj9dach";

	emailjs.send(serviceID, templateID, params)
	.then(res => {
		params.email = "";
		console.log(res);
		alert("Your Message send successfully!");
	}).catch(err=>console.log(err));
});