# Проектная работа: Портирование [проекта mesto](https://github.com/DenisKozhevnikov/mesto) на React

## Описание проекта
10 и 11 Проектная работа в рамках курса "Интерфейсы с использованием React" на Яндекс.Практикум. Получает данные с сервера, позволяет редактировать профиль, добавлят/удалять элементы в галерее. Адаптирован для разрешений от 320 до 1280 и более пикселей по ширине.

### Функционал проекта
* Получение данных профиля и галереии с сервера
* Редактирование профиля(имя, аватар, о себе) через форму на сервере и обновление данных на странице
* Добавление карточки с изображением и описанием через форму на сервер и отображение её в галерее
* Удаление информации о карточке с сервера и в галерее
* Открытие и закрытие модального окна для обновления аватара, редактирования профиля, добавления карточки, увеличения изображения
* Установка и удаление лайка 

### Используемые технологии и инструменты
* ##### [Create React App](https://github.com/facebook/create-react-app)
    * Конфигурация и сборка проекта 
* ##### [React.js](https://ru.reactjs.org/)
    * Функциональные компоненты
    * Декларативный подход
    * JSX
    * Применяются технологии Context, Ref
    * Применены хуки useState, useEffect, useContext, useRef, useCallback
* ##### HTML5
    * Соблюдение сематники
    * Template для шаблона
* ##### CSS3
    * Flexbox
    * Grid
    * Анимация при открытии попапа
    * normalize.css
* ##### JavaScript (ES6)
    * REST API, Fetch, Promise, JSON для работы с серверным API
      * Авторизация, получение, обработка и отправка данных
    * Модули
* ##### NPM
    * Инициализация проекта
    * Установка библиотек
* ##### [БЭМ](https://ru.bem.info/)
    * Для HTML-элементов, стилей и файловой структуры

### Ссылка на gh-pages
* [сайт на gh-pages](https://deniskozhevnikov.github.io/mesto-react/build/index.html)

### Ссылка на макет
* [Макет в Figma](https://www.figma.com/file/StZjf8HnoeLdiXS7dYrLAh/JavaScript.-Sprint-4)

### Сайт где могут быть взяты картинки
* [unsplash.com](https://unsplash.com/)

### Сайт для оптимизации картинок
* [tinypng.com](https://tinypng.com/)

#### В проект будут добавлены
* Индикаторы обработки запросов(лоадеры)
* Валидация текстовых полей формы при открытии и вводе данных
* Закрытие модальных окон по клику на оверлей
* Закрытие модальных окон по нажатию на Esc
* Всплывающие уведомления для удаления карточек
