document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка для навигационных ссылок
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Обработка формы контактов
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Здесь можно добавить код для отправки формы
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            console.log('Форма отправлена:', data);
            
            // Очистка формы после отправки
            this.reset();
            
            // Показ сообщения об успешной отправке
            alert('Сообщение отправлено! Я свяжусь с вами в ближайшее время.');
        });
    }
    
    // Анимация при прокрутке
    function animateOnScroll() {
        const elements = document.querySelectorAll('.project-card, .about-inner, .contact-inner');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Установка начального состояния для анимации
    document.querySelectorAll('.project-card, .about-inner, .contact-inner').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(50px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    // Запуск анимации при загрузке и прокрутке
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);
});