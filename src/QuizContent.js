import surveyJSON from './quiz.json';
import * as Survey from "survey-react";
import "survey-react/survey.css";

// Tracks the quiz results and updates the state variable created when the user enters or refreshes the page
function QuizContent(props) {

  // syncs with the state variable 
  const results = props.results;
  const setResults = props.setResults;
  
  // style of the quiz (stone = black)
  Survey.StylesManager.applyTheme("stone");

  // the variable used to track quiz results 
  var survey = new Survey.Model(surveyJSON);

  // takes complete survey and converts to an array that'soloist compatible with Canvas.js
  function updateStateWithNewQuizResults(survey, results) {

    var perfectionist = 0;
    var soloist = 0;
    var superhuman = 0;
    var expert = 0;
    var genius = 0;
    var none = 0;
    
    for (var key in survey) {
      if(survey[key] === "P"){
        perfectionist+=14.29;
      } else if (survey[key] === "S") {
        soloist+=14.29;
      } else if (survey[key] === "SH") {
        superhuman+=14.29;
      } else if (survey[key] === "E") {
        expert+=14.29;
      } else if (survey[key] === "G") {
        genius+=14.29;
      } else {
        none+=14.29;
      } 
    }

    // delayed computation until after survey is complete
    // const handleResults = (event) => {
      const handleResults = () => {
      // create a copy of state and update elements as needed
      // item: the current element of the results array
      // index: the current entry number we are looking at
      const resultsCopy = results.map((item) => {
        // update current counts with new results
        if (item.indexLabel === "Violet") {
          item.y = perfectionist;
          item.name = "Perfectionist";
        } else if (item.indexLabel === "Dash") {
          item.y = soloist;
          item.name = "Soloist";
        } else if (item.indexLabel === "Mr. Incredible") {
          item.y = superhuman;
          item.name = "Superhuman";
        } else if (item.indexLabel === "Elastigirl") {
          item.y = expert;
          item.name = "Expert";
        } else if (item.indexLabel === "Edna Mode") {
          item.y = genius;
          item.name = "Genius";
        } else {
          item.y = none;
          item.name = "N/A";
        }
        return item;
      })

      setResults(resultsCopy);

    }
    // the format the canvas.js needs to display results
    var currentResults = [{"y":perfectionist,"indexLabel":"Violet","name":"Perfectionist"},
                          {"y":soloist,"indexLabel":"Dash", "name":"Soloist"},
                          {"y":superhuman,"indexLabel":"Mr. Incredible", "name":"Superhuman"},
                          {"y":expert,"indexLabel":"Elastigirl", "name":"Expert"},
                          {"y":genius,"indexLabel":"Edna Mode","name":"Genius"},
                          {"y":none,"indexLabel":"None", "name":"N/A"}];

    handleResults(); // final step: update state

    return currentResults;
  }

  // signals quiz has been complete and starts processing results by calling updateStateWithNewQuizResults
  survey
    .onComplete
    .add(function (sender) {
      var surveyData = sender.data;
      console.log("Survey done!");
      var quizResults = updateStateWithNewQuizResults(surveyData, results);
      console.log(quizResults);
    })
    
  return(
    <div>
      <Survey.Survey model={survey} />
    </div>
  )
}

export default QuizContent;
