// Copy the header links so every floating menu stays in sync with its page.
const header = document.querySelector('.site-top');
const floatingNavigation = document.createElement('div');
floatingNavigation.className = 'floating-navigation';

const toggle = document.createElement('button');
toggle.className = 'floating-toggle';
toggle.type = 'button';
toggle.textContent = '☰';
toggle.setAttribute('aria-label', 'Open navigation');
toggle.setAttribute('aria-expanded', 'false');
toggle.setAttribute('aria-controls', 'floating-panel');
toggle.inert = true;

const panel = document.createElement('div');
panel.id = 'floating-panel';
panel.className = 'floating-panel';
panel.inert = true;
panel.setAttribute('aria-hidden', 'true');
const panelTop = document.createElement('div');
panelTop.className = 'floating-panel-top';
const close = document.createElement('button');
close.type = 'button';
close.className = 'floating-close';
close.setAttribute('aria-label', 'Close navigation');
const closeImage = document.createElement('img');
closeImage.src = 'assets/menu-close.svg';
closeImage.alt = '';
close.append(closeImage);
// Edit these URLs to update your profiles. SVGs draw the two small icons.
const socials = document.createElement('div');
socials.className = 'floating-socials';
const profiles = [
  { name: 'Instagram', url: 'https://www.instagram.com/tyler_kweskin/', icon: '<rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor"/>' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/tylerkweskin', icon: '<rect x="2" y="2" width="20" height="20" rx="3" fill="currentColor"/><path d="M7 10v8M11 18v-8m0 4c0-5 6-5 6 0v4" fill="none" stroke="var(--panel)" stroke-width="2.3"/><circle cx="7" cy="6.8" r="1.3" fill="var(--panel)"/>' }
];
profiles.forEach(({ name, url, icon }) => {
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', name + ' (opens in a new tab)');
  link.title = name;
  link.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + icon + '</svg>';
  socials.append(link);
});
panelTop.append(socials, close);
const links = header.querySelector('nav').cloneNode(true);
links.setAttribute('aria-label', 'Floating navigation');
panel.append(panelTop, links);
floatingNavigation.append(toggle, panel);
document.body.append(floatingNavigation);

let menuOpen = false;
let headerVisible = true;
// Classes drive both directions of the animation. Do not use display:none,
// which would remove the panel before its closing animation can finish.
function setMenuOpen(open, restoreFocus = false) {
  menuOpen = open;
  floatingNavigation.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  toggle.inert = open || headerVisible;
  panel.inert = !open;
  panel.setAttribute('aria-hidden', String(!open));
  if (open) close.focus({ preventScroll: true });
  else if (restoreFocus) {
    (headerVisible ? header.querySelector('a') : toggle).focus({ preventScroll: true });
  }
}
toggle.addEventListener('click', () => setMenuOpen(true));
close.addEventListener('click', () => setMenuOpen(false, true));
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuOpen) setMenuOpen(false, true);
});
document.addEventListener('click', (event) => {
  if (menuOpen && !floatingNavigation.contains(event.target)) setMenuOpen(false);
});
// Keep the menu open when focus changes. Some browsers move focus away before
// a tapped link receives its click. Closing here would disable the link too soon.
// The close button, Escape key and clicks outside the menu still close it.
const headerObserver = new IntersectionObserver(([entry]) => {
  headerVisible = entry.isIntersecting;
  floatingNavigation.classList.toggle('is-available', !headerVisible);
  if (headerVisible) setMenuOpen(false, floatingNavigation.contains(document.activeElement));
  else toggle.inert = menuOpen;
});
headerObserver.observe(header);
