# T1-Api-Task (HTML/CSS/JS/React)

Этот проект инициализирован с использованием Vite, с выбранными React и JavaScript для разработки. В данном ```README``` описаны скрипты для запуска проекта в режиме разработчика и для сборки проекта, а также структура проекта, основанная на featured-slice-design.

## Скрипты

### Запуск в режиме разработчика

Для запуска проекта в режиме разработчика используйте следующий скрипт:

```npm run dev```

## Сборка проекта
Для создания билда проекта используйте следующий скрипт:

```npm run build```

## Линт проекта
Для линта проекта используйте следующий скрипт:

```npm run lint:fix```

##  Структура проекта
Проект организован по принципу ```featured-slice-design``` и включает следующие основные папки и файлы:

##### 1. app
В папке app находятся основные файлы приложения:
App.jsx: Главный компонент приложения.
fonts: Папка для шрифтов.
routes: Маршруты приложения.
styles: Стили, включая цвета для темы (theme).

##### 2. features
В папке features находятся:
```api```: Запросы к API.
```hooks```: Пользовательские хуки.
```methods```: Методы и их значения.
##### 3. pages
Папка ```pages``` изначально задумывалась как содержащая страницы home и method, но методы оказались слишком разными.

##### 4. shared
В папке ```shared``` должны были быть маленькие элементы UI, но в итоге здесь находятся полноценные методы, которые мы вызываем.

##### 5. widgets
В папке ```widgets``` находится Header как большой компонент, здесь мог бы быть footer, но он бесполезен в данном проекте.

## Установленные библиотеки
Проект использует следующие библиотеки:

```react-router-dom``` (планировал динамический роутинг между методами)
```axios```

## О разработке

Также в определенных местах использовал ```БЭМ```, обычно пользуюсь ```SCSS```.

Много где можно увидеть ```index.js``` для импорта, привычка со старых проектов где много ```ts``` компонентов/сущностей.

Активно пользуюсь ```ChatGPT```, так как ему можно доверить писать простой код. 

Для разработки использовал *VS Code* + *powershell* терминал, иногда открываю *git bash* ~~из-за того, что он цветастый~~.

##### Спасибо, что просмотрели мой ответ на это задание :)
*Почта для связи, если появились вопросы: risunyaaa@yandex.ru*

*Или telegram: @risunya*
