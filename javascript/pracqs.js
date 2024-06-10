// Check whether numbers 145 and -145 are positive/Negative or Zero 
// let a=11;
// if(a>0){
//     console.log(a+" is positive");
// }
// if(a<0){
//     console.log(a+ " is negative");
// }
// if(a==0){
//     console.log(a+" is zero");
// }

// Check number is Odd/even 
// if(a%2==0){
//     console.log(a+" is even");
// }
// else{
//     console.log(a+" is odd");
// }

// Program on switch statement: add, substract, divide, multiply 
let a=int(prompt("Enter 1st number"));
let b=int(prompt("Enter 2nd number"));
let choice=prompt("Enter operation")
switch(choice){
    case '+':
        let c=a+b;
        alert(c);
        break;
    case '-':
        alert(a-b);
        break;
    case '*':
        alert(a*b);
        break;
    case '/':
        alert(a/b);
        break;
    default:
        alert("enter a valid operation");
        break;
}