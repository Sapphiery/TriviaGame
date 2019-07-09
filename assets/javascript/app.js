$(document).ready(function() {
    var correct, incorrect, currentQuestion, questionTimer, clockTimer, timeLeft;
    var questions = [{question: 'What are cats?',
                      a: 'We may never know',
                      b: 'Cosmic entities of goodness',
                      c: 'Fuzz beasts',
                      d: 'All of the above',
                      right: 'd'},
                    {question: 'How do flowers work?',
                      a: 'Who are you',
                      b: 'Witchcraft',
                      c: 'Double witchcraft',
                      d: 'What did you do with my wallet?',
                      right: 'c'},
                     {question: 'Is this your towel?',
                      a: 'For real who are you?',
                      b: 'Where am I?',
                      c: 'Yes',
                      d: 'No',
                      right: 'd'}
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
        $('#main-display').empty();
        makeButton('a',question.a);
        makeButton('b',question.b);
        makeButton('c',question.c);
        makeButton('d',question.d);
        //start timer
        timeLeft = 20;
        // questionTimer = setTimeout(function() {
        //     answerQuestion(questions[currentQuestion],e);
        // },20000);
        

        clockTimer = setInterval(function() {
            $('#toptext').text(timeLeft);
            if(timeLeft === 0) {
                answerQuestion(questions[currentQuestion],'e');
                clearInterval(clockTimer);
            }
            timeLeft--;


        },1000);

        //when user clicks button, evaluate answer and go to display answer view
        // $('.answer-button').on('click', function() {
            
        // });
    } 

    function answerQuestion(question, response) {
        $('#main-display').empty();
        
        if (response === question.right) {
            //display happy message
            $('#toptext').text('Correct!');
            correct++;
            $('#main-display').html('<p>' + question[response] + '<br></p>');
        }
        else {
            //display what the user chose and the correct answer
            $('#toptext').text('Incorrect!');            
            incorrect++;
            var p = $('<p>');
            if (response === 'e') {
                p.text('You ran out of time :(')
            }
            else {
                p.text('You chose: ' + question[response]);
            }
            var p2 = $('<p>').text('The correct answer was: ' + question[question.right]);
            $('#main-display').append(p);
            $('#main-display').append(p2);
        }

        questionTimer = setTimeout(function() {
            if(currentQuestion === questions.length - 1) {
                endGame();
            }           
            else {
                askQuestion(questions[++currentQuestion]);
            }
        },4000);

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

    function endGame() {
        $('#main-text').text("That's all!");
        $('#main-display').empty();
        var p = $('<p>').text('You answered ' + correct + ' questions correctly for a score of ' + ((correct / questions.length) * 100) + '%! If you want to restart, click dat button');
        var button = $('<button>').text('Restart Quiz');
        button.addClass('new-game-button');

        $('#main-display').append(p);
        $('#main-display').append(button);
    }

    $(document).on('click','.answer-button',function() {
        clearInterval(clockTimer);
        answerQuestion(questions[currentQuestion],$(this).attr('option'));
    });

    $(document).on('click','.new-game-button',function() {
        correct = 0;
        incorrect = 0;
        currentQuestion = 0;

        askQuestion(questions[currentQuestion]);
    });

    $('#main-text').text('Click the button to begin the quiz!');
    var button = $('<button>');
    button.text('Start Quiz');
    button.addClass('new-game-button');
    $('#main-display').append(button);
    // askQuestion(questions[0]);
});