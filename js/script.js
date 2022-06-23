// definire le variabili che mi servono 
// ciclo for per stampare numeri fino a che arrivo a 100
// gestire con il ciclo if else se un numero e divisibile per 3 per 5 o per entrambi 
// cambiare in quel caso l'output a seconda se e divisibile per 3 per 5 o entrambi 

// #VARIABLES DEFINITION 
const div5 = 5;
const div3 = 3;
let numString = "<ul>";
const blackboard = document.getElementById("board")
// #  for CICLE
for(let i = 1 ; i <= 100 ; i++){
    
    // condizione di divisibilita'
    if  ((i % div3 == 0) && (i % div5 == 0)){
        numString += `<li id="fb">FizzBuzz</li>`  ;
    } else if (i % div5 == 0){
        numString += `<li id="b">Fizz</li>`
    } else if(i % div3 == 0 ){
        numString += `<li id="f">Buzz</li>`
    }else{
        numString += `<li>${i}</li>`   ;
    }

    
}
// COMPLETE THE NUMBER STRING
numString += "</ul>";
console.log(numString);
// //  PAGE VISUALIZATION
blackboard.innerHTML = numString;