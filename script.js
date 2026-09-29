const strings = {
  id:{navMenu:'Menu',navReviews:'Ulasan',navLocation:'Lokasi',order:'Pesan sekarang',eyebrow:'RASA TURKI DI BINTARO',heroTitle:'Nikmati cita rasa Turki bersama kami.',heroCopy:'Hidangan Turki untuk dinikmati di restoran atau dipesan dari rumah.',exploreMenu:'Lihat menu',orderWhatsApp:'Pesan via WhatsApp',imageNote:'Foto ilustrasi hidangan Turki',intro:'Selamat datang di Cappadocia Turkish Cuisine. Jelajahi menu kami, pesan hidangan favorit, lalu temukan kami di Bintaro.',menuKicker:'DARI DAPUR KAMI',menuTitle:'Menu untuk setiap selera.',menuCopy:'Ingin melihat pilihan hidangan? Buka menu PDF saat tersedia, atau tanyakan langsung kepada tim kami.',askMenu:'Minta menu via WhatsApp',openMenu:'Buka menu PDF',orderKicker:'PILIH CARA PESAN',orderTitle:'Mau makan di rumah?',orderCopy:'Pilih layanan yang paling nyaman untuk Anda.',waDetail:'Chat langsung dengan kami',deliveryDetail:'Pesan lewat aplikasi',reviewsKicker:'CERITA PENGUNJUNG',reviewsTitle:'Kata mereka tentang kami.',allReviews:'Lihat semua di Google Maps ↗',reviewsFallback:'Ulasan asli pelanggan tersedia di profil Google Maps kami.',readGoogle:'Baca ulasan di Google Maps ↗',photosTitle:'Foto dari Google Maps',viewPhotos:'Lihat foto di Google Maps ↗',photosFallback:'Lihat foto yang dibagikan pengunjung di Google Maps.',visitKicker:'KUNJUNGI KAMI',visitTitle:'Sampai jumpa di Bintaro.',visitCopy:'Cappadocia Turkish Cuisine, Bintaro, Tangerang Selatan.',directions:'Buka petunjuk arah',follow:'Ikuti kami',contact:'Hubungi kami',footerNote:'Dibuat untuk menikmati rasa Turki di Bintaro.'},
  tr:{navMenu:'Menü',navReviews:'Yorumlar',navLocation:'Konum',order:'Sipariş ver',eyebrow:'BİNTARO’DA TÜRK LEZZETLERİ',heroTitle:'Türk mutfağının tadını bizimle çıkarın.',heroCopy:'Restoranımızda keyifle yiyin veya evinize sipariş verin.',exploreMenu:'Menüyü gör',orderWhatsApp:'WhatsApp ile sipariş',imageNote:'Türk yemeklerini temsil eden görsel',intro:'Cappadocia Turkish Cuisine’e hoş geldiniz. Menümüzü inceleyin, sevdiğiniz yemekleri sipariş edin ve Bintaro’da bizi ziyaret edin.',menuKicker:'MUTFAĞIMIZDAN',menuTitle:'Her damak tadına uygun bir menü.',menuCopy:'Yemek seçeneklerine göz atmak ister misiniz? Hazır olduğunda PDF menüyü açın veya ekibimize sorun.',askMenu:'WhatsApp’tan menü iste',openMenu:'PDF menüyü aç',orderKicker:'SİPARİŞ SEÇENEKLERİ',orderTitle:'Evde yemek mi istersiniz?',orderCopy:'Size en uygun sipariş yolunu seçin.',waDetail:'Bizimle doğrudan yazışın',deliveryDetail:'Uygulamadan sipariş verin',reviewsKicker:'MİSAFİRLERİMİZ',reviewsTitle:'Misafirlerimiz ne diyor?',allReviews:'Google Maps’te tüm yorumlar ↗',reviewsFallback:'Gerçek müşteri yorumlarını Google Maps profilimizde okuyabilirsiniz.',readGoogle:'Google Maps yorumlarını oku ↗',photosTitle:'Google Maps fotoğrafları',viewPhotos:'Google Maps’te fotoğraflar ↗',photosFallback:'Ziyaretçilerin paylaştığı fotoğrafları Google Maps’te görün.',visitKicker:'BİZİ ZİYARET EDİN',visitTitle:'Bintaro’da görüşmek üzere.',visitCopy:'Cappadocia Turkish Cuisine, Bintaro, Güney Tangerang.',directions:'Yol tarifi al',follow:'Bizi takip edin',contact:'İletişim',footerNote:'Bintaro’da Türk lezzetleri.'},
  en:{navMenu:'Menu',navReviews:'Reviews',navLocation:'Location',order:'Order now',eyebrow:'TURKISH FLAVOURS IN BINTARO',heroTitle:'Enjoy a taste of Türkiye with us.',heroCopy:'Dine at our restaurant or order your favourites to enjoy at home.',exploreMenu:'View menu',orderWhatsApp:'Order on WhatsApp',imageNote:'Illustrative Turkish food photo',intro:'Welcome to Cappadocia Turkish Cuisine. Explore our menu, order your favourites, and visit us in Bintaro.',menuKicker:'FROM OUR KITCHEN',menuTitle:'A menu for every appetite.',menuCopy:'Looking for something delicious? Open the PDF menu when available, or ask our team directly.',askMenu:'Ask for the menu',openMenu:'Open PDF menu',orderKicker:'HOW TO ORDER',orderTitle:'Dining at home?',orderCopy:'Choose the ordering option that suits you.',waDetail:'Chat directly with us',deliveryDetail:'Order in the app',reviewsKicker:'GUEST STORIES',reviewsTitle:'What our guests say.',allReviews:'All reviews on Google Maps ↗',reviewsFallback:'Read genuine guest reviews on our Google Maps profile.',readGoogle:'Read Google Maps reviews ↗',photosTitle:'Photos from Google Maps',viewPhotos:'View photos on Google Maps ↗',photosFallback:'See photos shared by visitors on Google Maps.',visitKicker:'VISIT US',visitTitle:'See you in Bintaro.',visitCopy:'Cappadocia Turkish Cuisine, Bintaro, South Tangerang.',directions:'Get directions',follow:'Follow us',contact:'Contact',footerNote:'A taste of Türkiye in Bintaro.'},
  ar:{navMenu:'القائمة',navReviews:'التقييمات',navLocation:'الموقع',order:'اطلب الآن',eyebrow:'نكهات تركية في بينتارو',heroTitle:'استمتع بمذاق المطبخ التركي معنا.',heroCopy:'تناول الطعام في مطعمنا أو اطلب أطباقك المفضلة إلى المنزل.',exploreMenu:'شاهد القائمة',orderWhatsApp:'اطلب عبر واتساب',imageNote:'صورة توضيحية لأطباق تركية',intro:'أهلاً بك في Cappadocia Turkish Cuisine. تصفّح قائمتنا، واطلب أطباقك المفضلة، وزرنا في بينتارو.',menuKicker:'من مطبخنا',menuTitle:'قائمة تناسب كل الأذواق.',menuCopy:'تعرّف على الأطباق من ملف القائمة عند توفره، أو اسأل فريقنا مباشرة.',askMenu:'اطلب القائمة عبر واتساب',openMenu:'افتح القائمة PDF',orderKicker:'طرق الطلب',orderTitle:'تفضّل الطعام في المنزل؟',orderCopy:'اختر طريقة الطلب المناسبة لك.',waDetail:'تحدّث معنا مباشرة',deliveryDetail:'اطلب عبر التطبيق',reviewsKicker:'آراء زوارنا',reviewsTitle:'ماذا يقول ضيوفنا؟',allReviews:'كل التقييمات على خرائط Google ↗',reviewsFallback:'اطّلع على تقييمات العملاء الحقيقية في ملفنا على خرائط Google.',readGoogle:'اقرأ تقييمات Google ↗',photosTitle:'صور من خرائط Google',viewPhotos:'شاهد الصور على خرائط Google ↗',photosFallback:'شاهد الصور التي شاركها الزوار على خرائط Google.',visitKicker:'زرنا',visitTitle:'نراك في بينتارو.',visitCopy:'Cappadocia Turkish Cuisine، بينتارو، تانغيرانغ الجنوبية.',directions:'الاتجاهات',follow:'تابعنا',contact:'تواصل معنا',footerNote:'مذاق تركيا في بينتارو.'}
};
const language = document.getElementById('language');
const menuLink = document.getElementById('menu-link');
let menuAvailable = false;
function setLanguage(lang){
  if(!strings[lang]) lang='id';
  document.documentElement.lang=lang;
  document.documentElement.dir=lang==='ar'?'rtl':'ltr';
  language.value=lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{el.textContent=strings[lang][el.dataset.i18n]||''});
  if(menuAvailable) menuLink.textContent=strings[lang].openMenu;
  try{localStorage.setItem('cappadocia-language',lang)}catch(e){}
}
let saved;try{saved=localStorage.getItem('cappadocia-language')}catch(e){}
const browserLang=(navigator.languages||[navigator.language||'id']).map(l=>l.toLowerCase().split('-')[0]).find(l=>strings[l]);
setLanguage(strings[saved]?saved:(browserLang||'id'));
language.addEventListener('change',e=>setLanguage(e.target.value));
document.getElementById('year').textContent=new Date().getFullYear();
fetch('menu/menu.pdf',{method:'HEAD'}).then(r=>{if(!r.ok||!r.headers.get('content-type')?.includes('pdf'))return;menuAvailable=true;menuLink.href='menu/menu.pdf';menuLink.target='_blank';menuLink.textContent=strings[language.value].openMenu}).catch(()=>{});

// Optional official Places integration; default links remain useful if it is not configured.
async function loadGoogleContent(){
  const config=window.CAPPADOCIA_CONFIG||{};
  if(!config.googleMapsApiKey||!config.googlePlaceId)return;
  const script=document.createElement('script');
  script.src=`https://maps.googleapis.com/maps/api/js?key=${encodeURIComponent(config.googleMapsApiKey)}&libraries=places&v=weekly&language=${language.value}`;
  script.async=true;
  script.onload=async()=>{
    try{
      const {Place}=await google.maps.importLibrary('places');
      const place=new Place({id:config.googlePlaceId});
      await place.fetchFields({fields:['displayName','reviews','photos','googleMapsLinks']});
      const reviews=place.reviews||[];
      if(reviews.length){
        const list=document.getElementById('reviews-list');list.replaceChildren();
        reviews.slice(0,3).forEach(review=>{
          const card=document.createElement('article');card.className='review-card';
          const stars=document.createElement('div');stars.className='stars';stars.setAttribute('aria-label',`${review.rating||0} / 5`);stars.textContent='★'.repeat(Math.max(0,Math.min(5,Math.round(review.rating||0))));
          const quote=document.createElement('blockquote');quote.textContent=review.text||review.originalText||'';
          const cite=document.createElement('cite');const author=document.createElement('a');author.textContent=review.authorAttribution?.displayName||'Google Maps';author.href=review.googleMapsURI||review.authorAttribution?.uri||'https://maps.app.goo.gl/CweCoCkhjmo6HPWm7';author.target='_blank';author.rel='noopener noreferrer';cite.append(author);
          card.append(stars,quote,cite);list.append(card);
        });
      }
      const photos=(place.photos||[]).slice(0,4);
      if(photos.length){
        const gallery=document.getElementById('photos-list');gallery.className='photos-grid';gallery.replaceChildren();
        photos.forEach(photo=>{
          const fig=document.createElement('figure');fig.className='photo-card';const link=document.createElement('a');link.href=photo.googleMapsURI||'https://maps.app.goo.gl/CweCoCkhjmo6HPWm7';link.target='_blank';link.rel='noopener noreferrer';const img=document.createElement('img');img.src=photo.getURI({maxWidth:600});img.loading='lazy';img.alt='Cappadocia Turkish Cuisine — Google Maps';link.append(img);fig.append(link);
          if(photo.authorAttributions?.length){const caption=document.createElement('figcaption');caption.append('Foto: ');photo.authorAttributions.forEach((a,i)=>{if(i)caption.append(', ');const credit=document.createElement('a');credit.textContent=a.displayName;credit.href=a.uri||link.href;credit.target='_blank';credit.rel='noopener noreferrer';caption.append(credit)});fig.append(caption)}
          gallery.append(fig);
        });
      }
      if(reviews.length||photos.length)document.getElementById('google-attribution').hidden=false;
      if(place.googleMapsLinks?.reviewsURI)document.querySelectorAll('a[href="https://maps.app.goo.gl/CweCoCkhjmo6HPWm7"]').forEach(a=>{if(a.closest('#reviews-list')||a.closest('.section-heading'))a.href=place.googleMapsLinks.reviewsURI});
    }catch(err){console.warn('Google Places content unavailable:',err)}
  };
  script.onerror=()=>console.warn('Google Maps JavaScript API unavailable');
  document.head.append(script);
}
loadGoogleContent();
