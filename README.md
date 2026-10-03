# Up Town Café — Website

Static site built with HTML5, Bootstrap 5, custom CSS and vanilla JS.
Dark, upscale rooftop theme (charcoal + brass gold), fully responsive,
mobile-first tuned.

## Files
```
index.html
css/style.css
js/script.js
assets/img/hero-1.jpg   (rooftop storefront photo — hero slide 1 & gallery)
assets/img/menu-1.jpg   (menu photo, page 1)
assets/img/menu-2.jpg   (menu photo, page 2)
assets/img/menu-3.jpg   (menu photo, page 3)
```

Open `index.html` directly in a browser, or serve the folder with any static host.

## A note on the menu photos
The three menu images you provided were very low resolution (151×151px),
so the text on them is not clearly legible on screen. They're placed as
tap-to-enlarge photo cards, same as the source files — no menu items or
prices were invented or guessed at. **Swap in higher-resolution photos or
scans of the same pages** (`assets/img/menu-1.jpg`, `menu-2.jpg`,
`menu-3.jpg`) for a menu people can actually read.

## Things to swap in later

**More hero slides** — duplicate the commented block in the hero carousel
in `index.html` (search "Add more slides later"), add the image to
`assets/img/`, and add a matching indicator button.

**More menu pages** — one placeholder card in the Menu section is marked
`REPLACE ME`. Swap it for a `menu-card` block like the three existing ones
once you have another page photographed.

**Gallery photos** — five placeholder tiles in the Gallery section are
marked `REPLACE ME`. Replace each with an `<img>` tag pointing at your own
photo.

**Map embed** — the Location section uses a basic Google Maps query embed.
For a nicer embed, generate an official iframe from Google Maps (Share →
Embed a map) for the Plus Code PX3J+C3, Islamabad, and swap the `src`.

**Reservation form** — front-end validation only; nothing is actually sent
anywhere yet (see the comment in `js/script.js`). Wire it up to a real
booking system, email service, or backend endpoint before relying on it.

**foodpanda link** — the "Order on foodpanda" buttons use the link you
provided. Double-check it still points to the right listing before publishing.

**Social links** — the footer's Instagram/Facebook icons point to `#`.
Replace with real profile URLs, marked `REPLACE ME`.

## Colors
Palette pulled from the rooftop photo (charcoal brick, brass signage,
black wicker, warm evening light) — defined as CSS variables at the top of
`css/style.css` if you want to adjust them.

## Mobile
Layout is mobile-first tuned: full-width stacked buttons, generous tap
targets, a collapsing hamburger nav, and no horizontal scroll on small
screens. Test on a real phone or your browser's device toolbar after any
edits, since replacing images with very large files can affect load time.
