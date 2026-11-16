# 📝 My To-Do List

A simple interactive web application – a to-do list built with **HTML, CSS and JavaScript**. This project was created as a school assignment with the goal of learning the basics of JavaScript and how it is used to build interactive websites.

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow)
![HTML5](https://img.shields.io/badge/HTML5-orange)
![CSS3](https://img.shields.io/badge/CSS3-blue)

## ✨ Features

- ➕ **Adding tasks** – click the "Add" button or press **Enter**
- ✅ **Marking tasks as done** – checking the checkbox strikes the task through
- 🗑️ **Deleting tasks** – each task can be removed individually
- 🔢 **Task counter** – the app continuously shows the number of open tasks
- ⚠️ **Input validation** – an empty input displays an error message
- 📱 **Responsive design** – works on mobile devices too

## 🛠️ Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML | Page structure |
| CSS | Styling, layout and animations |
| JavaScript | App logic, DOM manipulation and events |

## 🚀 Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/PRIEZVISKO/REPOZITAR.git
   ```
2. Open `index.html` in your web browser.

That's it – the app runs entirely in the browser, no server or installation required.

> Alternatively, you can run the project with a local server, e.g. the **Live Server** extension in VS Code.

## 📁 Project Structure

```
├── index.html   # page structure
├── style.css    # styling
└── script.js    # app logic (JavaScript)
```

## 💡 How It Works

The app is built on the **DOM (Document Object Model)** and **events**:

- The user types a task and clicks "Add" → the `click` event calls the `pridajUlohu()` function
- The function validates the input (an `if` condition), creates new elements with `document.createElement()` and appends them to the list
- Checking the checkbox triggers the `change` event, which toggles the CSS class `hotovo` – the task gets struck through
- The "Delete" button removes the element from the DOM using `remove()`
- The `aktualizujPocitadlo()` function recalculates open tasks using `querySelectorAll()`

## 👨‍💻 Author

**Kristína Laššanová**

School project – Applied Informatics. The code is freely available for study purposes.
