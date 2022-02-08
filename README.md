# INFO 443 Project -- Report on Imposter Syndrome Type Assessment Application

## Structure Diagram
We chose to break down the architecture of our codebase by analyzing the React Components. Additionally, we highlighted some React packages, such as Survey, which were highly utilized by our program. 
<img src="https://user-images.githubusercontent.com/46469460/150293942-e2bda9b4-894c-4aa5-9d27-e9d2b074a82d.png" width=70% height=50%>

## Process Flow Diagram
In our process flow, we highlighted both the client and backend sides, which are positioned on the left and right, respectively. This was documented with the intent of outlining both what the user experiences as well as the functionality. 
<img src="https://user-images.githubusercontent.com/46469460/150294881-94722048-d93b-4310-9895-b91bdfc27b28.png" width=70% height=50%>

## Candidate Element
Our  Candidate Element is the **QuizContent** Components.

## Testing
* Ensure the most recent version of Node, v16.13.2, is installed.
* Run `npm install` to download all relevant dependencies.
* Run the command `npm run test`.
* Run `npm test -- --coverage` to check code coverage.

<img src="https://user-images.githubusercontent.com/62479938/153045613-f75e7905-47c8-48a4-8c50-5dd65dcdc67e.png" width=70% height=50%>

_____

# Project 1 Full Report

## Codebase Context

This application can be utilized to identify an individual's imposter type with the **Interactive Quiz** and observe the **visualized results** to learn more about the cross sections between imposter types. Additionally, a user can gain insight from **real-world stories** of successful industry members as well as **tips** for how to combat feelings of imposter syndrome.

## Mission of Application
The goal of this application is to address feelings of imposter syndrome that women and minorities can experience in the tech field. To make the widely accepted variants of imposter syndrome seem less categorical, an Incredibles character is associated with each archetype.

This solution works specifically to address the United Nations 5th Sustainable Development Goal: Gender Equality. Imposter syndrome can limit the opportunites women and minorities are comfortable pursuing in their work environment.

## Code Structure Analysis

### Architectural Elements

This project was built using React and utilizes two outside libraries to assist in constructing the site's interactive functionality. Architectural analysis is abstracted to consider individual React components.

#### Components in Project

**App**

Renders all content in the project.

**HomePage**

Displays plain HTML explaining the mission statement of the project and Incredibles theme.

**MenuBar**

Directs user to different pages of the website.

**QuizPage**

Explains the purpose of the quiz. Either displays the quiz itself or an option to retake depending on whether the user has taken the quiz.

**QuizContent**

Utilizes SurveyJS to let the user interact with a quiz that determines their imposter syndrome archetype.

**ResultsPage**

Either displays the quiz results or directs the user to take the quiz, depending on the user's quiz status. This component utlizes CanvasJS to display an interactive visualization that conveys the user's imposter syndrome archetype breakdown.

**Imposter Type 1 - 5**

Static content that explains each imposter syndrome archetype with expert quotes and embedded videos that can help users understand each type.

**Survey**

Library that displays and processes the quiz to be taken by the user.

**CanvasJSChart**

Library that displays the visualization of the user's quiz results.

# TODO: Explain relationships more clearly.

<img src="https://user-images.githubusercontent.com/62479938/153046289-8d458fc2-45e0-4e57-9d63-5022221e5086.png" width=70% height=50%>

### 2. What are the code's process flows?

## Architecture Assessment

## Unit Tests

## Refactored Code
