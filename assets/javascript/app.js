$(document).ready(function() {
    var correct, incorrect, currentQuestion;
    var questions = [{question: 'What are cats?',
                      a: 'We may never know',
                      b: 'Cosmic entities of goodness',
                      c: 'Fuzz beasts',
                      d: 'All of the above',
                      right: 'd'},
                    {question: '',
                     a: '',
                     b: '',
                     c: '',
                     d: '',
                     right: ''}
                    ];
    
    function newGame() {
        correct = 0;
        incorrect = 0;
        currentQuestion = 0;
    }

    function askQuestion(question) {
        //display question info
        //start timer
        //when user clicks button, evaluate answer and go to display answer view
    } 

    function answerQuestion(question, response) {
        if (response === question.right) {
            //display happy message
        }
        else {
            //display what the user chose and the correct answer
            //
        }
        //after timer, move to next question
        //askQuestion(questions[++currentQuestion]);
    }

    newGame();
    $('#test').text(correct + ' ' + incorrect + ' ' + currentQuestion);
});