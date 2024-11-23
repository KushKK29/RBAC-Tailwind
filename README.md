Hellow Everyone
in this project the process for the testing of the project will be done in this way (i have pushed the node_modules with it so you don't need to do it but if problem occurs then):
1. # **Admin Role Management System**

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

**Now lets move to the introduction to the web site working and future scope**
1. firsly the admin login page will apear by default then there you need to login with the
   **Email: " admin@gmail.com"**
   **Password: admin@123**
2. Then the user will be redirected to the dashboard where the user will be able to see the no. of active roles and the no. of users and the pending request from the user.
3. Now let's just move to adminPanel page where the admin can create the roles and edit them and view the roles.
   **Special Thing**: beside the given list the admin can create it's own roles by clicking on the others option the custom role an be created and in the same way multiple permissions can be set up.
4. now let's say the person create 2 roles[user, finance] so now when we go to the Users page where we will be able to see the status of the user and it's register roles.
5. now we click on the add user option then we can add user email name and assign roles to the user [and these roles are only from the list user,finance].
6. with the user we can see view, edit and delete that user and for single user we can also assign multiple roles to the users.
7. so after that when we go to the dashboard again there we will be able to see the no. of active roles, pending requests and no. of users.

**Future Scope**:
1. in the dashboard i displayed the highlights of the functions so there we can link the newer features of the website and displaying them in the image.
2. also here i implemented the Pending Request page where the owner will be able to see the request coming from the users or from higher officials to add on this user at this role. modify it as this the code for readme file
