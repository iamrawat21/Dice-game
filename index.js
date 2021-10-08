var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomsource1 = "images/dice" + randomNumber1 + ".png"; //image 1 - image 6

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src" , randomsource1);


var randomnumber2 = Math.floor(Math.random() *  6) + 1;

var randomsource2 = "images/dice" + randomnumber2 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src" , randomsource2);

//if and else
if(randomNumber1 > randomnumber2){
  document.querySelector("h1").innerHTML = "⛳️ PLAYER 1 WINS";
}
else if (randomNumber1  < randomnumber2){
  document.querySelector("h1").innerHTML = "⛳️ PLAYER 2 WINS";
}
else{
  document.querySelector("h1").innerHTML = "🤜🏻🤛🏻DRAW";
}

function refresh(){
  location.reload();
}
