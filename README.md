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

The focus of our report will be on the quiz aspects of our website. A large part of the quiz's functionality is located within `QuizContent.js`, and therefore, that element received the most analysis. 

### Architectural Deficiencies

Considering the overall structure and functionality of `QuizContent.js`, there were several aspects that called for improvement. These areas for improvement fall into the categories Code Smells, Documentation/Readability Concerns and Design Quality Deficiencies. 

_Code Smells_ 

Throughout `QuizContent`, it could be identified that there were several areas of improvement in regards to comments. The first code smell that can be located is **Poorly Written Comments**. Poorly written comments typically present themselves as not being concise and not adding value to the program. That was a trend that could be seen throughout `QuizContent.js`, as several comments were broad, and therefore, unhelpful. One instance of this code smell is through the comment "`//style of the quiz (stone = black)`", which is considerably unneccessary for the program. A second code smell, which also is in regards to comments, is **Redundant Comment**. Redundant comments were found to be scattered throughout `QuizContent.js` quite often. This code smell involves commenting on code whose functionality or purpose is already clear. One notable occurrence of the redundant comment code smell involved the part of the `QuizContent.js` component where it is apparent that SurveyJS is passing results to be tallied, yet a comment was still placed stating that with  "`//final step: update state`". With poorly written comments and redundant comments, it could be asserted that these two code smells actually worked in conjunction throughout `QuizContent` on numerous occasions. It was a combination of these 2 code smells that ultimately made it clear that refactoring of comments was needed.  

**_Refactoring:_** To address these commenting code smells, comments were removed in all instances of Poorly Written Comments and Redundant Comments. This was done in efforts to reduce the unnecessary noise that was created with comments. In addition, removing the occurrences of these 2 code smells allowed us to focus more on the following code smell: Mysterious Names.

A third code smell that was present throughout `QuizContent` is **Mysterious Names**. Mysterious can be generalized as poor naming conventions, and throughout our selected component, this was displayed as ambiguity. Essentially, it was determined that the naming of our variables and functions could be more concise. One significant example of this was with the function name `convertResults`, which could be considered broad and unclear. With this function name, it seems like the function name does not describe its functionality, and that makes it ambiguous. Another instance of Mysterious Names can be observed in the variables that were intended to help track the counts of results for each imposter type. The names were a singular letter, which could prompt confusion since it lacks clarity. 

**_Refactoring:_** In order to alleviate the presence of Mysterious Names, we first removed the comments to allow us to see the code and identify potential places to rename variables or functions that could allow for concise understanding without comments. Firstly, with the `convertResults` function, we found this to be a very broad and undescriptive name, and therefore embodied the Mysterious Name code smell. So, we changed the function declaration to `updateStateWithNewQuizResults` to provide more clarity through specificity and better word choice. The same type of process was applied to the imposter type counters as well, which were previously named `p`, `s`, `sh`, `e`, `g`, and `n`. We changed the variable names to reflect explicitly the imposter type they were associated with: `perfectionist`, `soloist`, `superhuman`, `expert`, `genius`, and `none` In turn, the changes of this function name and the variable names allowed for the elimination of the Mysterious Names code smell.

A fourth code smell involves placing unnecessary logs to the console within our program. During evaluation of our architecture, `console.log` statements could be seen scattered throughout our program, and although they may have been helpful during development, they lost purpose as development continued and become unhelpful. At this point, the logging statements essentially were taking up space. This was revealed with the logging statement that printed a message containing the state when the survey was completed by a user. This could be considered as the **Too Much Information** code smell, as these log statements attempted to add substance to a program that could remain simplified without the log statements. 

**_Refactoring:_** This code smell with the logging statements was removed easily by deleting the `console.log` statements. They were seen as unhelpful contributions to our program, and ultimately were unimportant. 

A fifth code smell that was discovered during evaluation is the **Lazy Element**. Lazy elements embody code that was intended to be helpful, but ultimately did not contribute to a program. For `QuizContent`, this played out as a result of our fourth identified code smell (Too Much Information). It was revealed that without the logging statements, we were left with variables that did not serve a purpose anymore. While the example provided in the evaluation of the fourth code smell in our program attempted to log a message to the console indicating that the survey was completed, this Lazy Element code smell presented itself as the variable that held this message intended to be sent to the console.

**_Refactoring:_** Following the removal of the logging statements (Too Much Information) code smell, we were left with a variable that was unused. The variable was initially named `quizResults`, and the only purpose it served to the program was to be printed out. As the variable was no longer in use, we removed the variable declaration, and left the code as a simple call to the respective function (newly refactored `updateStateWithNewQuizResults`). Not only did this ensure that everything within our program was a helpful asset to have, but it also supported our flow of events better.

Although a minor instance, the code smell **Speculative Generality** was detailed in our `QuizContent` code through the occurrence of a parameter that was not needed or used. What was discovered was that an `event` parameter was included within `handleResults`, but it was not utilized at all. In fact, this code smell could've been the remnants of a Lazy Element code smell, in which much potential was intended with this event parameter, but that was not able to be achieved or its purpose was lost.  

**_Refactoring:_** To address the Speculative Generality case, we simply changed the function declaration for `handleResults` by removing the `event` parameter. As this parameter was not previously being used, it did not effect the performance of our program, although it could've helped with clarifying the functionality.

Considerably the most major code smell throughout our selected component was **Long Function**. Initially, `QuizContent` consisted of a function embedded within a function, leading to potential readability concerns, but more so a large system that could lead to overwhelming complexity in the future. The rendering function within `QuizContent` is a prime example of this, as it was clear that the function consisted of many moving parts that could be extracted. 

**_Refactoring:_** The Long Function code smell was alleviated by extracting a function out of the rendering function. The newly refactored `updateStateWithNewQuizResults` function, which was previously embedded inside of the `QuizContent` function, was extracted to be its own separate function. Along with this function extraction, we had to add a few more parameters to ensure that functionality continued. Doing so completely removed the presence of the Long Function code smell, as well as improved the readability of the code. 

_Documentation/Readability_ 

In regards to documentation, our initial codebase lacked documentation. For `QuizContent`, the comments were determined to be unhelpful, which implied that no helpful comments existed. Furthermore, without reading throught the `QuizContent.js` file, it could be very difficult to decipher the purpose of the element. Considering readability, `QuizContent` involved several problems, especially taking into account the code smells that were found (Long Function, Mysterious Names, etc). 

**_Refactoring:_** To improve documentation, a blurb was added to the top of our chosen element that briefly describes the purpose of our program. In order to address the readability concern, we eliminated uneeded comments, applied more useful naming conventions (with function and variable names) as well as ensured functions were simplified and short.

**_Please note that all refactoring was performed within the `QuizContent.js` file, as that was our primary element._**

_Design Quality Deficiencies_ 

Following the testing process, a design quality deficiency arose as `QuizContent` could only be tested utilizing the `QuizPage` component. Not only was this because these 2 elements shared a strong connection in terms of functionality and structure, but also because our primary selected element (`QuizContent`) contained many external resources, such as `Survey.js` and `Canvas.js`. This made it challenging to figure out the route to execute testing as were not able access and test specific data without replicating a structure that would be exhaustive and potentially unhelpful to create. Finding a way to work around the specific implementation details provided a strenous concern during the testing process. Following an integration testing flow alleviated this stress as it focused on user actions rather than implementation details.

## Unit / Integration Tests

### Testing Overview 
As mentioned, `QuizContent` was the primary candidate for our architectural evaluation. Although that is the case, this element was chosen since we wanted to focus on this quiz and its functionality. That being said, since `QuizContent` contained such intricate and specific details, `QuizPage.js` must be in consideration for testing as well, since much of the functionality of `QuizContent` is dependent and intertwined with the structure of `QuizPage`. Due to this relationship, there were aspects, particularly in testing, where it was neccessary to evaluate and utilize `QuizPage.js` in order to analyze the performance of our primary element, `QuizContent.js`.

_To conduct our integration tests, we utilized Jest within the testing library framework._

As a whole, we chose to test functionality of the quiz that the user takes. This involves aspects such as the navigation to the quiz, the navigation between questions of the quiz, the content of the quiz showing up and the quiz processing that it has been completed. To do so, elements of `QuizPage` had to be simulated in order to hit endpoints for answers within `QuizContent`.

### Testing Breakdown
| Test # | Test Case (from `test()`) | Intention | Process | Input | Expected Output |
|---|---|---|---|---|---|
| 1 | full app rendering/navigating | Our first test case was constructed in attempts  to ensure that the app renders. Essentially this  test case was to ensure that the application is  running.  | This was utilized to ensure that  the starting point for a user would  be at the 'welcome page' of our  application. Not only did this mean  that the App appeared on a page for a  user, but it also would simulate the  starting point for a user. | `<App />` | 'Mission Statement'  appears on the page |
| 2 | quiz prompt appearing on take quiz button | This test case embodies the process of getting to the quiz page. It was implemented to ensure that when a button to take the quiz is clicked, the introduction to the quiz page appears.| The implementation of this test case is meant to continue where the previous test case left off, and then progress to the next step for a user, which is to navigate to the quiz page. This implies following the same steps as the previous test, and therefore emphasizes how the success of the following tests are dependent on the previous test cases. The automated test for this simulates the app rendering, and then a user clicking the button to take the Imposter Type quiz, and tests the contents of the page to ensure the correct content is displayed. This proves that the correct page was displayed. | `<App />` | 'Which Type of Imposter Syndrome Do You Have' appears on the page |
| 3 | question 1 appearing | This test case aims to ensure that a user sees the first question of the quiz once they click the button to start the quiz. This simulates the user experience up to the first question of the quiz. Although the steps are identical to the previous test case, the goal for this test case is to ensure that the contents of the first question appears. | The implementation followed the exact steps as test case 2. The only difference is that this aimed to test the contents of the question, not the quiz page as a whole. The expected output of this test case was chosen to ensure that endpoints for a particular imposter type was being hit in the `QuizContent.js` file. | `<App />` | 'You have been accused of being a micromanager' appearing on the page |
| 4 | question 2 appearing | This test case ensures that a user sees the second question of the quiz after following steps to navigate to the quiz page and to the second question. This simulates the user experience up to the second question of the quiz. | The implementation for test case 4 followed the repetitive steps as previous tests, with the addition of another button click to get to question 2. Considering the expected output, this particular answer was chosen to hit a different endpoint in `QuizContent` than the previous question. As implementation of other test cases continue, more endpoints in `QuizContent` will be hit, ensuring that functionality within both `QuizContent` and `QuizPage` are performing well, and therefore the quiz overall. | `<App />` | 'You get stressed when you’re not working and find downtime wasteful' appearing on the page |
| 5 | question 3 appearing | This test case ensures that a user sees the third question of the quiz after following steps to navigate to the quiz page and to the third question. This simulates the user experience up to the third question of the quiz. |  The implementation for test case 5 followed the repetitive steps as previous tests, with the addition of another button click to get to question 3. The expected output for this test case was chosen specifically to test another imposter type than previous questions, increasing the code coverage throughout `QuizContent`. | `<App />` | 'sacrificed your hobbies and passions for work' to be on the page |
| 6 | question 4 appearing | This test case ensures that a user sees the fourth question of the quiz after following steps to navigate to the quiz page and to the fourth question. Essentially, this simulates the user experience up to the fourth question of the quiz. | The implementation for test case 6 followed the repetitive steps as previous tests, with the addition of another button click to get to question 4. The expected output of 'an expert' for this test case was identified as an answer that would touch different endpoints than previous questions. | `<App />` | 'an expert' to be on the page |
| 7 | question 5 appearing | This test case ensures that a user sees the fifth question of the quiz after following steps to navigate to the quiz page and to the fifth question. Essentially, this simulates the user experience up to the fifth question of the quiz. |  The implementation for test case 7 followed the repetitive steps as previous tests, with the addition of another button click to get to question 5. Considering the expected output of 'pressed', this answer was chosen to give more variability in answers and allow for `QuizContent` to run different bits of code. | `<App />` | 'pressed' to be on the page |
| 8 | question 6 appearing | This test case ensures that a user sees the sixth question of the quiz after following steps to navigate to the quiz page and to the sixth question. This simulates the user experience up to the sixth question of the quiz. |  The implementation for test case 8 followed the repetitive steps as previous tests, with the addition of another button click to get to question 6. As this is one of the last questions of the quiz, the expected output was definitely chosen specifically to provide variability from the previous responses.| `<App />` | 'focus' to be on the page |
| 9 | question 7 appearing | This test case ensures that a user sees the seventh and last question of the quiz after following steps to navigate to the quiz page and to the last question. This simulates the user experience up to the seventh and last question of the quiz, and ultimately was constructed to ensure that the quiz reaches its last question. |  The implementation for test case 9 followed the repetitive steps as previous tests, with the addition of another button click to get to question 7. The expected output for this test case was the pickiest, and even involved changing the selected answers of previous questions to ensure that every edge case in `QuizContent` was addressed. This was all done in efforts to maximize code coverage.| `<App />` | 'Perfectionist' to be on the page |
| 10 | completed quiz - done test page | This test case ensures that a user's quiz experience comes to an end, and they are able to submit and end the quiz taking process. This test case simulates the entire process of opening the application and taking the quiz, as well as ending the quiz by clicking the `Complete` button | Implementation for test case 10 mimicked the steps of previous tests, with the addition of clicking the `Complete` button at the end. The expected output of 'Thank you' is evidence that the user has reached the end of taking the quiz. | `<App />` | 'Thank you' to be on the page|
| 11 | completed quiz - quiz state resets | This test case aims to address the case in which a user wants to take the quiz again. Essentially, it evaluates if a user will see the beginning of the quiz after clicking the retake button. | The implementation of this last test case followed the exact steps as previous tests in order to simulate the user experience of completing the quiz, and then wanting to take the quiz again. The additional step added is the simulation of the button click to retake the quiz. The expected output for this in turn is that the prompt for the first question of the quiz appears again. | `<App />` | 'Which of the following' to be on the page|

### Testing Instructions 
* Ensure the most recent version of Node, v16.13.2, is installed.
* Run `npm install` to download all relevant dependencies.
* Run the command `npm run test`.
* Run `npm test -- --coverage` to check code coverage.

<img src="https://user-images.githubusercontent.com/62479938/153254571-5bb7874e-642c-4608-92bf-6f8fad9a7cab.png" alt="code-coverage" width=80% height=50%>

Figure 3: A snippet from the console to illustrate 100% code coverage for both `QuizContent.js` and `QuizPage.js`. `QuizPage.js` is included because it is a direct parent of `QuizContent.js`.

## Refactored Code
