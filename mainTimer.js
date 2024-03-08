// Указываем дату 8 сентября 2022 года
const startDate = new Date('2022-09-08T10:00:00Z');

// Функция для обновления таймера
function updateTimer() {
  const currentDate = new Date();
  const timeDiff = currentDate - startDate;

  const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365));
  const days = Math.floor((timeDiff % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById('timer').innerHTML = `${years} год(а), ${days} дней, ${hours} часов, ${minutes} минут, ${seconds} секунд`;
}

// Обновляем таймер каждую секунду
setInterval(updateTimer, 1000);

// Инициализируем таймер сразу после загрузки страницы
updateTimer();
