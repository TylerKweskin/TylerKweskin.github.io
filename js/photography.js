/* Choose the same 15 photos for a local calendar day. Keep the list order stable. */
function dailyPhotos(photos, date = new Date()) {
  const day = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  let seed = 2166136261;
  for (const character of day) seed = Math.imul(seed ^ character.charCodeAt(0), 16777619);
  function random() {
    seed += 0x6D2B79F5;
    let value = Math.imul(seed ^ seed >>> 15, 1 | seed);
    value ^= value + Math.imul(value ^ value >>> 7, 61 | value);
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  }
  const shuffled = photos.slice();
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 15);
}

(() => {
  const gallery = document.querySelector('.photography');
  if (!gallery || !window.portfolioPhotos?.length) return;
  const photos = dailyPhotos(window.portfolioPhotos);
  const picture = gallery.querySelector('.photography-image');
  const counter = gallery.querySelector('.photography-counter');
  const progress = gallery.querySelector('.photography-progress');
  const toggle = gallery.querySelector('.photography-toggle');
  const message = gallery.querySelector('.photography-message');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let paused = reducedMotion.matches;
  let visible = false;
  let current = 0;
  let timer;
  let request = 0;
  let started = false;
  let loading = false;

  // Load only the displayed photo and its next neighbor, not the whole collection.
  function schedule() {
    clearTimeout(timer);
    if (visible && !document.hidden && !paused && !loading) {
      timer = setTimeout(() => show(current + 1), 6000);
    }
  }
  function updatePause() {
    toggle.textContent = paused ? '▶ Play' : 'Ⅱ Pause';
    toggle.setAttribute('aria-label', paused ? 'Play slideshow' : 'Pause slideshow');
    schedule();
  }
  function show(position) {
    current = (position + photos.length) % photos.length;
    const selected = current;
    const ticket = ++request;
    loading = true;
    clearTimeout(timer);
    counter.textContent = `${String(current + 1).padStart(2, '0')} / ${photos.length}`;
    progress.style.width = `${(current + 1) / photos.length * 100}%`;
    gallery.setAttribute('aria-busy', 'true');
    const nextImage = new Image();
    nextImage.onload = () => {
      if (ticket !== request) return;
      picture.src = nextImage.src;
      picture.alt = photos[selected].alt;
      picture.hidden = false;
      message.hidden = true;
      loading = false;
      gallery.setAttribute('aria-busy', 'false');
      // Browsers reuse this cached image when the next slide appears.
      const preload = new Image();
      preload.src = photos[(selected + 1) % photos.length].src;
      schedule();
    };
    nextImage.onerror = () => {
      if (ticket !== request) return;
      picture.hidden = true;
      message.textContent = 'This photo could not load. Try the next arrow.';
      message.hidden = false;
      loading = false;
      gallery.setAttribute('aria-busy', 'false');
      schedule();
    };
    nextImage.src = photos[current].src;
  }
  gallery.querySelector('.photography-previous').addEventListener('click', () => show(current - 1));
  gallery.querySelector('.photography-next').addEventListener('click', () => show(current + 1));
  toggle.addEventListener('click', () => { paused = !paused; updatePause(); });
  gallery.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
      show(current + (event.key === 'ArrowRight' ? 1 : -1));
    }
  });
  document.addEventListener('visibilitychange', schedule);
  reducedMotion.addEventListener('change', event => {
    if (event.matches) { paused = true; updatePause(); }
  });
  new IntersectionObserver(entries => {
    visible = entries[0].isIntersecting;
    if (visible && !started) { started = true; show(0); }
    schedule();
  }, { threshold: 0.15 }).observe(gallery);
  updatePause();
})();
