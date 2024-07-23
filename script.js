//SLIDER FUNCTION

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

//BUTTONS

const nextBtn = document.querySelector('.carousel_button.right_btn');
const prevBtn = document.querySelector('.carousel_button.left_btn');

//DOTS

const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotNav.children);

//SLIDE SIZE

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// MOVE SLIDES

const moveSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current_slide');
    targetSlide.classList.add('current_slide');
}

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current_slide');
    targetDot.classList.add('current_slide');
};

const hideArrows = (slides, prevBtn, nextBtn, targetIndex) => {
    if (targetIndex === 0) {
        prevBtn.classList.add('is_hidden');
        nextBtn.classList.remove('is_hidden');
    } else if (targetIndex === slides.length -1) {
        prevBtn.classList.remove('is_hidden');
        nextBtn.classList.add('is_hidden');
    } else {
        prevBtn.classList.remove('is_hidden');
        nextBtn.classList.remove('is_hidden');
    }
};

// CONTROL FUNCTIONS

nextBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotNav.querySelector('.current_slide');
    const nextDot = currentDot.nextElementSibling;
    const nextIndex = slides.findIndex(slide => slide === nextSlide)

    moveSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideArrows(slides, prevBtn, nextBtn, nextIndex);
});


prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current_slide');
    const nextDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide)

    moveSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, nextDot);
    hideArrows(slides, prevBtn, nextBtn, prevIndex);
});

dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotNav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideArrows(slides, prevBtn, nextBtn, targetIndex);
});