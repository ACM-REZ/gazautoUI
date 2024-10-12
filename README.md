# gazautoUI

gazautoUI — это простая библиотека пользовательского интерфейса, написанная для чистого JavaScript (ES6) с использованием TypeScript и SCSS.

## Установка зависимостей

1. Клонируйте репозиторий:

   ```bash
   git clone <URL_вашего_репозитория>
   cd my-ui-library

   ```

2. Установите зависимости:
   ```bash
   npm install
   ```
3. Получение билда:
   ```bash
   npm run build
   ```

## Пример использования

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Test</title>
    <link rel="stylesheet" href="dist/styles.css" />
  </head>
  <body>
    <script src="dist/bundle.js"></script>
    <script>
      const btn = gazautoUI.Button({
        label: "Click Me",
        onClick: () => alert("Button clicked!"),
        style: { backgroundColor: "blue", color: "white" },
      });
      document.body.appendChild(btn);

      const input = gazautoUI.Input({
        placeholder: "Enter text",
        type: "text",
        onChange: () => console.log(input.value),
      });
      document.body.appendChild(input);
    </script>
  </body>
</html>
```

## Компоненты

### Button (кнопка)

| Свойство  | Описание                 |
| --------- | ------------------------ |
| `label`   | Текст на кнопке          |
| `onClick` | Обработчик события клика |
| `style`   | Стили для кнопки         |

### Input(инпут)

| Свойство      | Описание                              |
| ------------- | ------------------------------------- |
| `placeholder` | Подсказка для пользователя            |
| `type`        | Тип инпута (например, text, password) |
| `value`       | Текущее значение инпута               |
| `onChange`    | Обработчик события изменения          |
