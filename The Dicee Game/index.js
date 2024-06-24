var randomNumber1 = Math.ceil(Math.random() * 6);
var randomDiceImage = "dice"+randomNumber1+".png";
var randomImage = "./images/"+randomDiceImage;

document.querySelector('.img1').setAttribute('src', randomImage);

var randomNumber2 = Math.ceil(Math.random() * 6);
var randomDiceImage2 = "dice"+randomNumber2+".png";
var randomImage2 = "./images/"+randomDiceImage2;

document.querySelector('.img2').setAttribute('src', randomImage2);

if (randomNumber1 === randomNumber2){
    document.querySelector('h1').innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2){
    document.querySelector('h1').innerHTML = "Player 1 Wins!";
}
else if(randomNumber2 > randomNumber1) {
    document.querySelector('h1').innerHTML = "Player 2 Wins!";
}