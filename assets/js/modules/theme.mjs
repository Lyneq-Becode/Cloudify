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
    });


}

export {toggleDarkTheme};