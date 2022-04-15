const evaluate = exp => {
    switch(exp.charAt(1)){
        case '+':
            return (exp)=>Number(exp.charAt(0))+Number(exp.charAt(2));
            break;
        case '-':
            return (exp)=>Number(exp.charAt(0))-Number(exp.charAt(2));
            break;
        case '*':
            return (exp)=>Number(exp.charAt(0))*Number(exp.charAt(2));
            break;
        case '/':
            return (exp)=>Number(exp.charAt(0))/Number(exp.charAt(2));
            break;
        case '^':
            return (exp)=>Number(exp.charAt(0))**Number(exp.charAt(2));
            break;
        case '%':
            return (exp)=>Number(exp.charAt(0))%Number(exp.charAt(2));
            break;
    }
}
const  expression  =  '8%3';
let  operator  = evaluate(expression); 
console.log(`${expression}  =  ${operator(expression)}`)