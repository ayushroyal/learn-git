

a = 'ayush swami' ;
b =  'yo';
console.log(a);

console.log(b);




//let name = "mosh";
//let age = 30;

let person = {name:'mosh',age : 30};

console.log(person);
console.log(person.name);



    // dot notation

person.name='          Ayush ';



console.log(person.name);
console.log(person.name);
 



    // bracket notation

person['name']= 'marry';

console.log(person.name);
console.log(person.age);



//////////////Array/////////////////////////////////////////////////



let selectedcolour = ['red','blue'];

console.log(selectedcolour);
console.log(selectedcolour[0]);

selectedcolour[2]='white';

console.log(selectedcolour);
console.log(selectedcolour[2]);



console.log(selectedcolour.lastIndexOf);
console.log(selectedcolour.shift);
console.log(selectedcolour.length);
console.log(selectedcolour.length);
console.log(selectedcolour.length);
console.log(selectedcolour.includes);
console.log(selectedcolour.lastIndexOf);
    
console.log(selectedcolour[0]);













//  *PERFORMING A TASK*   //






// 1 st way
function green () {console.log('hlo');}

green();




// name not same in function




// 2nd and addition can be done ;

function greet (name = "name not selected",lastname = "lastname not selected") {
    console.log('hlo'+'  '+ name +'  '+lastname);}


    greet("ayush");

greet('ayush','swami');


greet();

 


// CALCULATION OF A VALUE  //  FUNTION

function triangle(number){
    return number*number*number;
}


 //triangle(3) double bracket ; no use ;


console.log(triangle(2));













let letter ;
switch (s[0]){
    case('a' || 'e' || 'o' || 'i' || 'u'):
        letter = 'A';
        break;
    case('b'||'c'||'d'||'f'||'g'):
        letter= 'B';
        break;
    case('h'||'j'||'k'||'l'||'m'):
        letter= 'C';
        break;
    case('n'||'p'||'q'||'r'||'s'||'t'||'v'||'w'||'x'||'y'||'z'):
        letter= 'D';
 }
return letter;




















