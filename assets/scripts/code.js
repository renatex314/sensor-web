const root = document.querySelector(':root');

function updateGamma(angle) {
    root.style.setProperty('--gamma', angle + 'deg');
}

function onDeviceOrientation({alpha = 0, beta = 0, gamma = 0}) {
    updateGamma(gamma);
}

window.addEventListener('deviceorientation', onDeviceOrientation);