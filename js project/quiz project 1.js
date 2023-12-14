const prompt = require("prompt-sync")();

console.log('WELCOME TO THE QUIZ PROGRAM !');



const name = prompt('enter your name : ');

console.log('let the quiz began');

let score = 0;


const question1 = prompt("what is the brain of the computer?");
const answer1 = ("CPU");

if(question1.toUpperCase()===answer1){
    console.log('your answer is correct');
    score++;
}else{
    console.log('your answer is wrong');
}





const question2 = prompt("What is the capital city of india ? ");
const answer2 = ("DELHI");

if(question2.toUpperCase()===answer2){
    console.log('your answer is correct');
    score++;
}else{
    console.log('your answer is wrong');





}
const question3 = prompt("What is the name of the planet we live on?");
const answer3 = ("EARTH");

if(question3.toUpperCase()===answer3){
    console.log('your answer is correct');
    score++;
}else{
    console.log('your answer is wrong');
}





const question4 = prompt("Who was the first President of India?");
const answer4 = ("DR RAJENDER PRASAD");

if(question4.toUpperCase()===answer4){
    console.log('your answer is correct');
    score++;
}else{
    console.log('your answer is wrong');
}





const question5 = prompt("Who was the first Prime Minister of India?");
const answer5 = ("JAWARLAL NEHRU");

if(question5.toUpperCase()===answer5){
    console.log('your answer is correct');
    score++;
}else{
    console.log('your answer is wrong');
}

percentage= (score/5)*100;
  

console.log('congratulation on completing  the quiz!')
console.log(name,'your total score is',score)
console.log('ratio of correct answer scored by',name,'is',percentage.toString()+"%")











