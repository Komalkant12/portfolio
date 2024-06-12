# My portfolio

Portfolio App
Welcome to the Portfolio App project! This repository contains the code for a personal portfolio application built using the MERN stack (MongoDB, Express, React, Node.js) along with Vite for fast development. The project showcases different sections such as skills, projects, what I do, and a contact form using various packages including Nodemailer for sending emails.

Features
Home Section: Introduction and personal details.
Skills Section: List of skills with proficiency levels.
Projects Section: Showcase of personal and professional projects.
What I Do Section: Description of services and expertise.
Contact Section: Contact form to send messages via email.
Technologies Used
Frontend: React with Vite
Backend: Node.js with Express
Database: MongoDB
Packages: Nodemailer, Mongoose, Axios
Installation
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/portfolio-app.git
cd portfolio-app
Set up the frontend:

bash

cd frontend
npm install
npm run dev
Set up the backend:

bash

cd ../backend
npm install
Configure environment variables:

Create a .env file in the server directory with the following contents:
makefile
Copy code
MONGO_URI=your-mongodb-connection-string
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-email-password
Start the backend server:

bash
Copy code
npm run dev
Usage
Home Section: Displays a welcome message and brief introduction.
Skills Section: Lists skills with icons and proficiency levels.
Projects Section: Displays a gallery of projects with descriptions and links.
What I Do Section: Describes services offered and areas of expertise.
Contact-Me Section: Form to send messages directly to your email.



