let num1=parseInt(prompt("enter num 1"));
let num2=parseInt(prompt("enter num 2"));
let opr=prompt("enter operation");
let result;
switch(opr){
    case '+':
        result=num1+num2;
        break;
    case '-':
        result=num1-num2;
        break;
    case '*':
        result=num1*num2;
        break;
    case '/':
        if(num2==0){
            console.log("cant divide by zero");
            break;
        }
        result=num1/num2;
        break;
    default:
        console.log("invalid operation");
    
}
console.log('result is '+result);