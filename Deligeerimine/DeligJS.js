// Получаем родительский элемент таблицы
const table = document.getElementById('table');

// Переменная для хранения последней выделенной ячейки
let lastSelectedCell = null;

// Используем table.onclick для добавления обработчика события
table.onclick = function(event) {
    // Находим ближайшую ячейку (td), на которую кликнули
    let td = event.target.closest('td'); // (1)

    // Если клик не по ячейке, выходим из функции
    if (!td) return; // (2)

    // Проверяем, что ячейка находится в таблице
    if (!table.contains(td)) return; // (3)

    // Выделяем ячейку
    highlight(td); // (4)
};

// Функция для выделения ячейки
function highlight(td) {
    // Если была выделена предыдущая ячейка, сбрасываем её цвет
    if (lastSelectedCell) {
        lastSelectedCell.style.backgroundColor = ''; // возвращаем исходный цвет
        lastSelectedCell.style.color = '';
    }

    // Меняем цвет фона для текущей ячейки
    td.style.backgroundColor = "white";
    td.style.color  = "black";


    // Обновляем ссылку на последнюю выделенную ячейку
    lastSelectedCell = td;
}
