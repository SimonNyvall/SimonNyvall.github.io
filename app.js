// Global
let currentScrollIndex = 0;

// Auto type
var typed = new Typed(".auto-type", {
    strings : [".NET Developer", "Problem Solver", "Simon Nyvall"],
    typeSpeed : 150,
    backSpeed : 150,
    loop : true
})

// Smooth scroll
$(document).ready(function() {
    let isScrolling = false
    let scrollDelay = 800
    let debounceDelay = 1
    let sections = $("section")
    let debounceTimeout

    function handleScroll(event) {
        if (isScrolling) return

        let delta = event.originalEvent.deltaY
        let customScrollOffset = 0

        if (delta > 0) {
            // Scrolling down
            if (currentScrollIndex < sections.length - 1) {
                currentScrollIndex++
            }
        } else {
            // Scrolling up
            if (currentScrollIndex > 0) {
                currentScrollIndex--
            }
        }

        if (sections.eq(currentScrollIndex).attr('id') === 'section2') {
            customScrollOffset = 200
        }

        let target = sections.eq(currentScrollIndex).offset().top - customScrollOffset
        isScrolling = true

        $('html, body').animate({
            scrollTop: target
        }, scrollDelay, function() {
            isScrolling = false
        })

        event.preventDefault()
    }

    $(window).on('wheel', function(event) {
        clearTimeout(debounceTimeout)
        debounceTimeout = setTimeout(function() {
            handleScroll(event)
        }, debounceDelay)
    })
})

// *Info* Copy email to clipboard and play confetti
function playConfetti() {
    var confettiGif = document.getElementById('confettiGif')

    copyTextIntoClipboard()

    confettiGif.src = './images/confetti.gif'
    confettiGif.style.display = 'block'
    
    setTimeout(function() {
        confettiGif.style.display = 'none'
        confettiGif.src = ''
    }, 2000);
}

function copyTextIntoClipboard() {
    var textToCopy = 'simon.k.nyvall@proton.me'
    navigator.clipboard.writeText(textToCopy)
}

const infoObserverLeftRight1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('info-show-left-right-1')
    })
})

const infoObserverLeftRight2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('info-show-left-right-2')
    })
})

const infoObserverDownUp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return

        entry.target.classList.add('info-show-down-up')
    })
})

const hiddenElementsLeftRight1 = document.querySelectorAll('.info-hidden-left-right-1')
hiddenElementsLeftRight1.forEach((element) => infoObserverLeftRight1.observe(element))

const hiddenElementsLeftRight2 = document.querySelectorAll('.info-hidden-left-right-2')
hiddenElementsLeftRight2.forEach((element) => infoObserverLeftRight2.observe(element))

const hiddenElementsDownUp = document.querySelectorAll('.info-hidden-down-up')
hiddenElementsDownUp.forEach((element) => infoObserverDownUp.observe(element))

// *Project* apply the show effect
const infoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('project-show')
        } else {
            entry.target.classList.remove('project-show')
        }
    })
})

const hiddenElements = document.querySelectorAll('.project-hidden')
hiddenElements.forEach((element) => infoObserver.observe(element))

// *Footer* nav
$(document).ready(function() {
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault()
            var hash = this.hash
            var offset = 0

            if (hash === "#section1") {
                currentScrollIndex = 0;
            }

            if (hash === "#section2") {
                offset = 200
                currentScrollIndex = 1;
            }

            $('html, body').animate({
                scrollTop: $(hash).offset().top - offset
            }, 800, function() {
                window.history.pushState(null, null, hash)
            })
        }
    });
});