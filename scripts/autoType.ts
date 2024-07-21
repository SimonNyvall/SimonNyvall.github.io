import Typed from 'typed.js';

document.addEventListener('DOMContentLoaded', () => {
    const options = {
        strings: [".NET Developer", "Problem Solver", "Simon Nyvall"],
        typeSpeed: 150,
        backSpeed: 150,
        loop: true
    };

    // Ensure the element exists before initializing Typed
    const heroAutoTypeElement = document.querySelector('.hero-auto-type');
    if (heroAutoTypeElement) {
        new Typed('.hero-auto-type', options);
    }
});