# Editing the portfolio

Start with `index.html`. This is a plain HTML, CSS and JavaScript site, with no build step.

## Where things are

| File | What to edit |
| --- | --- |
| `index.html` | Homepage introduction and portrait |
| `about.html` | Background, past work, interests and photo credit |
| `projects.html` | Gallery and embedded project panels |
| `resume.html` | Education, experience and résumé download link |
| `contact.html` | Contact details and email draft form |
| `CSS/portfolio.css` | Shared colors, page layout, photo shadow and floating menu |
| `CSS/site.css` | Project panel layout, gallery and vignette |
| `CSS/custom.css` | Original project button and panel styles |
| `js/s.js` | Project names, descriptions, links and selection buttons |
| `js/gallery.js` | Looping gallery |
| `js/navigation.js` | Floating menu and social links |
| `js/contact.js` | Opens the visitor’s email app with a draft |
| `js/project-entry.js` | Opens Wanderer when a link includes `?java=2` |
| `assets/` | Photos, gallery images, fonts and icons |
| `files/` | Downloadable résumé PDF |
| `JavaScript work/` | Original games and the App Lab files they need |
| `Alcohol-Label-Verification/` | Separate original project, kept for direct access |

## Making changes

Change page text between HTML tags. A link’s `href` is its destination; an image’s
`src` is its file path. Keep image `alt` text descriptive.

The header and footer are repeated in all five pages. Update each copy when changing
those links or credits. The floating menu copies the header links automatically.
Social profile links are in `js/navigation.js`, with additional links on About and Contact.

Start with the color variables at the top of `CSS/portfolio.css` to change the palette.
CSS uses `.class` for a class and `#id` for an ID. Padding adds space inside a box;
margin adds space outside it. Comments mark the main sections and useful settings.

The homepage portrait is `assets/portrait.jpg`. About uses
`assets/about-unsplash-olena-bohovyk.jpeg`; its photographer credit is in `about.html`.
The inset portrait shadow is near the bottom of `CSS/portfolio.css`.

Project names, descriptions and links are in `js/s.js`. The first project’s initial
text and frame are also in `projects.html`, so update both when changing that entry.
Keep the hidden description IDs: the original script still writes to them.

Each gallery image has a normal and higher-resolution version. The browser chooses
which to load. The loop reuses these files rather than needing extra image copies.

The games’ App Lab folders include fonts, images and runtime code. Keep those files
with their games, even when they do not appear directly on the portfolio page.

## Running and publishing

For a local preview, run `python3 -m http.server 8000` from this folder, then open
http://localhost:8000. Stop the server with Ctrl+C.

To publish on a static host such as GitHub Pages, upload this folder’s contents with
`index.html` at the root. Preserve file names, folder names and letter case.
Java demos need an internet connection and rely on Online Java.
The contact form opens an email draft; it does not send messages itself.

The layout is desktop-only for now. After an edit, refresh the page and check the
changed section. For project changes, also try the numbered buttons and both arrows.
