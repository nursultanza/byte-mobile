// Получение элементов DOM
const yearsSelect = document.querySelector('.years');
const semestr2 = document.querySelector('.semestr2');
const tableRows = document.querySelectorAll('.iksweb tbody tr');

// Обработчик события изменения выбранного года
yearsSelect.addEventListener('change', () => {
  if (yearsSelect.value === '2023') {
    semestr2.style.display = 'block';
  } else {
    semestr2.style.display = 'none';
  }
});

// Обработчик события изменения выбранного семестра
semestr2.addEventListener('click', () => {
  for (let i = 0; i < tableRows.length; i++) {
    const tdElement = document.createElement('td');
    tdElement.textContent = '---';

    if (tableRows[i].children.length < 6) {
      tableRows[i].appendChild(tdElement.cloneNode(true));
    } else {
      tableRows[i].lastElementChild.textContent = '---';
    }
  }
});

// Обработчик события недели 15
const tableData = document.querySelectorAll('.iksweb tbody td');
tableData.forEach((td) => {
  if (td.parentNode.rowIndex === 15) {
    td.classList.add('highlighted');
  }
});
