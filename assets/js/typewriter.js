const texts = [
  "Front-end Developer",
  "Back-end Developer",
  "Full-stack Developer",
  "Mobile App Developer"
];
let count = 0;
let index = 0;
let isDeleting = false;
let currentText = '';
let typingDelay = 100;
let erasingDelay = 50;
let displayDelay = 1000;

function type() {
  const textElements = document.querySelectorAll('.typewriter-text');
  currentText = texts[count];

  // Update all matching elements
  textElements.forEach((el) => {
    el.textContent = currentText.substring(0, index);
  });

  if (!isDeleting && index === currentText.length) {
    isDeleting = true;
    setTimeout(type, displayDelay);
  } else if (isDeleting && index === 0) {
    isDeleting = false;
    count = (count + 1) % texts.length;
    setTimeout(type, 300);
  } else {
    index += isDeleting ? -1 : 1;
    setTimeout(type, isDeleting ? erasingDelay : typingDelay);
  }
}

document.addEventListener('DOMContentLoaded', type);
