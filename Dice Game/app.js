var randomVariable1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource1 = "images/dice" + randomVariable1 + ".png"; //images/dice1.png - images/dice6.png
document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);


var randomVariable2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomVariable2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

if (randomVariable1 > randomVariable2) {
  document.querySelector("h1").innerHTML = "Play 1 Wins!";
}
else if (randomVariable2 > randomVariable1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
