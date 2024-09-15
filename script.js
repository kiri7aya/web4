
let currentPosition = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const imageFrameWidth = document.querySelector('.image-frame').clientWidth;
const imageMargin = 20; // Adjust for margin (10px on each side)
const visibleImagesCount = 3; // We only want to show 3 images at a time
const maxPosition = totalImages - visibleImagesCount; // The maximum number of shifts allowed

// Set the width of the entire image container based on the number of images
document.querySelector('.carousel-images').style.width = `${(imageFrameWidth + imageMargin * 2) * totalImages}px`;

function moveCarousel(direction) {
    // Prevent moving past the last image or before the first image
    if (direction === -1 && currentPosition > 0) {
        currentPosition--;
    } else if (direction === 1 && currentPosition < maxPosition) {
        currentPosition++;
    } else {
        return; // If no movement is possible, just return
    }

    // Move the carousel by adjusting the translateX value
    const offset = -(imageFrameWidth + imageMargin * 2) * currentPosition;
    document.querySelector('.carousel-images').style.transform = `translateX(${offset}px)`;
}
