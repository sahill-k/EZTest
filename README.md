# React Business Support Services App

This is a React application that showcases a suite of business support services with a form for users to submit their email. The application features a responsive design with cards displaying different services, and a form for users to contact the service provider.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Styling](#styling)
- [API](#api)
- [Screenshot](#license)

# Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/sahill-k/EZ-Test.git
   cd EZ-Test
   
2. **Install the dependencies:**

   ```npm install```

3. **Start the development server:**

   ```npm start```
  
The application will be available at **http://localhost:3000.

# Usage
### Home Page:
- Displays the logo and name of the business.
- Lists various business support services in card format.
- Each card shows a service logo, title, and description.
### Contact Form:
- Allows users to submit their email address.
- Validates the email and provides feedback via prompt messages.

## Project Structure
your-repo-name/

├── public/│ 

├── index.html

│   └── ...

├── src/

│   ├── assets/

│   │   ├── logo1.png

│   │   ├── logo2.png

│   │   ├── logo3.png

│   │   ├── logo4.png

│   │   ├── logo5.png

│   │   └── logo6.png

│   ├── App.css

│   ├── App.js

│   ├── index.js

│   └── ...

├── .gitignore

├── package.json

└── README.md

# Components
### App.js
- This is the main component that renders the entire application.

**State:**

- email: Stores the email entered by the user.
- message: Stores the message to be displayed as a prompt based on form submission.

**Functions:**

- handleSubmit: Handles the form submission, validates the email, sends a POST request to the API, and displays appropriate messages using alert.
- getTitle: Returns the title of the service based on the index.

**JSX:**

- Renders the logo, service cards, and the contact form.
**assets/**

- This folder contains the images used for service logos.

# Styling
### App.css:
- Styles for the entire application including the layout, cards, and form.
- Media queries for responsive design across different screen sizes.
- Button hover and active states for better user interaction.
## API
- The form submission sends a POST request to http://3.228.97.110:9000/api with the user's email.

### Request: 
- Method: POST
- Headers: Content-Type: application/json
  
- Body: {"email": "user@example.com"}
- Response:

- **200:** Form Submitted.
- **422:** Error if the email ends with @ez.works.
- **Other:** General error message.

# Screenshot
![image](https://github.com/sahill-k/EZTest/assets/77336706/de78d0ac-e666-4d97-9088-392a1a2737f3)
