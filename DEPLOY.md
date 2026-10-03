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
