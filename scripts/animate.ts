// Info page
const infoObserverLeftToRight1 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('info-show-left-right-1');
    });
});

const infoObserverLeftToRight2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('info-show-left-right-2');
    });
});

const infoObserverDownUp = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('info-show-down-up');
    });
});

const hiddenElementsLeftRight1 = document.querySelectorAll('.info-hidden-left-right-1');
hiddenElementsLeftRight1.forEach((element) => infoObserverLeftToRight1.observe(element));

const hiddenElementsLeftRight2 = document.querySelectorAll('.info-hidden-left-right-2');
hiddenElementsLeftRight2.forEach((element) => infoObserverLeftToRight2.observe(element));

const hiddenElementsDownUp = document.querySelectorAll('.info-hidden-down-up');
hiddenElementsDownUp.forEach((element) => infoObserverDownUp.observe(element));

// Project page
const projectObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add('project-show');
    });
});

const hiddenElementsProject = document.querySelectorAll('.project-hidden');
hiddenElementsProject.forEach((element) => projectObserver.observe(element));