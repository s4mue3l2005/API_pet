# API Product Manager

Interactive web application for managing products through simulated APIs. Built with modern JavaScript, this project allows users to create, edit, delete, and display products using real HTTP methods (GET, POST, PUT, DELETE) via `Fetch API`, styled and validated with SweetAlert2.

---

## 📄 Description

This project is a practical CRUD system powered by HTML5, CSS3, and modular JavaScript (ES6+). It uses **JSON Server** to simulate a REST API and perform real-time data operations. Designed to be responsive and developer-friendly, it's ideal for learning how to work with APIs, handle async requests, and structure code modularly.

---

## ✨ Features

- Full CRUD operations (Create, Read, Update, Delete)  
- API integration using `Fetch API` and HTTP methods  
- SweetAlert2 for friendly feedback and validation  
- JSON Server simulates persistent backend storage  
- Responsive layout for mobile, tablet, and desktop  
- Modular JavaScript with separate logic files  
- Developed with Vite for modern dev environment  

---

## 📁 Repository Structure

```plaintext
api_gestion/
│
├── index.html                   # Main HTML structure with semantic tags
├── package.json                 # Project config and scripts
├── package-lock.json
├── .gitignore
│
├── public/
│   └── database.json            # JSON Server database
│
├── src/
│   ├── css/
│   │   └── style.css            # Responsive styles (media queries, flexbox/grid)
│   └── js/
│       ├── api.js               # All API interaction functions (GET, POST, etc.)
│       ├── alerts.js            # SweetAlert2 logic for custom alerts
│       ├── form-handler.js      # Form submission and validations
│       ├── gestion_api.js       # Event listeners and main logic
│       └── ui.js                # DOM manipulation and rendering
│
```

---

## 🚀 How to Run the Project

1. **Clone the repository**:

   ```bash
   git clone https://github.com/tuusuario/API_pet.git
   cd API_pet/api_gestion
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start JSON Server** (in one terminal):

   ```bash
   npx json-server --watch public/database.json --port 3000
   ```

4. **Start the Vite dev server** (in another terminal):

   ```bash
   npm run dev
   ```

5. **Open in your browser**:

   Navigate to `http://localhost:5173/`  
   Make sure `http://localhost:3000/` is also running for the API.

---

## 🔧 Resources Used

| Resource / Library | Description                              |
| ------------------ | ---------------------------------------- |
| Vite               | Fast frontend development bundler        |
| SweetAlert2        | Modern alerts for user interaction       |
| JSON Server        | Simulated REST API for local data        |
| HTML5/CSS3         | Interface structure and responsive style |
| JavaScript (ES6+)  | Modular logic with async API handling    |
| Flexbox/Grid       | Responsive layout across all devices     |

---

## 📊 Data Structures Table

| Structure   | Main Usage                                      |
| ----------- | ----------------------------------------------- |
| Object      | Store product attributes (name, price, etc.)    |
| Array       | Product list fetched from the API               |
| Fetch API   | Handle asynchronous API requests                |
| DOM         | Display data and update the UI dynamically      |
| SweetAlert2 | Visual feedback and error handling              |

---

## 👨‍💻 Author and Contact

**Samuel David Arena Jiménez**   
- ✉️ samyarena2005@gmail.com  
- 🌐 https://github.com/s4mue3l2005