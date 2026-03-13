# React Props Practice – Profile Cards

This is a small React practice project created to understand how **props** work in React and how data can be passed between components.

The project displays a list of professional profile cards such as software engineers, data engineers, and developers. Each card is rendered using a reusable React component and receives its data through props.

---

## 🔹 Features

- Reusable React components
- Passing data using props
- Card based UI layout
- Simple responsive design
- Dynamic rendering of multiple profiles

---

## 🔹 Preview

![Project Screenshot](./public/preview.png)

---

## 🔹 Concepts Practiced

- React components
- Props
- Component reuse
- Basic project structure

---

## 🔹 Project Structure

```bash
├── public/
    └──  preview.png
├── vite.config.js
├── src/
    ├── main.jsx
    ├── App.css
    ├── components/
    │   └── card.jsx
    ├── index.css
    ├── assets/
    └── App.jsx
├── .gitignore
├── index.html
├── package.json
├── eslint.config.js
└── README.md
```

---

## 🔹 Example

Each profile card receives props like:

- name
- role
- company
- skills
- description
- profile image

These props are then displayed inside the reusable `ProfileCard` component.

---

## 🔹 Tech Used

- React
- JavaScript
- CSS

---

## 🔹 Purpose

This project was created purely for learning and practicing **React props and component reuse**.
