const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slideAmount = document.querySelectorAll('.testimonial__slide').length;
let nextShowSlide = 0;

prev.addEventListener('click', (e) => {
    document.getElementById(`slide-${nextShowSlide}`).classList.toggle('hidden')
    nextShowSlide = Math.abs((nextShowSlide - 1 ) % slideAmount);
    document.getElementById(`slide-${nextShowSlide}`).classList.toggle('hidden')
})

next.addEventListener('click', (e) => {
    document.getElementById(`slide-${nextShowSlide}`).classList.toggle('hidden')
    nextShowSlide = (nextShowSlide + 1 ) % slideAmount;
    document.getElementById(`slide-${nextShowSlide}`).classList.toggle('hidden')
})
