// imail code
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});



// reveal

ScrollReveal({
  distance: '60px',
  duration: 2500,
  delay: 400
});

//target elements, and specify options to create reveal animations
ScrollReveal().reveal('.h2First , .v-1 , .big-circl ', { delay: 200, origin: 'left' });
ScrollReveal().reveal('.introduction ,.about_head', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.nav , .image , .v-2 , .square ', { delay: 300, origin: 'right' });
ScrollReveal().reveal('.circle , .card , .form', { delay: 100, origin: 'top' });

// ScrollReveal().reveal('.nav', { delay: 500, origin: 'left', interval: 10 });
// ScrollReveal().reveal('.', { delay: 500, origin: 'bottom', interval: 200 });
