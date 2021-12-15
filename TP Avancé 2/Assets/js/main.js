// ============ Set navBar Responsive ============

const menuBtn = document.querySelector(".fa-bars");
const ul = document.querySelector("nav ul");
menuBtn.onclick = () => {
	ul.classList.toggle("show");
};

// ==================== strollToTop ===============

const strollToTop = document.querySelector(".strollToTop");
strollToTop.onclick = () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
};
