document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    
    fetch('news.txt')
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка загрузки файлов (${response.status})`);
            return response.text();
        })
        .then(textData => {
            const lines = textData.split('\n').filter(line => line.trim() !== '');
            
            lines.forEach(line => {
                const parts = line.split('|');
                const title = parts[0];
                const content = parts.length > 1 ? parts[1] : '';
                
                const article = document.createElement('article');
                article.innerHTML = `
                    <h3>${title}</h3>
                    <p>${content}</p>
                `;
                newsContainer.appendChild(article);
            });
        })
        .catch(error => {
            console.error("Ошибка загрузки новостей:", error.message);
            alert("Возникли трудности с загрузкой новостей.");
        });
});
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