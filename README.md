# JavaScript DOM & Events

---

## 1. `getElementById` vs `getElementsByClassName` vs `querySelector` / `querySelectorAll`

- **`getElementById`** — selects a single element by its ID.
- **`getElementsByClassName`** — selects all elements with a given class, returns a live HTMLCollection.
- **`querySelector`** — selects the **first** element matching any CSS selector.
- **`querySelectorAll`** — selects **all** elements matching a CSS selector, returns a static NodeList.

---

## 2. Creating and Inserting a New Element

```js
const el = document.createElement('div');
el.textContent = 'Hello!';
document.getElementById('container').appendChild(el);
```

Create the element → set its content → append it to a parent.

---

## 3. Event Bubbling

When an event fires on an element, it **bubbles upward** through its parent elements all the way to the `window`. So clicking a `<button>` inside a `<div>` will trigger click listeners on both.

---

## 4. Event Delegation

Instead of adding listeners to every child element, you add **one listener to the parent** and check which child was clicked. It's more efficient and works for dynamically added elements.

```js
document.getElementById('list').addEventListener('click', (e) => {
  if (e.target.matches('.item')) {
    console.log('Item clicked:', e.target.textContent);
  }
});
```

---

## 5. `preventDefault()` vs `stopPropagation()`

- **`preventDefault()`** — stops the browser's default behavior (e.g. form submit, link navigation), but the event still bubbles.
- **`stopPropagation()`** — stops the event from bubbling up to parent elements, but default behavior still happens.
