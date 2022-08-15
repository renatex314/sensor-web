const root = document.querySelector(':root');

function updateAngle(name, angle) {
    root.style.setProperty(`--${name}`, `${angle}deg`);
}

function onDeviceOrientation({alpha = 0, beta = 0, gamma = 0}) {
    updateAngle('gamma', -gamma);
    updateAngle('beta', beta - 90);
}

window.addEventListener('deviceorientation', onDeviceOrientation);