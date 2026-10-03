# دیپلوی Persian-AROPL در Cloudflare

## روش ۰ — آپلود مستقیم در داشبورد (ساده‌ترین — پیشنهادی)
1. این فایل را دانلود کن: `Persian-AROPL-static-direct-upload.zip`
2. Cloudflare → **Workers & Pages → Create → Pages → Upload assets**
3. نام پروژه: `persian-aropl`
4. ZIP را بکش و رها کن → Deploy
5. سایت: `https://persian-aropl.pages.dev` — ادمین: `https://persian-aropl.pages.dev/admin`

## روش ۱ — Wrangler CLI (با Worker پراکسی TikTok)
```bash
unzip Persian-AROPL-cloudflare-deploy.zip && cd Persian-AROPL-cloudflare-deploy
npm install && npx wrangler deploy
```
سایت: `https://persian-aropl.<your-subdomain>.workers.dev` — ادمین: `/admin`

## ادمین TinaCMS (بعد از دیپلوی)
1. در [app.tina.io](https://app.tina.io) پروژه را باز کن و **Site URL** را روی آدرس دیپلوی‌شده ست کن
2. به `/admin` برو → Log in با حساب TinaCloud
3. کالکشن‌ها: Site Settings، Books، YouTube، TikTok Accounts، Study

نکته: LIVE/OFFLINE تیک‌تاک از بک‌اند Render می‌آید و به Tina ربطی ندارد.
