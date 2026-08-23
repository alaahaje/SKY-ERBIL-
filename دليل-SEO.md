# دليل SEO لموقع Sky Erbil Hotel (3p4ad.com)

## 1) الملفات اللي انضافت/تعدلت
- `index.html`, `deluxe-room.html`, `premium-suite.html`, `signature-suite.html` — انضافت لهم meta description, canonical, Open Graph, Twitter Card، وJSON-LD (Hotel + FAQ) بصفحة index.
- `sitemap.xml` — خارطة الموقع، لازم ترفعها بالجذر: `https://3p4ad.com/sitemap.xml`
- `robots.txt` — لازم يكون بالجذر: `https://3p4ad.com/robots.txt`

## 2) قبل الرفع
- ارفع كل ملفات الموقع (html, css, js) + `sitemap.xml` + `robots.txt` بجذر الاستضافة نفس المستوى مال `index.html`.
- تأكد الدومين `3p4ad.com` مربوط ويشتغل بـ HTTPS (شهادة SSL) — أغلب الاستضافات (Hostinger, Namecheap, GoDaddy...) توفرها مجانية تلقائي.
- سوي صورة `favicon.ico` وحطها بالجذر (اختياري بس مهم للمظهر بنتائج البحث).

## 3) Google Search Console (الأهم)
1. روح https://search.google.com/search-console
2. اختر "Domain" وحط `3p4ad.com` — راح يطلب TXT record تضيفه بإعدادات DNS مال الدومين (من نفس مكان اشتريت الدومين).
3. بعد التحقق، روح لـ **Sitemaps** من القائمة اليسار، وحط:
   `sitemap.xml`
   واضغط Submit.
4. من **URL Inspection** اختبر الصفحة الرئيسية واطلب "Request Indexing" حتى تسرّع الفهرسة.

## 4) Google Business Profile (مهم جداً لفنادق!)
هذا أهم من الموقع نفسه بالنسبة للفنادق لأنه يظهر بخرائط گوگل ونتائج البحث المحلي:
1. روح https://business.google.com
2. سوي بروفايل باسم "Sky Erbil Hotel"، فئة "Hotel"
3. حط نفس الإحداثيات: 36.179579, 44.008331
4. حط رقم الهاتف 07830929916 ورابط الموقع 3p4ad.com
5. ارفع صور حقيقية للفندق (مو صور ستوك) — گوگل يفضلها كثير
6. فعّل استلام التقييمات (reviews) وردّ عليها بانتظام

## 5) نصايح إضافية لتحسين الترتيب
- بدّل صور Unsplash (الستوك) بصور حقيقية للفندق — گوگل والزوار يفضلون هذا كثير، وأيضاً يحسّن الثقة (E-E-A-T).
- أضف alt text وصفي لكل الصور (حالياً بعضها alt="Room photo" فقط — خليها أوصف مثل "Deluxe Room bedroom at Sky Erbil Hotel").
- سوي نسخة عربية/كردية فعلية للموقع (عندك بنية i18n جاهزة بالـJS) وربطها بـ `hreflang` tags حتى يوصل الموقع للبحث العربي/الكردي كمان.
- اطلب من الضيوف يسوون تقييم گوگل بعد كل إقامة — التقييمات الكثيرة والحديثة تأثر مباشر على الترتيب المحلي.
- راقب الأداء من Search Console كل أسبوعين (Performance tab) لتشوف الكلمات اللي الناس يبحثون بيها.

## 6) فحص سريع بعد النشر
- https://search.google.com/test/rich-results → دزّ رابط الموقع تشوف إذا الـ Hotel schema وFAQ schema يشتغلون صح.
- https://pagespeed.web.dev → افحص سرعة الموقع (مهم لأنه يأثر على الترتيب).
