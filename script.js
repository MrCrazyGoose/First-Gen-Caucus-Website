// ========== THEME TOGGLE ==========
const body = document.querySelector('body');
const themeToggleBtn = document.getElementById('theme-toggle');

themeToggleBtn.addEventListener('click', () => {
  // If in dark theme, switch to light theme; otherwise, switch to dark
  if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
    body.classList.add('light-theme');
  } else {
    body.classList.remove('light-theme');
    body.classList.add('dark-theme');
  }
});

// ========== COLLAPSIBLE TOGGLE LIST (Home) ==========
const toggleButtons = document.querySelectorAll('.toggle-btn');
toggleButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const content = btn.nextElementSibling;
    content.classList.toggle('open');
  });
});

// ========== FADE-IN ON SCROLL ==========
const fadeInSections = document.querySelectorAll('.fade-in-on-scroll');
const options = { threshold: 0.1 };

function fadeInCallback(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target);
    }
  });
}

const observer = new IntersectionObserver(fadeInCallback, options);
fadeInSections.forEach(section => {
  observer.observe(section);
});

// ========== ROTATING EVENT SLIDER (Get Involved) ==========
const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const totalSlides = slides.length;

/** Move the slider to show the slide at currentIndex */
function updateSliderPosition() {
  const slideWidth = slides[0].clientWidth;
  const offset = -(slideWidth * currentIndex);
  sliderTrack.style.transform = `translateX(${offset}px)`;
}

// Go to previous slide
function slidePrev() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateSliderPosition();
}

// Go to next slide
function slideNext() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateSliderPosition();
}

// Auto-rotate every 4 seconds
let sliderInterval = setInterval(slideNext, 4000);

if (prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    slidePrev();
    // Reset the auto-rotate timer to avoid quick skipping
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slideNext, 4000);
  });

  nextBtn.addEventListener('click', () => {
    slideNext();
    clearInterval(sliderInterval);
    sliderInterval = setInterval(slideNext, 4000);
  });
}

// Initialize position (if the slider elements exist)
if (sliderTrack && slides.length > 0) {
  updateSliderPosition();
}

/******************************************************
 * IMMIGRATION RESOURCE MAP LOGIC
 ******************************************************/

// 1. Grab all state shapes from the map
const stateShapes = document.querySelectorAll('.state-shape');

// 2. Grab the container where we show resources
const resourceListTitle = document.getElementById('resource-list-title');
const resourceListContent = document.getElementById('resource-list-content');

// 3. On click of a state, we want to fetch the relevant HTML from the hidden <div>
stateShapes.forEach(shape => {
  shape.addEventListener('click', () => {
    const stateCode = shape.getAttribute('data-state'); // e.g. "CA", "TX"
    if (!stateCode) return;

    // Build ID of the hidden resources container
    const resourceDivId = `${stateCode}-resources`;
    const hiddenDiv = document.getElementById(resourceDivId);

    // If we have content for that state, show it
    if (hiddenDiv) {
      resourceListTitle.textContent = `Resources for ${stateCode}`;
      resourceListContent.innerHTML = hiddenDiv.innerHTML;
    } else {
      // If no matching resources found
      resourceListTitle.textContent = `Resources for ${stateCode}`;
      resourceListContent.innerHTML = `<p>No resources available yet for ${stateCode}.</p>`;
    }
  });
});


// Extra console logs (overuse of JS, for demonstration)
console.log("Dark theme is set by default. Toggle available if needed!");
console.log("Event slider is running. Enjoy the transitions!");