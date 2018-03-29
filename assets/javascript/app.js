
$(document).ready(function() {

    var count = 30; 

    var counter = setInterval(timer, 1000); 

    function timer() {
        count = count - 1; 
        if (count <= 0)
        {
            clearInterval(counter);
            return;
        }
        $(".time-remaining").text(count);
    }

    var wins = 0; 
    var lossses = 0; 
    var score = 0; 
    var correctAnswers = 0; 
    var incorrectAnswers = 0;
    var unanswered = 0; 
    
    var disneyQuestion = [{
        question: "What was the last team MJ played on?",
        choices: ["Wizards", "Rockets", "SuperSonics", "Bulls" ],
        validAnswer: 0
        }, {
        question:"What other professional sport did MJ play?",
        choices: ["Soccer", "Baseball", "Golf", "Swimming"],
        validAnswer: 1
        
        }, {
        question:"Where did MJ go to college?",
        choices: ["Wake Forest", "Kentucky", "Kansas", "North Carolina"],
        validAnswer: 3
        
        }, {
        question:"What year was MJ drafted to the NBA?",
        choices: ["1988", "1992", "1984", "1980"],
        validAnswer: 2
        
        }, {
        question:"What pick was he drafted?",
        choices: ["1", "2", "3", "4"],
        validAnswer: 2
        
         }, 
        
        ];
        
    
    $("#select-button").on("click", function() {
        console.log()
      });
    

    function gameOver(){
        alert("You ran out of time. Please try again!");
    }


    function winGO(){
        alert("You won!");
          wins++; 
          $("#wins").text(wins);
          reset();
        }
        
    function loseGO(){
        alert ("You lose. Try again!");
          losses++;
          $("#losses").text(losses);
          reset();
        }

})