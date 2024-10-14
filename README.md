
# OLOFOFO

Welcome to the Olofofo project! <br/> This is a Next.js application that serves as a news aggregator, showcasing the latest news articles. The project utilizes Tailwind CSS for styling and features a modular architecture for easy maintenance and scalability.


Demo
Check out the live demo of the application: Live [Demo](https://blarq.github.io/OLOFOFO//)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| White | ![#FFFFFF](https://via.placeholder.com/10/ffffff?text=+) #FFFFFF |
| Dark Grey | ![#2D2A30](https://via.placeholder.com/10/A9A9A9?text=+) #2D2A30 |

#Features

Fetches and displays the latest news articles. Responsive design with a mobile-first approach. Dark mode support. Reusable components for easy maintenance.

# Folder Structure

src <br/>
├── app <br/>
│ &nbsp;&nbsp;&nbsp;├── about <br/>
│ &nbsp;&nbsp;&nbsp;│  &nbsp; └── page.jsx <br/>
│ &nbsp;&nbsp;&nbsp;├── contact <br/>
│ &nbsp;&nbsp;&nbsp;│  &nbsp; └── page.jsx <br/>
│ &nbsp;&nbsp;&nbsp;├── fonts <br/>
│ &nbsp;&nbsp;&nbsp;│ &nbsp;  ├── GeistMonoVF.woff <br/>
│ &nbsp;&nbsp;&nbsp;│  &nbsp; └── GeistVF.woff <br/>
│ &nbsp;&nbsp;&nbsp;├── news <br/>
│ &nbsp;&nbsp;&nbsp;│  &nbsp; └── [id] <br/>
│ &nbsp;&nbsp;&nbsp;│   &nbsp;     └── page.jsx <br/>
│ &nbsp;&nbsp;&nbsp;├── favicon.ico <br/>
│ &nbsp;&nbsp;&nbsp;├── globals.css <br/>
│ &nbsp;&nbsp;&nbsp;├── layout.jsx <br/>
│ &nbsp;&nbsp;&nbsp;└── page.jsx <br/>
├── assets <br/>
├── components <br/>
├── lib <br/>
├── .eslintrc.json <br/>
├── .gitignore <br/>
├── README.md <br/>
├── components.json <br/>
├── jsconfig.json <br/>
├── next.config.mjs <br/>
├── package-lock.json <br/>
├── package.json <br/>
├── postcss.config.mjs <br/>
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

To deploy this project run <br/><br/>

Installation Guide<br/>
Prerequisites<br/>
Ensure you have the following installed:<br/><br/>

Node.js (>= 14.x)<br/>
npm or yarn<br/>
Steps to Install<br/>
Clone the Repository:<br/><br/>

bash<br/>
Copy code<br/>
git clone https://github.com/BlarQ/olofofo<br/>
cd olofofo<br/>
Install Dependencies:<br/><br/>

bash<br/>
Copy code<br/>
npm install<br/>
Run the Development Server:<br/><br/>

bash<br/>
Copy code<br/>
npm run dev<br/>
Open your browser and navigate to http://localhost:3000 to see the application running.<br/><br/>


Deployment Instructions<br/>
Vercel<br/>
Login to Vercel: If you don't have an account, sign up at Vercel.<br/><br/>

Import Project:<br/><br/>

Click on "New Project".<br/>
Select your Git repository.<br/>
Configure Settings:<br/><br/>

Set the project name.<br/>
Set environment variables in the Vercel dashboard.<br/>
Deploy:<br/><br/>

Click "Deploy" to start the deployment process.<br/>
Other Hosting Providers<br/>
Refer to the specific hosting provider's documentation for detailed deployment steps.

## Contributing

Contributions are welcome! If you'd like to contribute, please follow these steps: <br/><br/>

Fork the repository.<br/>
Create a new branch for your feature:<br/>
bash<br/>
Copy code<br/>
git checkout -b feature/YourFeatureName<br/>
Make your changes and commit them:<br/>
bash<br/>
Copy code<br/>
git commit -m "Add some feature"<br/>
Push to the branch:<br/>
bash<br/>
Copy code<br/>
git push origin feature/YourFeatureName<br/>
Open a pull request.<br/>
## License
This project is licensed under the MIT License. See the LICENSE file for details.
