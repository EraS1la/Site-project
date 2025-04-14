const images = document.querySelectorAll('.slider-img'); 
const controlls = document.querySelectorAll('.controlls');
let imageIndex = 0;
let autoSlideInterval = 3000; // 3 секунды

function show(index) {
    images[imageIndex].classList.remove('active');
    images[index].classList.add('active');
    imageIndex = index;
}

// Обработка кликов по стрелкам
controlls.forEach((e) => {
    e.addEventListener('click', (event) => {
        if (event.target.classList.contains('left')) {
            let index = imageIndex - 1;
            if (index < 0) {
                index = images.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains('right')) {
            let index = imageIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    });
});

// Автоматический переход слайдов
setInterval(() => {
    let nextIndex = imageIndex + 1;
    if (nextIndex >= images.length) {
        nextIndex = 0;
    }
    show(nextIndex);
}, autoSlideInterval);

show(imageIndex);
