// Toggle button for switching CSS
const toggleBtn = document.getElementById('toggleStyle');
const styleLink = document.getElementById('pagestyle');

toggleBtn.addEventListener('click', () => {
    if (styleLink.getAttribute('href') === 'css/style.css') {
        styleLink.setAttribute('href', 'css/simple.css');
        toggleBtn.textContent = 'Switch to Enhanced View';
    } else {
        styleLink.setAttribute('href', 'css/style.css');
        toggleBtn.textContent = 'Switch to Simple View';
    }
});

// Auto-detect slow connection / data saver
if (navigator.connection && navigator.connection.effectiveType) {
    if (navigator.connection.effectiveType.includes('2g') || navigator.connection.saveData) {
        styleLink.setAttribute('href', 'css/simple.css');
        toggleBtn.textContent = 'Switch to Enhanced View';
    }
}
