Olofofo
Welcome to the Olofofo project! This is a Next.js application that serves as a news aggregator, showcasing the latest news articles. The project utilizes Tailwind CSS for styling and features a modular architecture for easy maintenance and scalability.

Table of Contents
Features
Technologies
Installation
Folder Structure
Usage
Styling
Dark Mode
Contributing
License
Features
Fetches and displays the latest news articles.
Responsive design with a mobile-first approach.
Dark mode support.
Reusable components for easy maintenance.
Technologies
Frontend: Next.js, React
Styling: Tailwind CSS
Linting: ESLint
Version Control: Git
Installation
To set up the project locally, follow these steps:

Clone the repository:

bash
Copy code
git clone https://github.com/yourusername/olofofo.git
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

Folder Structure
The project structure is organized as follows:

lua
Copy code
src
├── app
│   ├── about
│   │   └── page.jsx
│   ├── contact
│   │   └── page.jsx
│   ├── fonts
│   │   ├── GeistMonoVF.woff
│   │   └── GeistVF.woff
│   ├── news
│   │   └── [id]
│   │       └── page.jsx
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.jsx
│   └── page.jsx
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
Usage
Home Page: The main entry point displaying the latest news articles.
About Page: Information about the project and its purpose.
Contact Page: A form for users to get in touch.
Dynamic News Page: Fetches individual news articles based on their ID.
Styling
The project utilizes Tailwind CSS for styling, allowing for rapid design and responsiveness. The global CSS file (globals.css) defines custom CSS variables for theming and styling across the application.

Styling and Theming
Custom CSS Variables: Defines various color schemes for light and dark modes.
Base Styles: Applies consistent border colors and sets global background and text colors for the body.
Dark Mode
Dark mode is fully supported in this project, providing an alternate color scheme for better accessibility and user experience. The CSS variables adjust automatically based on the selected theme.

Contributing
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
