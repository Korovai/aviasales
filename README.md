# Aviasales

Идея проекта — это прокачать навыки работы со списками билетов, фильтрацией и сортировкой, используя React. Образовательный проект [Хекслет](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=ru-test-assignments) предоставляет небольшой сервер для тестового задания, который реализует технику long polling для передачи пачек билетов. В проекте реализовывается клиент, который получает случайно сгенерированные билеты от сервера и отрисовывает интерфейс согласно макету в Figma.

## Условия

- Использовать React.
- Использовать JavaScript.
- Работоспособность в актуальной версии Google Chrome.

## Документация по работе с сервером

Схема работы проста: сначала необходимо инициировать поиск на сервере и получить идентификатор поиска (`searchId`). Далее, с полученным `searchId`, выполняются запросы для получения неотсортированных списков билетов. Билеты прилетают пачками, которые необходимо агрегировать, фильтровать и сортировать согласно выбранным в интерфейсе параметрам. Для усложнения задачи, сервер может на один из запросов ответить ошибкой.

### Получение `searchId`

Для получения `searchId` отправляются GET-запрос на `https://front-test.beta.aviasales.ru/search`.

Пример:

Request: `https://front-test.beta.aviasales.ru/search`

Response: `{"searchId":"4niyd"}`

### Получение пачки билетов

Отправляются GET-запросы на `https://front-test.beta.aviasales.ru/tickets` и передаем searchId полученный из запроса выше GET-параметром.

Пример:

Request: `https://front-test.beta.aviasales.ru/tickets?searchId=4niyd`

Response: `{tickets: [], stop: false}`

### Обработка завершения поиска

Поиск считается завершенным, когда в очередном ответе от сервера придёт значение `{stop: true}`.

Пример:

Request: `https://front-test.beta.aviasales.ru/tickets?searchId=4niyd`

Response: `{tickets: [], stop: true}`

### Структура билета

В списке `tickets` будут лежать билеты следующей структуры:

```typescript
interface Ticket {
  // Цена в рублях
  price: number
  // Код авиакомпании (iata)
  carrier: string
  // Массив перелётов.
  // В тестовом задании это всегда поиск "туда-обратно" значит состоит из двух элементов
  segments: [
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета туда
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    },
    {
      // Код города (iata)
      origin: string
      // Код города (iata)
      destination: string
      // Дата и время вылета обратно
      date: string
      // Массив кодов (iata) городов с пересадками
      stops: string[]
      // Общее время перелёта в минутах
      duration: number
    }
  ]
}
```

## Макет

https://www.figma.com/file/4fQe1lEbo4DARjvNtaU0uJ/Aviasales-test-task

##

Условия данного задания взяты с [репозитория](https://github.com/Hexlet/ru-test-assignments) созданного и поддерживаемого командой и сообществом образовательного проекта [Хекслет](https://ru.hexlet.io/pages/about?utm_source=github&utm_medium=link&utm_campaign=ru-test-assignments). 
