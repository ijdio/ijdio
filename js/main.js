{
	setTimeout(() => document.body.classList.add('render'), 60);
	const navigate = (linkEl) => {
		console.log("Bring something incomprehensible into the world!");
		document.body.classList.remove('render');
		document.body.addEventListener('transitionend', () => window.location = linkEl.href);
	};
}
