//function: they are the peice of code that takes some input and gives a desired output
// we use the function to improve the code reusability


function hi(name,age) {

    console.log("Hello," +name+" are you "+age+" years old")    
}

hi("Ayush",18);
hi("Saumy");


function addprin(a,b){

    let c= a+b;
    console.log("The sum of "+a +"&"  +b+" is " +c );
}


addprin(5,7);

addprin(6,3);


// function Expresion
// Assigning the function to a variable or const
console.log("function Expresion")

const mulprin = function(a,b){
    let c = a*b;
    console.log("The mul of "+a +"&"  +b+" is " +c )
}

mulprin(3,5);


//Arrow Funtion
// we define the fucntion using the => syntax

const subprint =(a,b)=>{
    let c = a-b;
    console.log("The sub of "+a +"&"  +b+" is " +c ); 

}

console.log(subprint(10,5));

// return statement 
function div(a,b) {
    let c = a/b;

    return c;
    
}


let result = div(10,5);
console.log(result);


// Anonymous Function
//functions without name are used 

setTimeout(function(){
    console.log(" This is an anonymous function");
},3000)

// 1000ms = 1 sec