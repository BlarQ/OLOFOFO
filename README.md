
# OLOFOFO

Welcome to the Olofofo project! This is a Next.js application that serves as a news aggregator, showcasing the latest news articles. The project utilizes Tailwind CSS for styling and features a modular architecture for easy maintenance and scalability.


Demo
Check out the live demo of the application: Live [Demo](https://blarq.github.io/OLOFOFO//)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| White | ![#FFFFFF](https://via.placeholder.com/10/0a192f?text=+) #FFFFFF |
| Dark Grey | ![#2D2A30](https://via.placeholder.com/10/f8f8f8?text=+) #2D2A30 |

#Features

Fetches and displays the latest news articles. Responsive design with a mobile-first approach. Dark mode support. Reusable components for easy maintenance.

# Folder Structure

src 
├── app 
│    ├── about 
│    │   └── page.jsx 
│    ├── contact 
│    │   └── page.jsx 
│    ├── fonts 
│    │   ├── GeistMonoVF.woff 
│    │   └── GeistVF.woff 
│    ├── news 
│    │   └── [id] 
│    │        └── page.jsx 
│    ├── favicon.ico 
│    ├── globals.css 
│    ├── layout.jsx 
│    └── page.jsx 
├── assets 
├── components 
├── lib 
├── .eslintrc.json 
├── .gitignore 
├── README.md 
├── components.json 
├── jsconfig.json 
├── next.config.mjs 
├── package-lock.json 
├── package.json 
├── postcss.config.mjs 
└── tailwind.config.js

## Technology Used

Frontend: Next.js, React
Styling: Tailwind CSS
Linting: ESLint
Version Control: Git

## Installation

Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/BlarQ/olofofo.git
Navigate to the project directory:

bash
Copy code
cd olofofo
Install the dependencies:

bash
Copy code
npm install
Run the development server:

bash
Copy code
npm run dev
Open your browser and go to http://localhost:3000.

## Deployment

To deploy this project run

Installation Guide
Prerequisites
Ensure you have the following installed:

Node.js (>= 14.x)
npm or yarn
Steps to Install
Clone the Repository:

bash
Copy code
git clone https://github.com/BlarQ/olofofo
cd TheTrendLuxe
Install Dependencies:

bash
Copy code
npm install
Run the Development Server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000 to see the application running.


Deployment Instructions
Vercel
Login to Vercel: If you don't have an account, sign up at Vercel.

Import Project:

Click on "New Project".
Select your Git repository.
Configure Settings:

Set the project name.
Set environment variables in the Vercel dashboard.
Deploy:

Click "Deploy" to start the deployment process.
Other Hosting Providers
Refer to the specific hosting provider's documentation for detailed deployment steps.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps:

Fork the repository.
Create a new branch for your feature:
bash
Copy code
git checkout -b feature/YourFeatureName
Make your changes and commit them:
bash
Copy code
git commit -m "Add some feature"
Push to the branch:
bash
Copy code
git push origin feature/YourFeatureName
Open a pull request.
License
This project is licensed under the MIT License. See the LICENSE file for details.
