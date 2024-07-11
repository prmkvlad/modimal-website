function accordion() {
	const btns = document.querySelectorAll('.mobile-links__parent-btn');
	const navBtn = document.querySelector('.mobile-nav-btn');

	btns.forEach(btn => {
		btn.addEventListener('click', () => {
			const content = btn.nextElementSibling;
			const isOpen = btn.classList.toggle('active');

			if (isOpen) {
				content.style.maxHeight = content.scrollHeight + 'px';
			} else {
				content.style.maxHeight = '0px';
			}
		})
	});

	navBtn.addEventListener('click', () => {
		if (!navBtn.firstElementChild.classList.contains('nav-icon--active')) {
			btns.forEach(btn => {
				btn.classList.remove('active');
				btn.nextElementSibling.style.maxHeight = '0px';
			});
		}
	});
}

export default accordion;