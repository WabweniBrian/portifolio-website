// FUNCTION:: Get elements by id
const _ = (elm) => document.getElementById(elm);
// FUNCTION:: Get elements by queryselector
const qs = (elm) => document.querySelector(elm);
// FUNCTION:: Get elements by queryselectorAll
const qsa = (elm) => document.querySelectorAll(elm);

// Get all DOM elements
const [
  navMenu,
  navMenuToggleBtn,
  backToTop,
  header,
  toggleBtns,
  panels,
  sunIcon,
  moonIcon,
] = [
  qs(".navbar "),
  qs(".menu-toggle"),
  _("backToTop"),
  qs("header"),
  qsa(".toggle"),
  qsa(".tools-skills"),
  qs(".feather-sun"),
  qs(".feather-moon"),
];

function removeClass() {
  qsa(".theme-icon").forEach((toggle) => {
    toggle.classList.remove("active");
  });
}

qsa(".theme-icon").forEach((toggle) => {
  toggle.addEventListener("click", () => {
    removeClass();
    toggle.classList.add("active");
  });
});

// Theme toggle
moonIcon.addEventListener("click", () => {
  qs(":root").setAttribute("color-scheme", "dark");
});
sunIcon.addEventListener("click", () => {
  qs(":root").removeAttribute("color-scheme", "dark");
});

// Toggle navbar menu
navMenuToggleBtn.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
// Back to top button
window.addEventListener("scroll", () => {
  backToTop.classList.toggle("active", window.scrollY > 500);
});

backToTop.addEventListener("click", () => {
  window.scrollTo(0, 0);
});

window.addEventListener("scroll", () => {
  header.classList.toggle("active", window.scrollY > 0);
});

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND PANELS

// ---------------------------------------------------------TABS COMPONENT-----------------------------------------------------------------------------------------
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("active");
    elm.classList.remove("fade-in");
  });
}

toggleBtns.forEach((toggleBtn, i) => {
  toggleBtn.addEventListener("click", (e) => {
    removeActiveClass(toggleBtns);
    removeActiveClass(panels);
    toggleBtn.classList.add("active");
    let toggleBtnId = toggleBtn.attributes.id.value;
    const panel = qs(`.tools-skills[data-id = ${toggleBtnId}]`);
    panel.classList.add("active");
    panel.classList.add("fade-in");
  });
});

//Add the active class to the first elements
toggleBtns[0].classList.add("active");
panels[0].classList.add("active");

// FUNCTION: REMOVE ACTIVE CLASS FROM TAB BUTTONS AND PANELS
function removeActiveClass(element) {
  element.forEach((elm) => {
    elm.classList.remove("active");
    elm.classList.remove("fade-in");
  });
}
