    function setupSlider(sliderId) {
    const slides = document.querySelectorAll(`#${sliderId} input[type="radio"]`);
    let currentIndex = 0;

    function changeSlide() {
        slides[currentIndex].checked = false;
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].checked = true;
    }

    setInterval(changeSlide, 3500);
}

setupSlider('slider1');
setupSlider('slider2');
setupSlider('slider3');