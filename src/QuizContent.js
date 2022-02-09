/*
* This file allows the user to take a personality quiz that determines their
* imposter syndrome archetype. The SurveyJS library is used to display the quiz
* and bundle results into a JSON format. Upon completion of the quiz, results
* are passed to the results page for the user to view.
*/

import surveyJSON from './quiz.json';
import * as Survey from "survey-react";
import "survey-react/survey.css";

function QuizContent(props) {

  const results = props.results;
  const setResults = props.setResults;
  
  Survey.StylesManager.applyTheme("stone");

  var survey = new Survey.Model(surveyJSON);

  survey
    .onComplete
    .add(function (sender) {
      var surveyData = sender.data;
      updateStateWithNewQuizResults(surveyData, results, setResults);
    })
    
  return(
    <div>
      <Survey.Survey model={survey} />
    </div>
  )
}

function updateStateWithNewQuizResults(survey, results, setResults) {

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

    const handleResults = () => {
    const resultsCopy = results.map((item) => {
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

  var currentResults = [{"y":perfectionist,"indexLabel":"Violet","name":"Perfectionist"},
                        {"y":soloist,"indexLabel":"Dash", "name":"Soloist"},
                        {"y":superhuman,"indexLabel":"Mr. Incredible", "name":"Superhuman"},
                        {"y":expert,"indexLabel":"Elastigirl", "name":"Expert"},
                        {"y":genius,"indexLabel":"Edna Mode","name":"Genius"},
                        {"y":none,"indexLabel":"None", "name":"N/A"}];

  handleResults();

  return currentResults;
}

export default QuizContent;
