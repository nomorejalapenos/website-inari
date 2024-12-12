# window.globalStore

### 1. **Зоны доставки (`delivery`)**

Отвечает за управление зонами доставки и выбор зоны пользователем.

- **Методы:**
  - `addZone(parameters: DeliveryZone)` - добавляет новую зону доставки, если она ещё не существует.
  - `removeZone(name: string)` - удаляет зону доставки по имени.
  - `findZone(name: string)` - ищет зону доставки по имени.
  - `setUserZone(name?: string | null)` - устанавливает текущую зону доставки пользователя.
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения зоны пользователя.
- **Геттеры:**
  - `allZones` - возвращает список всех зон доставки.
  - `userZone` - возвращает текущую зону доставки пользователя.

---

### 2. **Адрес пользователя (`address`)**

Отслеживает адрес пользователя.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения адреса.
- **Геттеры/сеттеры:**
  - `value` - текущий адрес пользователя.

---

### 3. **Тип заказа (`orderType`)**

Управляет типом заказа: доставка или самовывоз.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения типа заказа.
- **Геттеры/сеттеры:**
  - `value` - текущий тип заказа.

---

### 4. **Количество товаров (`productsNumber`)**

Отслеживает общее количество товаров в корзине.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения количества товаров.
- **Геттеры/сеттеры:**
  - `value` - текущее количество товаров.

---

### 5. **Этап заказа (`orderStep`)**

Управляет текущим этапом оформления заказа: корзина, оформление или завершение.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения этапа.
- **Геттеры/сеттеры:**
  - `value` - текущий этап оформления.

---

### 6. **Промокод (`promocode`)**

Отслеживает применённый промокод и его скидку.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения промокода.
- **Геттеры/сеттеры:**
  - `value` - текущий промокод.

---

### 7. **Цена доставки (`deliveryPrice`)**

Отслеживает стоимость доставки.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения цены доставки.
- **Геттеры/сеттеры:**
  - `value` - текущая цена доставки.

---

### 8. **Стоимость товаров (`productsPrice`)**

Отслеживает общую стоимость товаров в корзине.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения стоимости товаров.
- **Геттеры/сеттеры:**
  - `value` - текущая стоимость товаров.

---

### 9. **Итоговая стоимость (`finalPrice`)**

Отслеживает общую стоимость заказа, включая доставку и скидки.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения итоговой стоимости.
- **Геттеры/сеттеры:**
  - `value` - текущая итоговая стоимость.

---

### 10. **Общий счётчик (`all`)**

Объединяет все подписки и предоставляет возможность отслеживать изменения в любом из хранилищ.

- **Методы:**
  - `subscribe` / `unsubscribe` - подписка/отписка на изменения в любых хранилищах.

---

## Возвращаемый объект `globalStore`

`globalStore` содержит все описанные выше сущности и методы управления:

```typescript
window.globalStore = {
  delivery,
  address,
  orderType,
  productsNumber,
  orderStep,
  promocode,
  deliveryPrice,
  productsPrice,
  finalPrice,
  all,
}
```

## Использование

Пример использования `globalStore`:

```ts
// Подписка на изменения зоны доставки
globalStore.delivery.subscribe((zone) => {
  console.log('Текущая зона доставки:', zone)
})

// Установка зоны доставки
globalStore.delivery.setUserZone('Zone1')

// Получение итоговой стоимости
console.log('Итоговая стоимость заказа:', globalStore.finalPrice.value)
```