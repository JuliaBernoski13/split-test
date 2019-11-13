
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "American History",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "civilwar",
                title: "When was the Civil War?",
                choices: [
                    "1750-1800", "1800-1850", "1850-1900", "1900-1950", "after 1950"
                ],
                correctAnswer: "1850-1900"
            },
            {
                type: "radiogroup",
                name: "libertyordeath",
                title: "Who said 'Give me liberty or give me death?'",
                choicesOrder: "random",
                choices: [
                    "John Hancock", "James Madison", "Patrick Henry", "Samuel Adams"
                ],
                correctAnswer: "Patrick Henry"
            },
            {
                type: "radiogroup",
                name: "magnacarta",
                title: "What is the Magna Carta?",
                choicesOrder: "random",
                choices: [
                    "The foundation of the British parliamentary system", "The Great Seal of the monarchs of England", "The French Declaration of the Rights of Man", "The charter signed by the Pilgrims on the Mayflower"
                ],
                correctAnswer: "The foundation of the British parliamentary system"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });