/* ───── CAROUSEL (défilement) ───── */
const slideTrack   = document.querySelector('.carousel-slide');
const slideImgs    = document.querySelectorAll('.carousel-slide img');
let   slideIndex   = 0;

function moveSlide(step){
  slideIndex = (slideIndex + step + slideImgs.length) % slideImgs.length;
  const offset = -(slideIndex * (slideImgs[0].clientWidth + 16)); // 16 px = gap 1 rem
  slideTrack.style.transform = `translateX(${offset}px)`;
}

/* ───── LIGHTBOX (agrandir) ───── */
const lightbox   = document.getElementById('lightbox');
const lightImg   = lightbox.querySelector('img');
const closeBtn   = lightbox.querySelector('.close');

slideImgs.forEach(img=>{
  img.addEventListener('click',()=>{
    lightImg.src = img.src;
    lightbox.classList.add('show');
  });
});

function closeLightbox(){ lightbox.classList.remove('show'); }

closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e=>{
  if(e.target === lightbox) closeLightbox();    
});

/* défilement automatique :
   setInterval(()=>moveSlide(1), 5000);
*/
