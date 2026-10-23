/* Loop the gallery by placing a copy of the last image at the start and the first image at the end. Both copies reuse the same image files. */
(() => {
    const gallery = document.querySelector('.banner-scroll');
    if (!gallery) return;
    const slides = Array.from(gallery.children);
    if (slides.length < 2) return;

    function endCopy(slide) {
        const copy = slide.cloneNode(true);
        copy.setAttribute('aria-hidden', 'true');
        copy.removeAttribute('id');
        copy.querySelectorAll('[id]').forEach(element => element.removeAttribute('id'));
        // End copies are ready when the user reaches a loop boundary.
        copy.querySelectorAll('img').forEach(image => image.loading = 'eager');
        return copy;
    }
    gallery.prepend(endCopy(slides[slides.length - 1]));
    gallery.append(endCopy(slides[0]));
    const slideWidth = () => slides[0].getBoundingClientRect().width;

    // Temporarily disable snapping for the invisible jump between identical images.
    function jumpTo(left) {
        gallery.style.scrollSnapType = 'none';
        gallery.scrollLeft = left;
        requestAnimationFrame(() => gallery.style.removeProperty('scroll-snap-type'));
    }
    jumpTo(slideWidth()); // Start on the real first image, after the leading copy.

    function wrapAtEnd() {
        const width = slideWidth();
        if (!width) return;
        if (gallery.scrollLeft <= 1) {
            jumpTo(width * slides.length);
        } else if (gallery.scrollLeft >= width * (slides.length + 1) - 1) {
            jumpTo(width);
        }
    }
    // scrollend handles completed scrolling/snapping. The timer is a fallback
    // for browsers without that event; wrapping only occurs at an actual end.
    let settleTimer;
    gallery.addEventListener('scroll', () => {
        clearTimeout(settleTimer);
        settleTimer = setTimeout(wrapAtEnd, 180);
    }, { passive: true });
    gallery.addEventListener('scrollend', wrapAtEnd);

    // Focus the gallery and use arrow keys to move one image at a time.
    gallery.addEventListener('keydown', event => {
        if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return;
        event.preventDefault();
        gallery.scrollBy({
            left: (event.key === 'ArrowRight' ? 1 : -1) * slideWidth(),
            behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
        });
    });
})();
