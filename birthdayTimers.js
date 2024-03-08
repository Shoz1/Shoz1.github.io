// Функция для обновления таймера дня рождения
function updateBirthdayTimer(targetDate, elementId) {
  const currentDate = new Date();
  let targetYear = currentDate.getFullYear();
  
  if (currentDate.getMonth() > targetDate.getMonth() || 
      (currentDate.getMonth() === targetDate.getMonth() && currentDate.getDate() > targetDate.getDate())) {
    targetYear++;
  }

  const targetDateThisYear = new Date(targetYear, targetDate.getMonth(), targetDate.getDate());
  const timeDiff = targetDateThisYear.getTime() - currentDate.getTime();

  const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById(elementId).innerHTML = `${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

// Обновляем таймеры дней рождений каждую секунду
setInterval(() => {
  updateBirthdayTimer(new Date(2022, 9, 31), 'birthday1');
  updateBirthdayTimer(new Date(2023, 2, 1), 'birthday2');
}, 1000);

// Инициализируем таймеры дней рождений сразу после загрузки страницы
updateBirthdayTimer(new Date(2022, 9, 31), 'birthday1');
updateBirthdayTimer(new Date(2023, 2, 1), 'birthday2');
