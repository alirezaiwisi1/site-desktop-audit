/* Official TikTok accounts — the display names below are the accounts' real
   TikTok profile names, read from their public profiles (never guessed).

   The avatars follow a fixed convention:
       assets/images/tiktok/<username>.webp
   They are the accounts' real TikTok profile pictures, stored locally so the
   site never depends on TikTok's short-lived signed CDN URLs.

   The global LIVE alert reads this list on every page, so the names here must
   stay in sync with the static cards in index.html (#live section).
   `official: true` marks the Persian-language channel: it is always rendered
   first, LIVE or offline, with the spotlight treatment. */
window.AROPL_TIKTOK_ACCOUNTS = [
  { username: 'aroplfarsi',        name: 'aroplfarsi',             official: true },
  { username: 'aropl.afganistan',  name: 'AROPL-Farsi/Dari' },
  { username: 'nasarhashem',       name: 'nasarhashem' },
  { username: 'keyvan.alalmahdi',  name: 'K1.hashem' },
  { username: 'user2277795158168', name: 'Farshadalalmahdi' },
  { username: 'mehr.ecp',          name: 'Mohamad Hasan AlalMahdi' },
  { username: 'maryamalalmahdi',   name: 'AROPL-Persian' }
];
