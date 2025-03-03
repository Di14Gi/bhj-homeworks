document.addEventListener('DOMContentLoaded', function() {
    const rotators = document.querySelectorAll('.rotator');

    rotators.forEach(rotator => {
        const cases = rotator.querySelectorAll('.rotator__case');
        let currentIndex = 0;

        function rotateCases() {
            // Убираем активный класс у текущего элемента
            cases[currentIndex].classList.remove('rotator__case_active');
            
            // Переходим к следующему элементу
            currentIndex = (currentIndex + 1) % cases.length;
            
            // Добавляем активный класс новому элементу
            cases[currentIndex].classList.add('rotator__case_active');
        }

        // Запускаем ротацию каждую секунду
        setInterval(rotateCases, 1000);
    });
});