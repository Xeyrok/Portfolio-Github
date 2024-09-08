document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    let darkMode = localStorage.getItem('darkMode') === 'true';

    function updateTheme() {
        if (darkMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = '#fff';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#444';
                section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.7)';
            });
            themeIcon.src = 'logo/sun.png';
        } else {
            document.body.style.backgroundColor = '#fff';
            document.body.style.color = '#000';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#fff';
                section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
            themeIcon.src = 'logo/moon.png'; 
        }
        localStorage.setItem('darkMode', darkMode);
    }

    function applyTheme() {
        document.body.classList.add('no-transition');
        updateTheme();
        setTimeout(() => {
            document.body.classList.remove('no-transition');
        }, 10);
    }

    toggleButton.addEventListener('click', function() {
        darkMode = !darkMode;
        applyTheme();
    });

    applyTheme();
});


function revealOnScroll() {
    const section = document.getElementById('social');
    const sectionPosition = section.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        setTimeout(() => {
            section.classList.add('visible');
        }, 500);
    }
}

window.addEventListener('scroll', revealOnScroll);
