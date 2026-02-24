1.What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementByid--- Select a single element by it's id (name). It's fast, return one element or null.
getElementByClassname--- Select all elements with a given class and return live html collection.
querySelector--- this one select the first element which one match any Css Selector.
querySelectorAll--- this one select all matching element on Css selector
(it's more likely Static vs Live result).

2.How do you create and insert a new element into the DOM?

const div = document.createElement('div');
div.textContent = 'Meow'
document.body.appendChild(div);

3.What is Event Bubbling? And how does it work?

when an events fires on an element it bubbles upward all the way to the window. so clicking a button on a div will trigger click listeners on both.

4.What is Event Delegation in JavaScript? 

Event Delegation means attaching a single event listener to a parent instead of each child.
*** Why is it useful?
it's use less memory. cleaner code, Dynamic Element etc.

5.What is the difference between preventDefault() and stopPropagation() methods?

preventDefault()---  stops the default browser behavior of an element, but the event still bubbles up.
stopPropagation()---  stops the event from bubbling up the DOM, but the default behavior still happens.

