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
document.addEventListener('DOMContentLoaded', function() {
    const hobbyItems = document.querySelectorAll('.hobby-item');

    hobbyItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.05)'; // Немного увеличим картинку при наведении
        });

        item.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)'; // Вернём первоначальные размеры
        });
    });
});