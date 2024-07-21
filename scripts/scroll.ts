import $ from 'jquery';

const scrollDelay: number = 800;
let scrollIndex: number = 0;

interface iJQueryEventObject extends JQuery.Event {
    originalEvent: WheelEvent;
}

// Scroll event
$(function() {
    let isScrolling: boolean = false;
    let debounceDelay: number = 0;
    let sections: JQuery = $('section');
    let debounceTimeout: number | undefined;

    function handleScroll(event: iJQueryEventObject): void {
        if (isScrolling) return;

        let delta: number = event.originalEvent.deltaY;
        let customScrollOffset: number = 0;

        if (delta > 0) {
            incrementScrollIndex(sections.length);
        } else {
            decrementScrollIndex();
        }

        if (isScrollOnSection2(sections)) {
            customScrollOffset = 200;
        }

        let target: number = (sections.eq(scrollIndex).offset() ?? { top: 0, left: 0}).top - customScrollOffset;
        isScrolling = true;

        $('html, body').animate({
            scrollTop: target
        }, scrollDelay, function() {
            isScrolling = false;
        });

        event.preventDefault();
    }

    $(window).on('wheel', function(event: JQuery.Event): void {
        clearTimeout(debounceTimeout);
        debounceTimeout = setTimeout(function() {
            handleScroll(event as iJQueryEventObject);
        }, debounceDelay) as unknown as number;
    })
});

// Footer nevigation
$(function() {
    $("a").on('click', function(event: any): void {
        const target = event.currentTarget as HTMLAnchorElement;
        const hash: string = target.hash;

        if (hash !== "") {
            event.preventDefault();
            let offset: number = 0;

            if (hash === '#section1') {
                scrollIndex = 0;
            }

            if (hash === '#section2') {
                offset = 200;
                scrollIndex = 1;
            }

            if (hash === '#section3') {
                scrollIndex = 2;
            }

            $('html, body').animate({
                scrollTop: $(hash).offset()?.top ?? 0 - offset
            }, scrollDelay, function() {
                window.history.pushState(null, '', hash)
            });
        }
    });
});

// Helper functions
function incrementScrollIndex(sectionsLength: number): void {
    if (scrollIndex >= sectionsLength) return;

    scrollIndex++;
}

function decrementScrollIndex(): void {
    if (scrollIndex <= 0) return;

    scrollIndex--;
}

function isScrollOnSection2(sections: JQuery): boolean {
    return sections.eq(scrollIndex).attr('id') === 'section2';
}