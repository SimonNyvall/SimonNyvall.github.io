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


// *Info* Copy email to clipboard and play confetti
function playConfetti() {
    var confettiGif = document.getElementById('confettiGif');

    copyTextIntoClipboard()

    confettiGif.src = './images/confetti.gif';
    confettiGif.style.display = 'block';
    
    setTimeout(function() {
        confettiGif.style.display = 'none';
        confettiGif.src = '';
    }, 2000);
}

function copyTextIntoClipboard() {
    var textToCopy = 'simon.k.nyvall@proton.me'
    navigator.clipboard.writeText(textToCopy)
}

const infoObserverRightLeft = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info-show-right-left');
        } else {
            entry.target.classList.remove('info-show-right-left');
        }
    })
})

const infoObserverLeftRight1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info-show-left-right-1');
        } else {
            entry.target.classList.remove('info-show-left-right-1');
        }
    })
})

const infoObserverLeftRight2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info-show-left-right-2');
        } else {
            entry.target.classList.remove('info-show-left-right-2');
        }
    })
})

const infoObserverDownUp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('info-show-down-up');
        } else {
            entry.target.classList.remove('info-show-down-up');
        }
    })
})

const hiddenElementsRightLeft = document.querySelectorAll('.info-hidden-right-left');
hiddenElementsRightLeft.forEach((element) => infoObserverRightLeft.observe(element));

const hiddenElementsLeftRight1 = document.querySelectorAll('.info-hidden-left-right-1');
hiddenElementsLeftRight1.forEach((element) => infoObserverLeftRight1.observe(element));

const hiddenElementsLeftRight2 = document.querySelectorAll('.info-hidden-left-right-2');
hiddenElementsLeftRight2.forEach((element) => infoObserverLeftRight2.observe(element));

const hiddenElementsDownUp = document.querySelectorAll('.info-hidden-down-up');
hiddenElementsDownUp.forEach((element) => infoObserverDownUp.observe(element));

// *Project* apply the show effect
const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('project-show');
        } else {
            entry.target.classList.remove('project-show');
        }
    })
})

const hiddenElements = document.querySelectorAll('.project-hidden');
hiddenElements.forEach((element) => infoObserver.observe(element));

