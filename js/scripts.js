//Business logic
var generateRandom = function () {
  return Math.floor(Math.random() * 6) + 1;
}

function Player(name, cs, hold, total){
  this.playerName = name;
  this.currentScore = cs;
  this.holdCurrentScore = hold;
  this.totalScore = total;
}

Player.prototype.play = function(rand) {
  this.currentScore += rand;
  if (this.holdCurrentScore == true) {
    this.totalScore += this.currentScore;
  }
  return this.currentScore;
};
Player.prototype.getTotalScore = function(currentScore) {
    this.totalScore += currentScore;
    return this.totalScore;
};

var player1;
var player2;

//UI logic
$(document).ready(function() {
  $("#registration").submit(function(event) {
    event.preventDefault();
    var player1Name = $("#player1Name").val();
    var player2Name = $("#player2Name").val();
    player1 = new Player(player1Name, 0, false, 0);
    player2 = new Player(player2Name, 0, false, 0);

    $(".player1").text(player1.playerName);
    $(".player2").text(player2.playerName);

    $(".gameBoard").show();
    $("#registration").hide();
    $("#frontPageImg").hide();
  });
  $("#rollDice1").click(function(event) {
    event.preventDefault();
    var rand = generateRandom();
    var currentScore = player1.play(rand);
    $(".randomNumber").text(rand);
    $(".currentScore").text(currentScore);
    $('#rollDice2').prop('disabled', true);

    if (rand == 1) {
      player1.currentScore = 0;
      $('#rollDice1').prop('disabled', true);
      $('#rollDice2').prop('disabled', false);
      $(".currentScore").text('0');
    }

  });
  $("#rollDice2").click(function(event) {
    event.preventDefault();
    var rand = generateRandom();
    var currentScore = player2.play(rand);
    console.log(player2.currentScore);
    $(".randomNumber").text(rand);
    $(".currentScore").text(currentScore);
    $('#rollDice1').prop('disabled', true);

    if (rand == 1) {
      player2.currentScore = 0;
      $('#rollDice2').prop('disabled', true);
      $('#rollDice1').prop('disabled', false);
      $(".currentScore").text('0');
    }
  });
  $("#holdPlayer1").click(function(event) {
    event.preventDefault();
    //var rand = generateRandom();
    // var currentScore = player1.play(rand);
    var totalScore = player1.getTotalScore(player1.currentScore);
    $(".randomNumber").text('0');
    player1.currentScore = 0;
    $(".currentScore").text(player1.currentScore);
    $('#rollDice1').prop('disabled', true);
    $('#rollDice2').prop('disabled', false);
    $(".player1Score").text(totalScore);

    if (player1.totalScore >= 100) {
      alert("Congratulations Player 1 Wins!")
    }
  });

  $("#holdPlayer2").click(function(event) {
    event.preventDefault();
    //var rand = generateRandom();
    // var currentScore = player2.play(rand);
    var totalScore = player2.getTotalScore(player2.currentScore);
    $(".randomNumber").text('0');
    player2.currentScore = 0;
    $(".currentScore").text(player2.currentScore);
    $('#rollDice2').prop('disabled', true);
    $('#rollDice1').prop('disabled', false);
    $(".player2Score").text(totalScore);

    if (player2.totalScore >= 100) {
      alert("Congratulations Player 2 Wins!")
    }
  });

  $("#exitGame").click(function(event) {
    event.preventDefault();
    $(".gameBoard").hide();
    $("#registration").show();
    $("#player1Name").val('');
    $("#player2Name").val('');

  });
});
