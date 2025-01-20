// Conditional Statement 
//if else statement
let a = 10;

if(a>18){
    console.log("The age is valid");
}else{
    console.log("The age is not valid");
}


// if elseif else statement
let b= 9
if (a>b) {

    console.log("A is greater")
    
}else if(a==b){
    console.log("A and B are same value");

}else{
    console.log("B is greater");
}


//Switch statement

let d = 2;

switch(d){
    case 1:
        console.log("monday")
    break;
    case 2:
        console.log("tuesday");
    break;
    case 3:
        console.log("wednesday");
    break;
}


let e = 3;
let f = 4;
let g = "*";
switch (g) {
    case "-":
        console.log(e-f);
        
        break;
    case "+":
        console.log(e+f);

        break;

    default:
        console.log("The operation does not exist");
        break;
}