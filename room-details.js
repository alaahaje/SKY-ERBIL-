const roomTranslations={
 en:{back:'← Back to Rooms',tag:'ROOM DETAILS',price:'Starting price / night',book:'Book on WhatsApp',call:'Call to Book',about:'About this room',specs:'Room Specifications',amenities:'Room Amenities',size:'Room size',guests:'Guests',bed:'Bed',view:'View',wifi:'Wi‑Fi',bath:'Bathroom',breakfast:'Breakfast',footer:'© 2026 Sky Erbil Hotel. All Rights Reserved.',sample:'Sample price — replace with your actual hotel rate.',available:'Available for booking',checkin:'Check‑in',checkout:'Check‑out',checkinTime:'2:00 PM',checkoutTime:'12:00 PM',cancelTitle:'Cancellation Policy',cancelText:'Free cancellation up to 24 hours before check‑in. Contact us for details.',beds:'Beds',why:'Why choose this room?'},
 ar:{back:'→ العودة إلى الغرف',tag:'تفاصيل الغرفة',price:'السعر الابتدائي / الليلة',book:'احجز عبر واتساب',call:'اتصل للحجز',about:'عن هذه الغرفة',specs:'مواصفات الغرفة',amenities:'مميزات الغرفة',size:'مساحة الغرفة',guests:'عدد الضيوف',bed:'السرير',view:'الإطلالة',wifi:'واي فاي',bath:'الحمام',breakfast:'الإفطار',footer:'© 2026 Sky Erbil Hotel. جميع الحقوق محفوظة.',sample:'سعر تجريبي — استبدله بسعر الفندق الفعلي.',available:'متاحة للحجز',checkin:'تسجيل الدخول',checkout:'تسجيل الخروج',checkinTime:'2:00 ظهراً',checkoutTime:'12:00 ظهراً',cancelTitle:'سياسة الإلغاء',cancelText:'إلغاء مجاني حتى 24 ساعة قبل تسجيل الدخول. تواصل معنا لمزيد من التفاصيل.',beds:'الأسرّة',why:'لماذا تختار هذه الغرفة؟'},
 ku:{back:'← گەڕانەوە بۆ ژوورەکان',tag:'وردەکارییەکانی ژوور',price:'نرخی دەستپێک / شەوێک',book:'حجز لە WhatsApp',call:'پەیوەندی بۆ حجز',about:'دەربارەی ئەم ژوورە',specs:'تایبەتمەندییەکانی ژوور',amenities:'خزمەتگوزارییەکانی ژوور',size:'قەبارەی ژوور',guests:'ژمارەی میوان',bed:'جۆری جێخەو',view:'دیمەن',wifi:'Wi‑Fi',bath:'حەمام',breakfast:'نانی بەیانی',footer:'© 2026 Sky Erbil Hotel. هەموو مافەکان پارێزراون.',sample:'نرخی نموونەییە — بە نرخی ڕاستەقینەی هوتێلەکە بگۆڕە.',available:'بۆ حجز بەردەستە',checkin:'چوونەژوور',checkout:'دەرچوون',checkinTime:'2:00ی دوای نیوەڕۆ',checkoutTime:'12:00ی نیوەڕۆ',cancelTitle:'سیاسەتی هەڵوەشاندنەوە',cancelText:'هەڵوەشاندنەوەی بەخۆڕایی تا 24 کاتژمێر پێش چوونەژوور. بۆ زانیاری زیاتر پەیوەندیمان پێوە بکە.',beds:'جێخەوەکان',why:'بۆچی ئەم ژوورە هەڵبژێریت؟'}
};
const roomData={
 deluxe:{en:{name:'Deluxe Room',intro:'A bright and elegant room designed for a peaceful and comfortable stay.',price:'$70',priceIQD:'≈ 92,000 IQD',size:'32 m²',guests:'2 Guests',beds:'1 King or 2 Twin',bed:'King / Twin',view:'City View',bath:'Private Bathroom',desc:'The Deluxe Room combines modern comfort with a calm, elegant atmosphere. It is ideal for couples, business travelers and short stays.',why:['Best value for solo travelers and couples','Quiet city‑facing rooms with soft natural light','Steps away from the lobby and breakfast area'],images:['https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1400&q=90','https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=1000&q=85']},ar:{name:'غرفة ديلوكس',intro:'غرفة مشرقة وأنيقة صممت لإقامة هادئة ومريحة.',desc:'تجمع غرفة ديلوكس بين الراحة العصرية والأجواء الهادئة والأنيقة، وهي مناسبة للأزواج ورجال الأعمال والإقامات القصيرة.',beds:'سرير كينغ واحد أو سريران مفردان',why:['أفضل قيمة للمسافرين الفرديين والأزواج','غرف هادئة تطل على المدينة بإضاءة طبيعية ناعمة','قريبة جداً من الاستقبال ومنطقة الإفطار']},ku:{name:'ژووری دێلوکس',intro:'ژوورێکی ڕوون و جوان بۆ مانەوەیەکی ئارام و ئاسوودە.',desc:'ژووری دێلوکس ئاسوودەیی نوێ و کەشێکی ئارام و جوان کۆدەکاتەوە، گونجاوە بۆ دوو کەس و گەشتی کار و مانەوەی کورت.',beds:'یەک جێخەوی کینگ یان دوو جێخەوی تاک',why:['باشترین هەڵبژاردن بۆ گەشتیارانی تاک و دووکەس','ژووری ئارام بەرەو شار بە ڕووناکی سروشتی','نزیک لە پێشوازی و شوێنی نانی بەیانی']}},
 premium:{en:{name:'Premium Suite',intro:'More space, more privacy and a refined atmosphere for a superior stay.',price:'$100',priceIQD:'≈ 131,000 IQD',size:'48 m²',guests:'3 Guests',beds:'1 King + Sofa Bed',bed:'King Bed',view:'City / Garden View',bath:'Premium Bathroom',desc:'The Premium Suite offers generous space and extra privacy, making it a strong choice for guests who want more room to relax.',why:['Separate lounge area for extra privacy','Garden‑facing rooms available on request','Ideal for small families or extended business stays'],images:['https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1400&q=90','https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1000&q=85']},ar:{name:'جناح بريميوم',intro:'مساحة أكبر وخصوصية أكثر وأجواء راقية لإقامة مميزة.',desc:'يوفر جناح بريميوم مساحة واسعة وخصوصية إضافية، وهو خيار مناسب لمن يرغب بمساحة أكبر للاسترخاء.',beds:'سرير كينغ واحد + أريكة سرير',why:['منطقة جلوس منفصلة لخصوصية أكبر','غرف تطل على الحديقة متاحة عند الطلب','مثالي للعائلات الصغيرة وإقامات العمل الممتدة']},ku:{name:'سوویتی پریمیوم',intro:'شوێنی زیاتر و تایبەتمەندی زیاتر بۆ مانەوەیەکی تایبەت.',desc:'سوویتی پریمیوم شوێنی فراوان و تایبەتمەندی زیاتر پێشکەش دەکات و هەڵبژاردەیەکی باشە بۆ پشوودان.',beds:'یەک جێخەوی کینگ + سۆفا جێخەو',why:['شوێنی دانیشتنی جیاواز بۆ تایبەتمەندی زیاتر','ژووری بەرەو باخچە لەسەر داواکاری بەردەستە','گونجاوە بۆ خێزانی بچووک و مانەوەی کاری درێژ']}},
 signature:{en:{name:'Signature Suite',intro:'A spacious retreat made for longer stays and special occasions.',price:'$140',priceIQD:'≈ 183,000 IQD',size:'65 m²',guests:'4 Guests',beds:'1 King + Sofa Bed',bed:'King Bed + Sofa Bed',view:'Panoramic View',bath:'Luxury Bathroom',desc:'The Signature Suite is our most spacious option, designed for guests seeking extra comfort, privacy and a memorable stay.',why:['Panoramic views across Erbil','Largest layout with a dedicated living area','Perfect for celebrations and longer stays'],images:['https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1400&q=90','https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=85','https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85']},ar:{name:'جناح سيغنتشر',intro:'ملاذ واسع للإقامات الطويلة والمناسبات الخاصة.',desc:'جناح سيغنتشر هو الخيار الأكثر اتساعاً، وقد صمم للضيوف الذين يبحثون عن راحة وخصوصية أكبر وإقامة مميزة.',beds:'سرير كينغ واحد + أريكة سرير',why:['إطلالات بانورامية على أربيل','أكبر مساحة مع صالة جلوس مستقلة','مثالي للاحتفالات والإقامات الطويلة']},ku:{name:'سوویتی سیگنەچەر',intro:'شوێنێکی فراوان بۆ مانەوەی درێژ و بۆنە تایبەتەکان.',desc:'سوویتی سیگنەچەر فراوانترین هەڵبژاردەی ئێمەیە، بۆ ئەو میوانانەی ئاسوودەیی و تایبەتمەندی زیاتر دەوێن.',beds:'یەک جێخەوی کینگ + سۆفا جێخەو',why:['دیمەنی پانۆرامی بۆ سەرتاسەری هەولێر','فراوانترین پلان لەگەڵ ژووری دانیشتنی تایبەت','گونجاوە بۆ ئاهەنگ و مانەوەی درێژ']}}
};

const ICONS={
 wifi:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5a11 11 0 0 1 14 0"/><path d="M8.5 16a6 6 0 0 1 7 0"/><path d="M12 20h.01"/></svg>',
 bath:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 12h16v2a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5v-2Z"/><path d="M7 12V6a2 2 0 0 1 3.2-1.6"/><path d="M4 19v1M18 19v1"/></svg>',
 breakfast:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21h13"/><path d="M6 21V9a5 5 0 0 1 10 0"/><path d="M17 6h1a3 3 0 0 1 0 6h-1"/></svg>',
 whatsapp:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.13h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.22 8.22 0 0 1-1.26-4.36c0-4.55 3.7-8.25 8.26-8.25a8.2 8.2 0 0 1 5.84 2.42 8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.71 8.22-8.26 8.22zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.24-.64.81-.78.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.23a7.5 7.5 0 0 1-1.39-1.73c-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.04 0 1.2.88 2.36 1 2.53.12.16 1.73 2.64 4.2 3.7.59.25 1.05.4 1.4.51.59.19 1.13.16 1.55.1.47-.07 1.47-.6 1.68-1.19.2-.58.2-1.08.14-1.19-.06-.11-.22-.17-.47-.29z"/></svg>',
 phone:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
 spark:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18"/></svg>',
 clock:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>',
 shield:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l7 3v6c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6l7-3Z"/><path d="m9 12 2 2 4-4"/></svg>'
};

function initRoom(){
 const key=document.body.dataset.room;
 const data=roomData[key];
 let lang=localStorage.getItem('skyLang')||'en';

 const apply=()=>{
  const t=roomTranslations[lang];
  const d={...data.en,...(data[lang]||{})};
  document.documentElement.lang=lang;
  document.body.classList.toggle('rtl',lang!=='en');
  document.querySelectorAll('[data-t]').forEach(e=>e.textContent=t[e.dataset.t]||'');
  document.querySelector('[data-room-name]').textContent=d.name;
  document.querySelector('[data-room-intro]').textContent=d.intro;
  document.querySelector('[data-room-desc]').textContent=d.desc;
  document.querySelector('[data-price]').textContent=d.price;
  document.querySelector('[data-price-iqd]').textContent=d.priceIQD;
  document.querySelector('[data-lang]').textContent=lang.toUpperCase();
  document.querySelector('[data-img]').style.backgroundImage=`url('${d.images[0]}')`;
  document.querySelectorAll('.room-gallery img').forEach((img,i)=>{
   img.src=d.images[i]||d.images[0];
   img.dataset.full=d.images[i]||d.images[0];
  });
  document.querySelector('[data-size]').textContent=d.size;
  document.querySelector('[data-guests]').textContent=d.guests;
  document.querySelector('[data-bed]').textContent=d.beds||d.bed;
  document.querySelector('[data-view]').textContent=d.view;
  document.querySelector('[data-bath]').textContent=d.bath;
  document.querySelector('[data-sample]').textContent=t.sample;
  document.querySelector('[data-available]').textContent=t.available;
  document.querySelector('[data-checkin-label]').textContent=t.checkin;
  document.querySelector('[data-checkin-time]').textContent=t.checkinTime;
  document.querySelector('[data-checkout-label]').textContent=t.checkout;
  document.querySelector('[data-checkout-time]').textContent=t.checkoutTime;
  document.querySelector('[data-cancel-title]').textContent=t.cancelTitle;
  document.querySelector('[data-cancel-text]').textContent=t.cancelText;
  document.querySelector('[data-why-title]').textContent=t.why;
  document.querySelector('[data-book-label]').textContent=t.book;
  document.querySelector('[data-call-label]').textContent=t.call;

  const whyWrap=document.querySelector('[data-why-list]');
  whyWrap.innerHTML='';
  (d.why||[]).forEach((line,i)=>{
   const card=document.createElement('div');
   card.className='why-card';
   card.innerHTML=`${ICONS.spark}<h3>${(i+1).toString().padStart(2,'0')}</h3><p>${line}</p>`;
   whyWrap.appendChild(card);
  });

  const waMsg=encodeURIComponent(`Hello, I'd like to book the ${d.name} at Sky Erbil Hotel.`);
  document.querySelector('[data-wa-book]').href=`https://wa.me/9647830929916?text=${waMsg}`;
 };

 document.querySelector('[data-lang]').onclick=()=>{
  lang={en:'ar',ar:'ku',ku:'en'}[lang];
  localStorage.setItem('skyLang',lang);
  apply();
 };

 apply();
 initRoomLightbox();
}

function initRoomLightbox(){
 const grid=document.querySelector('.room-gallery');
 if(!grid) return;
 const lightbox=document.getElementById('lightbox');
 const stageImg=document.getElementById('lightboxImg');
 const counter=document.getElementById('lightboxCounter');
 const btnClose=document.getElementById('lightboxClose');
 const btnPrev=document.getElementById('lightboxPrev');
 const btnNext=document.getElementById('lightboxNext');

 let index=0;
 const items=()=>Array.from(grid.querySelectorAll('img'));

 function pad(n){return String(n).padStart(2,'0');}

 function render(){
  const imgs=items();
  stageImg.classList.remove('show');
  const src=imgs[index].dataset.full||imgs[index].src;
  const swap=new Image();
  swap.onload=()=>{ stageImg.src=src; requestAnimationFrame(()=>stageImg.classList.add('show')); };
  swap.src=src;
  counter.textContent=`${pad(index+1)} / ${pad(imgs.length)}`;
 }

 function open(i){
  index=i;
  lightbox.classList.add('open');
  requestAnimationFrame(()=>lightbox.classList.add('show'));
  lightbox.setAttribute('aria-hidden','false');
  document.body.style.overflow='hidden';
  render();
  btnClose.focus();
 }
 function close(){
  lightbox.classList.remove('show');
  lightbox.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
  setTimeout(()=>lightbox.classList.remove('open'),300);
 }
 function next(){
  const rtl=document.body.classList.contains('rtl');
  const len=items().length;
  index=rtl?(index-1+len)%len:(index+1)%len;
  render();
 }
 function prev(){
  const rtl=document.body.classList.contains('rtl');
  const len=items().length;
  index=rtl?(index+1)%len:(index-1+len)%len;
  render();
 }

 grid.addEventListener('click',(e)=>{
  const img=e.target.closest('img');
  if(!img) return;
  open(items().indexOf(img));
 });
 btnClose.addEventListener('click',close);
 btnNext.addEventListener('click',next);
 btnPrev.addEventListener('click',prev);
 lightbox.addEventListener('click',(e)=>{ if(e.target===lightbox) close(); });
 document.addEventListener('keydown',(e)=>{
  if(!lightbox.classList.contains('open')) return;
  if(e.key==='Escape') close();
  if(e.key==='ArrowRight') next();
  if(e.key==='ArrowLeft') prev();
 });

 let touchStartX=0, touchDeltaX=0;
 lightbox.addEventListener('touchstart',(e)=>{ touchStartX=e.touches[0].clientX; touchDeltaX=0; },{passive:true});
 lightbox.addEventListener('touchmove',(e)=>{ touchDeltaX=e.touches[0].clientX-touchStartX; },{passive:true});
 lightbox.addEventListener('touchend',()=>{ if(Math.abs(touchDeltaX)>40){ touchDeltaX<0?next():prev(); } });
}

document.addEventListener('DOMContentLoaded',initRoom);
