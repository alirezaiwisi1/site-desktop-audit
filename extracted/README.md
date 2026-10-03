# AROPL Persian Cinematic — Cloudflare Ready

Static HTML/CSS/JS site prepared for Cloudflare Pages.

## TikTok LIVE status
- `#live` section on `index.html` (between Videos and Channels) listing the 7 monitored accounts as LIVE / OFFLINE cards.
- `assets/js/tiktok-live.js` polls `GET {TIKTOK_API_BASE}/api/status` every 30 s (paused while the tab is hidden, 8 s timeout). Failures only affect this section.
- Configure the backend URL in `assets/js/config.js` (`TIKTOK_API_BASE`, no trailing slash). The backend must send CORS headers allowing the site origin, and be served over HTTPS in production.
- To add/remove an account, edit the cards in the `#live` section of `index.html`, add the matching entry to `assets/js/tiktok-accounts.js`, drop the avatar in `assets/images/tiktok/<username>.webp`, and update the backend's `src/accounts.js`.

## V10 updates — TikTok LIVE experience
A premium, live-first presentation of the seven official accounts. The backend
contract is untouched: same endpoint, same payload shape, same 30 s refresh,
same timeout and visibility handling. Only the presentation changed.

**Real profile data**
- Every card shows the account's real TikTok display name and real avatar.
  Names were read from the public profiles (oEmbed / profile API), never guessed.
- Avatars live in `assets/images/tiktok/<username>.webp` (256×256 WebP) because
  TikTok's CDN URLs are signed and expire within days — a local copy keeps the
  section stable. Re-download them if an account changes its picture.
- `assets/js/tiktok-accounts.js` is the shared roster used by the global LIVE
  alert on every page; keep its names in sync with the `#live` cards.

**Live-first ordering**
- `aroplfarsi` (the official Persian channel) is always the first card, LIVE or
  offline, and gets the spotlight treatment: full-width card, larger gold ring,
  "کانال رسمی فارسی" badge, gold sheen, and a CTA that turns solid gold with
  "تماشای پخش زنده" while it is live.
- Every other account is sorted LIVE first, then by document order. Reordering
  is animated with a FLIP pass (skipped for reduced motion or off-screen grids).

**LIVE visibility**
- Live cards get a gold conic ring rotating around the avatar, a red status dot,
  a red "زنده" pill with a sweeping sheen, a gold bloom and a lifted shadow.
  Offline avatars are desaturated so the live ones read instantly.
- The status rail above the grid carries a pulsing indicator, the count and a
  live counter badge.

**Global LIVE alert**
- Rendered by `tiktok-live.js` on both pages, so it works anywhere.
- Home page (`<body data-live-banner="sticky">`): stays visible while anything
  is live.
- Other pages (`data-live-banner="timed"`): appears on a new session and hides
  after 10 s.
- A session that starts while the alert is dismissed brings it back; dropping to
  zero live accounts hides it and clears the dismissal.
- Handles several simultaneous sessions: an avatar stack (official first) plus a
  "+N" bubble past three, with the names listed underneath.
- While it is docked, `html.has-live-alert` raises `scroll-padding-top` so anchor
  jumps land below the alert instead of under it.

**Accent colour**: `--live: #e11d48` is the only new token. It is used purely for
LIVE state (dot, pill, banner chip) and is darkened just enough that white text
on it clears WCAG AA (4.7:1). Everything else keeps the existing gold identity.


## Final updates
- Persian-first study page with English toggle.
- Responsive layout across the full site.
- Persian and English YouTube horizontal sliders with channel card as first slide.
- Consistent visual language for all controls and buttons.
- Horizontal 3D book cards for The Mahdi's Manifesto and The Goal of the Wise.
- Audio-reading buttons connected to the supplied Telegram links.
- HUMANITY FIRST is used consistently across the site.
- Removed obsolete source-introduction wording and source-based reading labels.

## V9 updates — Study page upgrade
- Rebuilt `study.html`: each heading now owns its paragraphs and quotes, so the
  designed section/quote styling actually renders (previously the blockquotes and
  body copy sat outside `.article-section` and fell back to browser defaults).
- New cinematic hero with a reading-meta row (sections · read time · languages).
- Sticky "Contents" rail with 8 numbered anchors, scroll-spy highlighting and a
  horizontally scrollable chip variant on small screens.
- Identity card for the intro: framed portrait, lead paragraph and title chips.
- Numbered section headings, accented sub-headings, gold quote cards with a
  separate source line, and a closing "final note" panel.
- Closing CTA card plus a matching site footer and a floating back-to-top button.
- Full site header (desktop nav + animated mobile menu) restored on the study page.
- `study.js`: language switch now drives every translatable node, swaps the
  contents anchors per language, and runs the scroll-spy.
- Fixed a 151px horizontal page overflow on phones caused by the contents rail's
  intrinsic width (`min-width:0` on the grid items).

## V8 updates
- Fixed: vertical touch scrolling on the YouTube sliders (touch-action / overscroll-behavior).
- Moved the gold rule from the home hero to the Study hero.
- New glass header with scroll-spy, animated mobile menu, richer footer, ambient background, hero drift.
