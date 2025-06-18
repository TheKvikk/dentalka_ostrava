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

window.dispatchEvent(new Event('scroll'));

document.getElementById('scroll-top').addEventListener('click', () => {
	window.scroll({
		top: 0,
		behavior: "smooth"
	});
});

document.getElementById('open-nav').addEventListener('click', () => {
	document.querySelector("nav").classList.add("opened");
});

document.getElementById('close-nav').addEventListener('click', () => {
	document.querySelector('nav').classList.remove('opened');
});

const items = document.querySelectorAll('.accordion');

let openItem = null;

items.forEach(item => {
	const header = item.querySelector('.accordion__title');
	const content = item.querySelector('.accordion__content');

	header.addEventListener('click', () => {
		const isOpen = !content.classList.contains('accordion__content--hidden');

		if (openItem && openItem !== item) {
			toggleItem(openItem, false);
		}

		toggleItem(item, !isOpen);

		openItem = !isOpen ? item : null;
	});
});

function toggleItem(item, toOpen) {
	const content = item.querySelector('.accordion__content');

	if (toOpen) {
		content.classList.remove('accordion__content--hidden');
		content.style.maxHeight = `${content.scrollHeight}px`;
	} else {
		content.classList.add('accordion__content--hidden');
		content.style.maxHeight = '0';
	}
}

document.querySelectorAll('nav a:not(.button)').forEach(link => {
	link.addEventListener('click', () => {
		const nav = document.querySelector('nav');

		if (nav.classList.contains('opened')) {
			nav.classList.remove('opened');
		}
	})
})