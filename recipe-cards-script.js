//SLIDER FUNCTION

const track = document.querySelector('.carousel_track');
const slides = Array.from(track.children);

//BUTTONS

const nextBtn = document.querySelector('.carousel_button.right_btn');
const prevBtn = document.querySelector('.carousel_button.left_btn');

//DOTS

const dotNav = document.querySelector('.carousel_nav');
const dots = Array.from(dotNav.children);

// Function to set slide positions
const setSlidePosition = () => {
    const slideWidth = slides[0].getBoundingClientRect().width;
    slides.forEach((slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    });
};

// Initialize slide positions
setSlidePosition();

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
    const nextIndex = slides.findIndex(slide => slide === nextSlide);

    moveSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    hideArrows(slides, prevBtn, nextBtn, nextIndex);
});

prevBtn.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current_slide');
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotNav.querySelector('.current_slide');
    const prevDot = currentDot.previousElementSibling;
    const prevIndex = slides.findIndex(slide => slide === prevSlide);

    moveSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    hideArrows(slides, prevBtn, nextBtn, prevIndex);
});

dotNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current_slide');
    const currentDot = dotNav.querySelector('.current_slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    hideArrows(slides, prevBtn, nextBtn, targetIndex);
});

/* SWIPE FUNCTION */

let startSwipe; 
let endSwipe;

track.addEventListener('touchstart', (e) => {
    startSwipe = e.touches[0].clientX;
});

track.addEventListener('touchend', (e) => {
    endSwipe = e.changedTouches[0].clientX;

    const swipeDistance = endSwipe - startSwipe;

    if (swipeDistance > 50) {
        const currentSlide = track.querySelector('.current_slide');
        const prevSlide = currentSlide.previousElementSibling;
        const currentDot = dotNav.querySelector('.current_slide');
        const prevDot = currentDot.previousElementSibling;
        const prevIndex = slides.findIndex(slide => slide === prevSlide);

        if (prevSlide) {
            moveSlide(track, currentSlide, prevSlide);
            updateDots(currentDot, prevDot);
            hideArrows(slides, prevBtn, nextBtn, prevIndex);
        }
    } else if (swipeDistance < -50) {
        const currentSlide = track.querySelector('.current_slide');
        const nextSlide = currentSlide.nextElementSibling;
        const currentDot = dotNav.querySelector('.current_slide');
        const nextDot = currentDot.nextElementSibling;
        const nextIndex = slides.findIndex(slide => slide === nextSlide);

        if (nextSlide) {
            moveSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);
            hideArrows(slides, prevBtn, nextBtn, nextIndex);
        }
    }
});

// Handle window resize
window.addEventListener('resize', () => {
    setSlidePosition();
    const currentSlide = track.querySelector('.current_slide');
    if (currentSlide) {
        moveSlide(track, currentSlide, currentSlide); // Reset position
    }
});
