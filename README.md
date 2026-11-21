# JRishiCPAs — website (Warm boutique design)

A responsive website for **JRishiCPAs**, an online Canadian tax and accounting firm founded by Jatin Rishi. This version is designed as a warm, founder-led boutique: cream, sand, terracotta and olive, friendly serif type and handwritten touches, with Jatin at the centre. It is a static site with plain HTML, CSS and a little vanilla JavaScript: no build step and no dependencies apart from Google Fonts.

Live site (GitHub Pages): <https://jatinrishi5.github.io/Test-5/>

## Viewing the site

**Locally:** open `index.html` in any modern browser, or serve the folder:

```bash
python3 -m http.server 8000
```

**GitHub Pages:** published from the `main` branch, `/ (root)` folder. Anything pushed to `main` is republished automatically.

## What's on the page

| Section | Notes |
| --- | --- |
| Header | Note bar, sticky header, mobile menu, "Book a free call" button |
| Hero | "Hi, I'm Jatin" introduction, arched portrait, hand-drawn underline and olive sprig |
| People I work with | Tags for the kinds of clients the firm serves |
| A note from Jatin | A short personal letter with a handwritten sign-off |
| Services | "For you & your family" and "For your business", each linking to the booking form |
| How we'll work together | Four steps along a winding path |
| Promises | Four commitments on an olive band |
| Tax season | 2026 CRA deadlines as calendar cards (next one highlighted) and a document checklist |
| FAQ | Accordion |
| Let's talk | 3-step booking form beside "You'll be speaking with me" |

## Structure

```
index.html      All page sections
css/base.css    Shared layout, accessibility, accordion, checklist and form styles
css/styles.css  This design's look and layout
js/site.js      Menu, reveals, deadlines, tabs, checklists, FAQ and booking form
js/fx.js        Hand-drawn underlines
images/         Founder photo and software logos
```

## Before going live

- The phone number and email are placeholders (`(555) 010-0000`, `hello@example.com`).
- Booking: set `BOOKING_URL` in `js/site.js` to your Calendly (or similar) link. Until then, finished requests open an email to `CONTACT_EMAIL`.
- The firm's promises (quote before work starts, client portal, hours) should be confirmed before launch.
- Update the CRA deadline list each tax year (`data-date` attributes in `index.html`).
