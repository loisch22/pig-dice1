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
  return this.currentScore;
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
  });
  $("#rollDice1").click(function(event) {
    event.preventDefault();
    var rand = generateRandom();
    var currentScore = player1.play(rand);
    $(".randomNumber").text(rand);
    $(".currentScore").text(currentScore);

  });
  $("#rollDice2").click(function(event) {
    event.preventDefault();
    var rand = generateRandom();
    var currentScore = player2.play(rand);
    $(".randomNumber").text(rand);
    $(".currentScore").text(currentScore);
  });
  $("#exitGame").click(function(event) {
    event.preventDefault();
    $(".gameBoard").hide();
    $("#registration").show();
    $("#player1Name").val('');
    $("#player2Name").val('');

  });
});
