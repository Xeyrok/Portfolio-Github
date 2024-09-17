document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    let darkMode = localStorage.getItem('darkMode') === 'true';
    const isIndexPage = window.location.pathname.includes('index.html');
    const basePath = isIndexPage ? 'logo/' : '../logo/';

    const sunIcon = new Image();
    const moonIcon = new Image();
    sunIcon.src = `${basePath}sun.png`;
    moonIcon.src = `${basePath}moon.png`;

    function updateTheme() {
        if (darkMode) {
            document.body.style.backgroundColor = '#333';
            document.body.style.color = 'white';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = '#444';
                section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.7)';
            });
            themeIcon.src = sunIcon.src;
        } else {
            document.body.style.backgroundColor = 'white';
            document.body.style.color = '#000';
            document.querySelectorAll('section').forEach(section => {
                section.style.backgroundColor = 'white';
                section.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            });
            themeIcon.src = moonIcon.src;
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

    if (toggleButton) {
        toggleButton.addEventListener('click', function() {
            darkMode = !darkMode;
            applyTheme();
        });
    }

    applyTheme();
});
