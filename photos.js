document.addEventListener('DOMContentLoaded', function() {
    // Выбор всех элементов навигации
    const navLinks = document.querySelectorAll('nav ul li a');

    // Последовательно применяем анимацию для каждого элемента
    navLinks.forEach((link, index) => {
        setTimeout(() => {
            link.style.opacity = '1';
            link.style.transform = 'translateX(0)';
        }, index * 150); // Задержка между элементами ~150 мс
    });

    // Эффект при наведении мыши
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.color = '#FF5733'; // Яркий оранжевый оттенок
            this.style.transform = 'scale(1.1)'; // Увеличение масштаба
        });

        link.addEventListener('mouseleave', function() {
            this.style.color = ''; // Возвращаемся к цвету по умолчанию
            this.style.transform = ''; // Восстанавливаем первоначальный масштаб
        });
    });
});
let slideIndex = 1;
showSlides(slideIndex);

// Функциональность при нажатии на стрелочки
function changeSlide(n) {
    showSlides(slideIndex += n);
}

// Переход на определённую фотографию
function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Главный обработчик показа слайдов
function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {slideIndex = 1};
    if (n < 1) {slideIndex = slides.length};

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// Автоматическое перемещение каждые 5 секунд
setInterval(function(){
    changeSlide(1);
}, 5000);