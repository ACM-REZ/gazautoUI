# gazautoUI

gazautoUI — это простая библиотека пользовательского интерфейса, написанная на чистом JavaScript (ES6) с использованием TypeScript и SCSS.

## Установка зависимостей

1. Клонируйте репозиторий:
   ```bash
   git clone <URL_вашего_репозитория>
   cd my-ui-library


2. Установите зависимости:
   ```bash
   npm install
3. Получение билда:
   ```bash
   npm run build

Пример использования

 ```
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>My UI Library Example</title>
      <link rel="stylesheet" href="dist/styles.css"> <!-- Подключение стилей -->
  </head>
  <body>
      <script src="dist/bundle.js"></script>
      <script>
          // Определите свою функцию-обработчик клика
          function myClickHandler() {
              console.log('Кнопка была нажата! Выполняется пользовательская функция.');
              alert('Кнопка была нажата!');
          }
  
          // Создайте кнопку и передайте функцию-обработчик
          const button = new MyUILibrary.Button('Нажми меня', myClickHandler);
          document.body.appendChild(button.render());
      </script>
  </body>
  </html>
  ```


