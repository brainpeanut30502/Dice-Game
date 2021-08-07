var face_arr=[
'./images/dice1 (2).png',
'./images/dice2 (2).png',
'./images/dice3 (2).png',
'./images/dice4 (2).png',
'./images/dice5 (2).png',
'./images/dice6 (2).png'];

var dice1=Math.floor(Math.random()*6);
var dice2=Math.floor(Math.random()*6);

document.querySelector("#imgd1").setAttribute("src",face_arr[dice1]);
document.querySelector("#imgd2").setAttribute("src",face_arr[dice2]);

if(dice1>dice2){
    document.querySelector("h2").textContent="Player 1 Wins!";
}
else if(dice2>dice1){
    document.querySelector("h2").textContent="Player 2 Wins!";
}
else{
    document.querySelector("h2").textContent="Draw Game";
}

document.querySelector("button").addEventListener("click",function(){
    window.location.reload();

});