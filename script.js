/* ───── CAROUSEL ───── */
const slideTrack = document.querySelector('.carousel-slide');
const slideImgs  = document.querySelectorAll('.carousel-slide img');
let   slideIndex = 0;

function moveSlide(step = 1){
  slideIndex = (slideIndex + step + slideImgs.length) % slideImgs.length;
  const offset = -(slideIndex * (slideImgs[0].clientWidth + 16)); // 
  slideTrack.style.transform = `translateX(${offset}px)`;
}

/* ─── DÉFILEMENT AUTOMATIQUE ─── */
const autoDelay = 5000;           // 5 s 
let   autoPlay  = setInterval(moveSlide, autoDelay);


const carousel = document.querySelector('#carousel');
carousel.addEventListener('mouseenter', () => clearInterval(autoPlay));
carousel.addEventListener('mouseleave', () => autoPlay = setInterval(moveSlide, autoDelay));

/* ─── LIGHTBOX ─── */
const lightbox = document.getElementById('lightbox');
const lightImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');

slideImgs.forEach(img => {
  img.addEventListener('click', () => {
    lightImg.src = img.src;
    lightbox.classList.add('show');
  });
});

function closeLightbox(){ lightbox.classList.remove('show'); }
closeBtn.addEventListener('click', closeLightbox);
lightbox.addEventListener('click', e => { if(e.target === lightbox) closeLightbox(); });
