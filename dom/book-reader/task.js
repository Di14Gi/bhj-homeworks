document.addEventListener('DOMContentLoaded', function() {
    const bookElement = document.getElementById('book');
    const fontSizeControls = document.querySelectorAll('.font-size');

    fontSizeControls.forEach(control => {
        control.addEventListener('click', function(event) {
            event.preventDefault();

            // Удаляем класс font-size_active у всех элементов
            fontSizeControls.forEach(c => c.classList.remove('font-size_active'));

            // Добавляем класс font-size_active текущему элементу
            this.classList.add('font-size_active');

            // Удаляем все классы размера шрифта у элемента book
            bookElement.classList.remove('book_fs-small', 'book_fs-big');

            // Добавляем соответствующий класс в зависимости от data-size
            const size = this.getAttribute('data-size');
            if (size === 'small') {
                bookElement.classList.add('book_fs-small');
            } else if (size === 'big') {
                bookElement.classList.add('book_fs-big');
            }
        });
    });
});