# ThinkArena

## 🧠 ThinkArena: Sharpen Your Mind!

ThinkArena is a dynamic and interactive web-based quiz application designed to test your knowledge across various categories and difficulties. Challenge yourself, track your performance, and become a quiz champion!

## ✨ Features

* **Customizable Quizzes:** Select your preferred category and difficulty level for a tailored quiz experience.
* **Player Profiles:** Enter your name to personalize your quiz journey.
* **Timed Questions:** Each question comes with a timer, adding a challenging element to the quiz.
* **Real-time Feedback:** See instantly if your answer is correct or incorrect.
* **Detailed Results:** After each quiz, get a comprehensive breakdown of your performance, including:
    * Final Score and Percentage
    * Number of Correct Answers
    * Total Time Taken for the Quiz
    * Motivational messages based on your score
    * Insights into fastest and slowest answer times per question
* **Score History:** All your past quiz scores are saved locally in your browser, allowing you to track your progress over time.
* **Responsive Design:** Enjoy a seamless experience on various devices.

## 🚀 Technologies Used

* **React.js:** A JavaScript library for building user interfaces.
* **React Router DOM:** For declarative routing within the application.
* **JavaScript (ES6+):** The core programming language.
* **HTML5 & CSS3:** For structuring and styling the web pages.
* **`useLocalStorage` Hook:** A custom React hook for persistent data storage in the browser's local storage.
* **Font Awesome:** For scalable vector icons.
* **Netlify:** For seamless continuous deployment.

## 🛠️ Installation & Setup (Local Development)

To get ThinkArena up and running on your local machine, follow these steps:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/krishnakant1794/ThinkArena.git](https://github.com/krishnakant1794/ThinkArena.git)
    ```
2.  **Navigate to the Project Directory:**
    ```bash
    cd ThinkArena
    ```
3.  **Install Dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```
4.  **Start the Development Server:**
    ```bash
    npm start
    # or
    yarn start
    ```
    This will open the application in your browser at `http://localhost:3000`.

## 🎮 How to Use

1.  **Start a Quiz:** On the initial screen, enter your player name and select a quiz category and difficulty.
2.  **Answer Questions:** Read each question and select your answer within the given time limit.
3.  **View Results:** After completing all questions, you'll be redirected to the results page to see your performance summary.
4.  **Review Past Scores:** Click "View All Scores" from the results page to see a history of your quizzes.
5.  **Play Again:** Click "Play Again" from the results page to start a new quiz.

## 🌐 Deployment

ThinkArena is continuously deployed using **Netlify**. Any push to the `main` branch of this repository automatically triggers a new build and deploy to the live site.

**Netlify Configuration:**
* A `_redirects` file is included in the `public` directory to handle client-side routing for single-page applications.
* The `homepage` field has been removed from `package.json` to ensure correct asset loading on Netlify's root domain.

## 📂 Project Structure
