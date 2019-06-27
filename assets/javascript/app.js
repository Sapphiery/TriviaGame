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

        askQuestion(questions[currentQuestion]);
    }

    function askQuestion(question) {
        //display question info
        $('#main-text').text(question.question);
        makeButton('a',question.a);
        makeButton('b',question.b);
        makeButton('c',question.c);
        makeButton('d',question.d);
        //start timer

        //when user clicks button, evaluate answer and go to display answer view
        // $('.answer-button').on('click', function() {
            
        // });
    } 

    function answerQuestion(question, response) {
        if (response === question.right) {
            //display happy message
            correct++;
        }
        else {
            //display what the user chose and the correct answer
            incorrect++;
            
        }
        //after timer, move to next question
        //askQuestion(questions[++currentQuestion]);
    }

    function makeButton(choice, answer) {
        var btn = $('<button>');
        btn.text(answer);
        btn.addClass('answer-button');
        btn.attr('option', choice);
        $('#main-display').append(btn);
    }

    $(document).on('click','.answer-button',function() {

    });

    newGame();
    // askQuestion(questions[0]);
});