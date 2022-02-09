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

Throughout `QuizContent`, it could be identified that there were several areas of improvement in regards to comments. The first code smell that can be located is **Poorly Written Comments**. Poorly written comments typically present themselves as not being concise and not adding value to the program. That was a trend that could be seen throughout `QuizContent.js`, as several comments were broad, and therefore, unhelpful. One instance of this code smell is through the comment "`//style of the quiz (stone = black)`", which is considerably unneccessary for the program. A second code smell, which also is in regards to comments, is **Redundant Comment**. Redundant comments were found to be scattered throughout `QuizContent.js` quite often. This code smell involves commenting on code whose functionality or purpose is already clear. One notable occurrence of the redundant comment code smell involved the part of the `QuizContent.js` component where it is apparent that SurveyJS is passing results to be tallied, yet a comment was still placed stating that with  "`//final step: update state`". With poorly written comments and redundant comments, it could be asserted that these two code smells actually worked in conjunction throughout `QuizContent` on numerous occasions. It was a combination of these 2 code smells that ultimately made it clear that refactoring of comments was needed.  

A third code smell that was present throughout `QuizContent` is **Mysterious Names**. Mysterious can be generalized as poor naming conventions, and throughout our selected component, this was displayed as ambiguity. Essentially, it was determined that the naming of our variables and functions could be more concise. One significant example of this was with the function name `convertResults`, which could be considered broad and unclear. With this function name, it seems like the function name does not describe its functionality, and that makes it ambiguous. Another instance of Mysterious Names can be observed in the variables that were intended to help track the counts of results for each imposter type. The names were a singular letter, which could prompt confusion since it lacks clarity. 

A fourth code smell involves placing unnecessary logs to the console within our program. During evaluation of our architecture, `console.log` statements could be seen scattered throughout our program, and although they may have been helpful during development, they lost purpose as development continued and become unhelpful. At this point, the logging statements essentially were taking up space. This was revealed with the logging statement that printed a message containing the state when the survey was completed by a user. This could be considered as the **Too Much Information** code smell, as these log statements attempted to add substance to a program that could remain simplified without the log statements. 

A fifth code smell that was discovered during evaluation is the **Lazy Element**. Lazy elements embody code that was intended to be helpful, but ultimately did not contribute to a program. For `QuizContent`, this played out as a result of our fourth identified code smell (Too Much Information). It was revealed that without the logging statements, we were left with variables that did not serve a purpose anymore. While the example provided in the evaluation of the fourth code smell in our program attempted to log a message to the console indicating that the survey was completed, this Lazy Element code smell presented itself as the variable that held this message intended to be sent to the console.

Although a minor instance, the code smell **Speculative Generality** was detailed in our `QuizContent` code through the occurrence of a parameter that was not needed or used. What was discovered was that an `event` parameter was included within `handleResults`, but it was not utilized at all. In fact, this code smell could've been the remnants of a Lazy Element code smell, in which much potential was intended with this event parameter, but that was not able to be achieved or its purpose was lost.  

Considerably the most major code smell throughout our selected component was **Long Function**. Initially, `QuizContent` consisted of a function embedded within a function, leading to potential readability concerns, but more so a large system that could lead to overwhelming complexity in the future. The rendering function within `QuizContent` is a prime example of this, as it was clear that the function consisted of many moving parts that could be extracted. 

_Documentation/Readability_ 

In regards to documentation, our initial codebase lacked documentation. For `QuizContent`, the comments were determined to be unhelpful, which implied that no helpful comments existed. Furthermore, without reading throught the `QuizContent.js` file, it could be very difficult to decipher the purpose of the element. Considering readability, `QuizContent` involved several problems, especially taking into account the code smells that were found (Long Function, Mysterious Names, etc). 

_Design Quality Deficiencies_ 

TBD

## Unit Tests

## Testing
* Ensure the most recent version of Node, v16.13.2, is installed.
* Run `npm install` to download all relevant dependencies.
* Run the command `npm run test`.
* Run `npm test -- --coverage` to check code coverage.

<img src="https://user-images.githubusercontent.com/62479938/153045613-f75e7905-47c8-48a4-8c50-5dd65dcdc67e.png" alt="code-coverage" width=80% height=50%>

Figure 3: A snippet from the console to illustrate 100% code coverage for both `QuizContent.js` and `QuizPage.js`. `QuizPage.js` is included because it is a direct parent of `QuizContent.js`.

## Refactored Code
