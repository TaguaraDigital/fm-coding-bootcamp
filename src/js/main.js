/* =============
   Slider code
==============*/
// const images = ['project1.jpg','project2.png','project3.png','project4.jpg','project5.jpg','project6.jpg'];
const slider  = document.getElementById('slider').children;
const imgShow = document.getElementById('slider');
const left    = document.getElementById('left');
const right   = document.getElementById('right');
let mouseOver = false;
let activeSlide = 0;
const zInd = [3,2,1,0];  // ==> los z-index de las imagenes en sentido inverso al orden en que seran presentadas

function modulo(x) {
   for (let i = 0; i < slider.length; i++) {
      zInd[i] = Math.abs((zInd[i] + x) % zInd.length);
      slider[i].style.zIndex = zInd[i];
      if(zInd[i] === zInd.length - 1 && !mouseOver){
         activeSlide = i;
         slider[activeSlide].classList.add('portfolio-slider__img--animate');
      } else{
         slider[i].classList.remove('portfolio-slider__img--animate');
      }
   }
}

imgShow.addEventListener('mouseover',()=>{mouseOver = true;});
imgShow.addEventListener('mouseout',()=>{
   slider[activeSlide].classList.add('portfolio-slider__img--animate');
   mouseOver = false;});

right.addEventListener('click',()=>{modulo(1);});
left.addEventListener('click',()=>{modulo(zInd.length-1);});

// para el pase automatico cuando el curso no esta sobre la imagen cada 5 segundos
setInterval(() => {
   if (!mouseOver) { //si el cursor no esta sobre la imagen
      modulo(1);
      slider[activeSlide].classList.add('portfolio-slider__img--animate');
      }
   },5000);

