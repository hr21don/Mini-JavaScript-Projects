
var buttonColours = ["red", "blue", "green", "yellow"]; //assigned color patterns
var gamePattern = []; //tracks pattern
var highscore = 0; //tracks highscore
var level = 0; //tracks current level
var started = false; // check to see if the game is going
var userClickedPattern = []; // tracks user pattern

// Event listener for buttonscolors
$(".btn").click(function(event) {
  if(started === true){ //check to see if game is running
    var userChosenColour = $(this).attr("id"); //accepts the userClickedPattern from the user
    userClickedPattern.push(userChosenColour); // adds it to userpattern array
    playSound(userChosenColour);
    animatePress(userChosenColour); //animate effect
    checkAnswer(userClickedPattern.length-1); // checks if correct pattern

  }
});

/*
    Event listener to start/restart game
*/
$(".startgame").click(function(event){
  if(started === false){ // runs new game
    nextSequence(); // starts the sequence;
    started = true;
    $(".startgame ").hide(); // hides the go button
  }
});

// check gamePattern against userClickedPattern is followed
function checkAnswer(currentLevel) {
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();//wait one second and add to sequence
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over"); //game ending animation
      $("#level-title").text("Game Over, Press Go to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver(); //resets game
    }
}

//Adds next sequence to the game pattern
function nextSequence() {
  userClickedPattern = []; //clears user pattern
  level++;
  $("#level-title").text("Level " + level); // update level
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); //ads random to currentColor
  playPattern();//play updated gamePattern to user
}

// full Game pattern for each user level
function playPattern() {
  var i = 0;
  const interval_check = setInterval(function() {
    $("#"+gamePattern[i]).fadeOut(100).fadeIn(100);
    playSound(gamePattern[i]);
    i += 1;
    if (i === gamePattern.length) {
        clearInterval(interval_check);
      }
    }, 1000);
}

//userclicked animation effect
function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

//set function to play assigned sounds

function playSound(name) {
  var sound = new Audio("sounds/" + name + ".mp3");
  sound.play();
}

//clear level + gamePattern
function startOver() {
  if(level > highscore){
    highscore = level -1;
    $("h3").text("High Score: " + highscore);
  }
  level = 0;
  gamePattern = [];
  started = false;
  $(".startgame").show();
}

/*
  set Game over function
*/
function animateGameOver() {
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");
  },200);
}
