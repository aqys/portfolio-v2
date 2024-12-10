document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme') || 'dark-theme';
    document.querySelector('.icon--moon').classList.toggle('active', savedTheme === 'dark-theme');
    document.querySelector('.icon--sun').classList.toggle('active', savedTheme === 'light-theme');

    document.getElementById('switch').checked = savedTheme === 'light-theme';
});

function switchTheme() {
    const currentTheme = document.documentElement.className;
    const newTheme = currentTheme === 'dark-theme' ? 'light-theme' : 'dark-theme';
    document.documentElement.className = newTheme;
    localStorage.setItem('theme', newTheme);

    document.querySelector('.icon--moon').classList.toggle('active', newTheme === 'dark-theme');
    document.querySelector('.icon--sun').classList.toggle('active', newTheme === 'light-theme');
}