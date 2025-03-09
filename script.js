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

const stateResources = {
    CA: `<ul>
        <li>CA Immigrant Assistance</li>
        <li>Link to CA-based program</li>
    </ul>`,
    TX: `<ul>
        <li>Texas Immigration Hotline</li>
    </ul>`,
    FL: `<ul>
        <li>FL Resource 1</li>
    </ul>`,
    // etc. for all states/territories
};

document.addEventListener('DOMContentLoaded', function() {
    var mapElement = document.getElementById('svg');
    var resourcePanel = document.getElementById('resource-panel');
    var resourceStateName = document.getElementById('resource-state-name');
    var resourceContent = document.getElementById('resource-content');

    if (mapElement) {
        mapElement.addEventListener('click', function(event) {
            var target = event.target;
            if (target.tagName === 'path' && target.dataset.id) {
                var stateId = target.dataset.id;
                var resources = stateResources[stateId] || '<p>No resources available for this state.</p>';
                displayResources(target.dataset.name, resources);
            }
        });
    }

    function displayResources(stateName, resources) {
        resourceStateName.textContent = stateName;
        resourceContent.innerHTML = resources;
    }
});