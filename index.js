const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

/* Напиши скрипт, который после нажатия кнопки Start, раз в секунду меняет цвет
фона body на случайное значение из массива используя инлайн - стиль.При нажатии на кнопку Stop,
    изменение цвета фона должно останавливаться.

warning Учти, на кнопку Start можно нажать бесконечное количество раз.Сделай так, чтобы пока
изменение темы запушено, кнопка Start была не активна.

Для генерации случайного числа(индекс элемента массива цветов), используй функцию randomIntegerFromInterval.
 */

const refs = {
  openBtn: document.querySelector(`button[data-action="start"]`),
  closeBtn: document.querySelector(`button[data-action="stop"]`),
  body: document.querySelector(`body`),
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const setRandomColor = () => {
  const _color = colors[randomIntegerFromInterval(0, colors.length - 1)];
  console.log(_color);
  document.body.style.backgroundColor = _color;
};

let intervalId = undefined;

refs.openBtn.addEventListener(
  "click",
  (e) => (
    (intervalId = setInterval(() => setRandomColor(), 1000)),
    refs.openBtn.setAttribute("disabled", true)
  )
);

refs.closeBtn.addEventListener(
  "click",
  (e) => (clearInterval(intervalId), refs.openBtn.removeAttribute("disabled"))
);
