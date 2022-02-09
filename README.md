# Project 1 Full Report: Imposter Syndrome Assessment Application

## Codebase Context

This application can be utilized to identify an individual's imposter type with the **Interactive Quiz** and observe the **visualized results** to learn more about the cross sections between imposter types. Additionally, a user can gain insight from **real-world stories** of successful industry members as well as **tips** for how to combat feelings of imposter syndrome.

## Mission of Application
The goal of this application is to address feelings of imposter syndrome that women and minorities can experience in the tech field. To make the widely accepted variants of imposter syndrome seem less categorical, an Incredibles character is associated with each archetype.

This solution works specifically to address the United Nations 5th Sustainable Development Goal: Gender Equality. Imposter syndrome can limit the opportunites women and minorities are comfortable pursuing in their work environment.

## Code Structure Analysis

### Architectural Elements

This project was built using React and utilizes two outside libraries to assist in constructing the site's interactive functionality. Architectural analysis is abstracted to consider individual React components. Figure 1 illustrates each React component and their relationships.

#### Components in Project

**App**

Renders all content in the project. The app instantiates the menu bar, and instantiates the quiz page, results page, and imposter type information pages as they are navigated to.

**HomePage**

Displays plain HTML explaining the mission statement of the project and Incredibles theme.

**MenuBar**

Directs user to different pages of the website. This is the main route to reach the imposter syndrome type pages.

**QuizPage**

Explains the purpose of the quiz. Either displays the quiz itself or an option to retake depending on whether the user has taken the quiz. `QuizContent` is a child of this component.

**QuizContent**

Utilizes SurveyJS to let the user interact with a quiz that determines their imposter syndrome archetype. This page is only displayed if the user has not taken the quiz.

**ResultsPage**

Either displays the quiz results or directs the user to take the quiz, depending on the user's quiz status. This component utlizes CanvasJS to display an interactive visualization that conveys the user's imposter syndrome archetype breakdown.

**Imposter Type 1 - 5**

Static content that explains each imposter syndrome archetype with expert quotes and embedded videos that can help users understand each type.

**Survey**

Library that displays and processes the quiz to be taken by the user.

**CanvasJSChart**

Library that displays the visualization of the user's quiz results.

<img src="https://user-images.githubusercontent.com/62479938/153046289-8d458fc2-45e0-4e57-9d63-5022221e5086.png" alt="structure-diagram" width=80% height=50%>

Figure 1: Structure Diagram for *Be Incredible*

This figure illustrates how elements interact with each other in the project. Three interfaces are used, namely React, SurveyJS, and CanvasJS. Composition relationships are common in this project because some components serve to instantiate others.

### 2. What are the code's process flows?

The process flow considers the role of the user and backend in delivering an interactive quiz experience. Since the experience was designed to guide the user through the website, one will notice the code's logic closely align with how a human might experience the application.

When the user first visits the quiz page, the function `hasTakenQuiz()` is called upon in `QuizPage.js` to determine whether the state variable has recorded existing quiz data from this user. If the user has taken the quiz, a simple message is displayed to either direct the user to the results page, or let them reset the state.

When the user's state is clear of any quiz attempts, the quiz content is rendered. This page uses the SurveyJS framework to record the user's input and save it in a JSON format. Upon completing the quiz, the application's algorithm tallies each imposter type's responses to determine the user's imposter syndrome type breakdown. The application updates the state with these new results.

After the quiz is taken, a completion message is displayed that will either direct the user to the results page or let them reset their results, triggering a state reset.

Separately from the quiz collection components, the application allows a user to view their imposter syndrome breakdown in a creative visualization. The goal of this visualization is to help them understand which type they align most with, but also allow them to see other closely-aligned types.

If the results page is passed valid state information, it creates a copy of the state and manipulates it into a form that the library CanvasJS can process. After CanvasJS processes the data, it renders an interactive visualization. The user can hover over sections of its pie chart to view percentages of each type alignment. Additionally, the results page records the top result and displays it in a text box to clearly communicate relevant results.

Beyond this visualization, the menu bar can have the application render any imposter syndrome type page. This information is static, so it is not of relevance to the process flow diagram. Figure 2, below, shows a visual representation of how the application executes its logic in the scope of taking the quiz.

<img src="https://user-images.githubusercontent.com/46469460/150294881-94722048-d93b-4310-9895-b91bdfc27b28.png" alt="process-flow" width=80% height=50%>

Figure 2: Process Flow for the imposter syndrome quiz.

This figure illustrates the logic used by the program for the interactive quiz experience. The logic included is primarily focused on the role `QuizContent.js` plays in the larger system.

## Architecture Assessment 

### Element Selection

The focus of our report will be on the quiz aspects of our website. This would involve both `QuizPage.js` and its dependency, `QuizContent.js`. A large part of the quiz's functionality is located within `QuizContent.js`, and therefore, that element received the most analysis. That being said, much of the functionality of `QuizContent` is dependent and intertwined with the structure of `QuizPage`. Due to this relationship, there were aspects, particularly in refactoring and testing, where it was neccessary to evaluate `QuizPage.js` in order to analyze the performance of our primary element, `QuizContent.js`.

### Architectural Deficiencies

Considering the overall structure and functionality of `QuizContent.js`, there were several aspects that called for improvement. These areas for improvement fall into the categories Code Smells, Documentation/Readability Concerns and Design Quality Deficiencies. 

_Code Smells_ 

Throughout `QuizContent`, it could be identified that there were several areas of improvement in regards to comments. The first code smell that can be located are **poorly written comments**. Poorly written comments typically present themselves as not being concise and not adding value to the program. That was a trend that could be seen throughout `QuizContent.js`, as several comments were broad, and therefore, unhelpful. One instance of this code smell is through the comment "`//style of the quiz (stone = black)`", which is considerably unneccessary for the program. A second code smell, which also is in regards to comments, is **redundant comment**. Redundant comments were found to be scattered throughout `QuizContent.js` quite often. This code smell involves commenting on code whose functionality or purpose is already clear. One notable occurrence of the redundant comment code smell involved the part of the `QuizContent.js` component where it is apparent that SurveyJS is passing results to be tallied, yet a comment was still placed stating that with  "`//final step: update state`". With poorly written comments and redundant comments, it could be asserted that these two code smells actually worked in conjunction throughout `QuizContent` on numerous occasions. It was a combination of these 2 code smells that ultimately made it clear that refactoring of comments was needed.  

1. Mysterious Names
Location: Throughout file

2. Poorly written comment
Location: Throughout

3. Unnecessary logs to console
Location: Message when survey is complete with updated state

4. Lazy element
Location: Updated state only saved to variable to be printed

5. Long function
Location: Extracted `updateStateWithNewQuizResults()` from Quiz Content rendering function

6. Redundant comment
Location: Step where SurveyJS passes results to be tallied

7. Speculative generality
Location: `QuizContent.js` uses `event` parameter when it should be omitted

_Documentation/Readability_ 

1. Documentation/Readability Concerns

_Design Quality Deficiencies_ 

## Unit Tests

## Testing
* Ensure the most recent version of Node, v16.13.2, is installed.
* Run `npm install` to download all relevant dependencies.
* Run the command `npm run test`.
* Run `npm test -- --coverage` to check code coverage.

<img src="https://user-images.githubusercontent.com/62479938/153045613-f75e7905-47c8-48a4-8c50-5dd65dcdc67e.png" alt="code-coverage" width=80% height=50%>

Figure 3: A snippet from the console to illustrate 100% code coverage for both `QuizContent.js` and `QuizPage.js`. `QuizPage.js` is included because it is a direct parent of `QuizContent.js`.

## Refactored Code
