const initFirstTheme = () => {
    const themeInStorage = localStorage.getItem('theme');
    const htmlElement = document.documentElement;
    const themeToggleButton = document.getElementById('theme-toggle');
    if (themeInStorage) {
        htmlElement.setAttribute('data-theme', themeInStorage);
        const themeIcon = document.createElement('i');
        if (themeInStorage === 'light') {
            themeIcon.classList.add('fas', 'fa-sun');
        } else {
            themeIcon.classList.add('fas', 'fa-moon');
        }
        themeToggleButton.innerHTML = '';
        themeToggleButton.appendChild(themeIcon);
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        const themeIcon = document.createElement('i');
        themeIcon.classList.add('fas', 'fa-sun');
        themeToggleButton.innerHTML = '';
        themeToggleButton.appendChild(themeIcon);
    }
}

const toggleDarkTheme = () => {
    const themeToggleButton = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;


    themeToggleButton.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        console.log(currentTheme, newTheme)
        htmlElement.setAttribute('data-theme', newTheme);

        const themeIcon = document.createElement('i');
        if (currentTheme === 'light') {
            themeIcon.classList.add('fas', 'fa-sun');
        } else {
            themeIcon.classList.add('fas', 'fa-moon');
        }

        themeToggleButton.innerHTML = '';
        themeToggleButton.appendChild(themeIcon);

        localStorage.setItem('theme', newTheme);
    });


}

export {initFirstTheme, toggleDarkTheme};