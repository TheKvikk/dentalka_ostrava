window.addEventListener('scroll', () => {
	const header = document.querySelector('.header');
	if (window.scrollY > 0) {
		header.classList.add('header--scrolled');
	} else {
		header.classList.remove('header--scrolled');
	}
});

window.addEventListener('scroll', () => {
	const scrollTopButton = document.getElementById('scroll-top')
	if (window.scrollY > 200) {
		scrollTopButton.style.opacity = 1;
	} else {
		scrollTopButton.style.opacity = 0;
	}
});