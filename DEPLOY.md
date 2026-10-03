# Persian-AROPL — راهنمای دیپلوی روی Cloudflare Workers

فایل `Persian-AROPL-cloudflare-deploy.zip` آماده استقرار است (سایت کامل + پنل TinaCMS `/admin` + کانفیگ Worker).

## روش ۱ — آپلود مستقیم (سریع‌ترین)
1. در `wrangler.jsonc` داخل ZIP، کلاینت آی‌دی تینا از قبل در باندل `/admin` تعبیه شده است؛ فقط Worker و assets را دیپلوی کنید:
2. محتویات ZIP را باز کنید، سپس:
```bash
npm install
npx wrangler deploy
```
پنل ادمین: `https://<worker>.workers.dev/admin`

## روش ۲ — Worker Builds (مبتنی بر گیت، توصیه‌شده)
ریپوی اصلی: https://github.com/alirezaiwisi1/Persian-AROPL
1. Cloudflare → Workers & Pages → Create → Workers → Import a repository → `Persian-AROPL`
2. Build command: `npm run build:cloud` — Deploy command: `npx wrangler deploy`
3. Worker → Settings → Build → Variables and Secrets:
   - `NEXT_PUBLIC_TINA_CLIENT_ID` = (کلاینت آی‌دی TinaCloud)
   - `TINA_TOKEN` = (توکن محتوای TinaCloud)
   - `GITHUB_BRANCH` = `main`
4. در app.tina.io پروژه TinaCloud، Site URL را روی `https://<worker>.workers.dev` تنظیم کنید.

بعد از آن، ذخیره‌ی هر تغییر در `/admin` مستقیم به GitHub کامیت می‌شود و Worker بازسازی می‌شود.

## متغیرهای محیطی
توکن Tina هرگز در سورس یا گیت قرار نمی‌گیرد — فقط در `.env` محلی (git-ignored) یا Secrets کلادفلر.

## TikTok LIVE
بک‌اند تشخیص LIVE دست‌نخورده است (`TIKTOK_API_BASE/api/status`). تینا فقط متادیتای استاتیک پروفایل‌ها را مدیریت می‌کند.


## روش ۰ — آپلود مستقیم در داشبورد (بدون بیلد — همان فایلی که ارور «build process» داد)
فایل `Persian-AROPL-static-direct-upload.zip` مخصوص همین روش است:
- هیچ wrangler config / build process ندارد → آپلودر داشبورد آن را می‌پذیرد
- فایل‌ها در ریشه ZIP هستند (نه داخل پوشه) → لازم نیست دستی جابه‌جا کنی
- پنل `/admin` production (متصل به TinaCloud) داخلش هست

مرحله‌ها:
1. Cloudflare → **Workers & Pages → Create → Pages → Upload assets** (یا Workers > Upload assets)
2. نام پروژه را بگذار (مثلاً `persian-aropl`) و ZIP را آپلود کن
3. تمام! سایت روی `https://<project>.pages.dev` و ادمین روی `/admin`

نکته: در این روش، Worker سفارشی (`/health`، پراکسی وضعیت) نداری و وضعیت LIVE مستقیم از بک‌اند Render خوانده می‌شود (CORS بک‌اند از قبل دامنه‌های pages.dev را نمی‌شناسد؛ اگر وضعیت «نامشخص» دیدی، در بک‌اند `src/accounts.js`/CORS دامنه pages.dev را اضافه کن یا از روش ۱ با wrangler deploy استفاده کن).
