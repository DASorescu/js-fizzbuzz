// definire le variabili che mi servono 
// ciclo for per stampare numeri fino a che arrivo a 100
// gestire con il ciclo if else se un numero e divisibile per 3 per 5 o per entrambi 
// cambiare in quel caso l'output a seconda se e divisibile per 3 per 5 o entrambi 

// #definisco le variabili da usare per i criteri di divisibilita'
const div5 = 5;
const div3 = 3;
let numString = "";

// # ciclo for 
for(let i = 1 ; i <= 100 ; i++){
    
    // condizione di divisibilita'
    if  ((i % div3 == 0) && (i % div5 == 0)){
        numString += " FizzBuzz" ;
    } else if (i % div5 == 0){
        numString += " buzz"
    } else if(i % div3 == 0 ){
        numString += " Fizz"
    }else{
        numString += " "+ i  ;
    }

    
}

console.log(numString);