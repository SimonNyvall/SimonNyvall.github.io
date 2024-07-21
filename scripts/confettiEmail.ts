document.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('copyButton') as HTMLButtonElement;
    if (button) {
        button.addEventListener('click', coypTextIntoClipboard);
    }
});

function coypTextIntoClipboard(): void {
    const textToCopy: string = 'simon.k.nyvall@proton.me';
    navigator.clipboard.writeText(textToCopy);

    playConfetti();
}

function playConfetti(): void {
    const confettiGif = document.getElementById('confettiGif') as HTMLImageElement;

    confettiGif.src = './images/confetti.gif';
    confettiGif.style.display = 'block';

    const confettiTimeoutTimer: number = 2000;

    setTimeout(function() {
        confettiGif.style.display = 'none';
        confettiGif.src = '';
    }, confettiTimeoutTimer);
}