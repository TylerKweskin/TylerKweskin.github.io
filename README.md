# Tyler Kweskin's Portfolio

My personal website, hosted at [tylerkweskin.github.io](https://tylerkweskin.github.io).

Built with HTML, CSS and JavaScript. No framework or build step.

## Where things are

| File | Contents |
| --- | --- |
| `index.html` | Homepage introduction and portrait |
| `about.html` | Background, past work, interests and photo credit |
| `projects.html` | Gallery and embedded project panels |
| `resume.html` | Education, experience and résumé download |
| `contact.html` | Contact details and email draft form |
| `CSS/portfolio.css` | Shared colors, page layout, photo shadow and floating menu |
| `CSS/site.css` | Project panel layout, gallery and vignette |
| `CSS/custom.css` | Original project button and panel styles |
| `js/s.js` | Project names, descriptions, links and selection buttons |
| `js/gallery.js` | Looping gallery |
| `js/navigation.js` | Floating menu and social links |
| `js/contact.js` | Opens an email draft with the form contents |
| `js/project-entry.js` | Opens Wanderer when a link includes `?java=2` |
| `assets/` | Photos, gallery images, fonts and icons |
| `files/` | Downloadable résumé PDF |
| `JavaScript work/` | Games and their App Lab files |
| `Alcohol-Label-Verification/` | Separate label verification project |

## How it works

The five pages share the same header and footer, included directly in each HTML file.
The floating menu copies the header links and appears when the top navigation scrolls
out of view. Its panel slides over the hamburger button, with social links and an X
to close it. Escape and clicking outside also close the menu.

The palette uses a darker, muted version of Monokai. Shared colors are defined as
CSS variables in `CSS/portfolio.css`. The homepage portrait has an inset shadow,
and the project gallery uses a gradient overlay to separate its edges from the
page background.

Project names, descriptions and links are stored in `js/s.js`. The numbered buttons
and arrows change the selected iframe, title and description. The first project's
starting text and frame are also included in `projects.html`. A few hidden description
elements remain because the original script still writes to their IDs.

The JavaScript games run from `JavaScript work/`. Their App Lab folders contain
the runtime code, fonts and images they use. The Java demos run through embedded
Online Java pages and require an internet connection.

The gallery contains 11 images. Each has a normal and higher-resolution version,
with the browser choosing which to load. The loop adds a copy at either end and
jumps back to the matching slide when an end is reached. Those copies reuse the
same image files. Scrolling is manual, with arrow-key support when the gallery
is focused.

The contact form builds a `mailto:` link from the entered name, subject and message.
It opens a draft in the visitor's email app; the site itself does not send or save
messages.

## Images and files

The homepage portrait is `assets/portrait.jpg`. The About page uses
`assets/about-unsplash-olena-bohovyk.jpeg`, credited to Olena Bohovyk on Unsplash
beneath the image. The résumé PDF is stored in `files/tyler-kweskin-resume.pdf`.

## Hosting

The main site is served through GitHub Pages at
[tylerkweskin.github.io](https://tylerkweskin.github.io).
The pages, styles, scripts and local assets are served directly from the repository.
