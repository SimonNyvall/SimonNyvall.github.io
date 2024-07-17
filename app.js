var typed = new Typed(".auto-type", {
    strings : [".NET Developer", "Problem Solver", "Simon Nyvall"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetElement = document.querySelector(this.getAttribute('href'));
        window.scroll({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

function playConfetti() {
    var confettiGif = document.getElementById('confettiGif');
    confettiGif.src = './images/confetti.gif';
    confettiGif.style.display = 'block';
    
    setTimeout(function() {
        confettiGif.style.display = 'none';
        confettiGif.src = '';
    }, 2000);
}