function solveProblem(){
    const symbols = document.getElementsByClassName("problem").item(0).textContent.split(" "); 
    const num1 = parseInt(symbols[0]);
    const op = symbols[1];
    const num2 = parseInt(symbols[2]);
    if(op == "+"){
        return (num1 + num2).toString();
    }
    if(op == "-"){
        return (num1 - num2).toString();
    }
    if(op == "×"){
        return (num1 * num2).toString();
    }
    if(op == "÷"){
        return (num1 / num2).toString();
    }
}   

const inputbox = document.getElementsByClassName("MuiInputBase-input MuiInput-input").item(0);
const inputbox2 = document.getElementsByClassName("MuiInputBase-root MuiInput-root MuiInput-underline answer").item(0);

function typeans(){
    inputbox2.focus();
    inputbox.value = solveProblem();
}
