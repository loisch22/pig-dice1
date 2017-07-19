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

Player.prototype.play = function () {
  var randomNumber = generateRandom();
  this.currentScore += randomNumber;
};






//UI logic
$(document).ready(function() {
  $("#registration").submit(function(event) {
    event.preventDefault();
    var player1Name = $("#player1Name").val();
    var player2Name = $("#player2Name").val();
    var player1 = new Player(player1Name, 0, false, 0);
    var player2 = new Player(player2Name, 0, false, 0);
    $(".player1").text(player1.playerName);
    $(".player2").text(player2.playerName);


    $(".gameBoard").show();
    $("#registration").hide();
  });
  $("#exitGame").click(function(event) {
    event.preventDefault();
    $(".gameBoard").hide();
    $("#registration").show();
  });
});
