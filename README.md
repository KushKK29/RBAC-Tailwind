# **Admin Role Management System**

## **Project Overview**
This project provides a streamlined way to manage users and their roles efficiently. It includes features for admin login, role creation, user management, and dashboard highlights.

The following steps outline the setup and testing process for the project.

---

## **Setup Instructions**
### **Installation**
1. **Clone the repository.**
2. Ensure `node_modules` are present in the project. If any issues occur, follow these steps:
   - Run the commands below:
     ```bash
     npm create vite@latest
     ```
   - Select:
     - **Framework**: `Vite`
     - **Library**: `React.js`
     - **Language**: `JavaScript`
   - Run:
     ```bash
     npm install
     npm i react-router-dom react-slick slick-carousel
     ```
3. **Tailwind CSS Setup**:
   - Install Tailwind CSS:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Initialize Tailwind CSS:
     ```bash
     npx tailwindcss init -p
     ```
   - Update `tailwind.config.js` with the following:
     ```javascript
     /** @type {import('tailwindcss').Config} */
     export default {
       content: [
         "./index.html",
         "./src/**/*.{js,ts,jsx,tsx}",
       ],
       theme: {
         extend: {},
       },
       plugins: [],
     }
     ```
4. Run the project locally:
   ```bash
   npm run dev
