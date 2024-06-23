let string="";
let history_entry = "";
let buttons = document.querySelectorAll('.append');
let screen = document.querySelector('input');
let history = JSON.parse(localStorage.getItem('history')) || [];

function squareRoot(){
    if(screen.value == ""){
        screen.value = 0;
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.sqrt(num);
    history_entry = "√" +history_entry+" = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}
function pi(){
    var num = '3.141592';
    string = string + num;
    screen.value = screen.value+num;
    history_entry += num;
}

function exponent(){
    var num = '2.718281';
    string = string + num;
    screen.value = screen.value+ num;
    history_entry += num;
}

function clearAll(){
    string = "";
    history_entry = "";
    screen.value=string;
}

function backspace(){
    string = string.slice(0, -1);
    history_entry = history_entry.slice(0, -1);
    screen.value=string;
}

function cube(){
    if(screen.value == ""){
        screen.value = 0;
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.pow(num, 3);
    history_entry += "³ = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function inverse(){
    if(screen.value == ""){
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = 1/num;
    history_entry = "1/"+history_entry+" = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function absoluteValue(){
    if(screen.value == ""){
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.abs(num);
    history_entry = "|"+history_entry+"| = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function powerOf2(){
    if(screen.value == ""){
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.pow(2, num);
    history_entry = "2^"+history_entry+" = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function modulo(){
    var num= screen.value.split("mod");
    var num1 = Number(num[0]);
    var num2 = Number(num[1]);
    screen.value = num1 % num2;
    history_entry = num1+" mod "+num2+" = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function square(){
    if(screen.value == ""){
        screen.value = 0;
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.pow(num, 2);
    history_entry += "² = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function fact(n){
    let ans = 1; 
    
    if(n === 0)
        return 1;
    for (let i = 2; i <= n; i++) 
        ans = ans * i; 
    return ans; 
}

function factorial(){
    if(screen.value == ""){
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = fact(num);
    history_entry += "! = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function pow(){
    const num= screen.value.split("^");
    var num1 = Number(num[0]);
    var num2 = Number(num[1]);
    screen.value = Math.pow(num1, num2);
    history_entry = num1+" ^ "+num2+" = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function powerOf10(){
    var num = Number(screen.value);
    screen.value = Math.pow(10, num); 
    history_entry = "10^"+history_entry+" = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function logToBase10(){
    if(isNaN(screen.value) || Number(screen.value < 0)){
        screen.value = "Invalid operation";
        return;
    }
    if(screen.value == ""){
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.log10(num); 
    history_entry = "log("+history_entry+") = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function naturalLog(){
    if(isNaN(screen.value) || Number(screen.value < 0)){
        screen.value = "Invalid operation";
        return;
    }
    if(screen.value == ""){
        history_entry = 0;
    }
    var num = Number(screen.value);
    screen.value = Math.log(num);
    history_entry = "ln("+history_entry+") = "+screen.value;
    history.push(history_entry);
    history_entry = "";
    localStorage.setItem('history', JSON.stringify(history));
    displayHistory();
}

function signChange(){
    if(isNaN(screen.value)){
        screen.value = "Invalid operation";
        return;
    }
    var num1 = Number(screen.value);
    num2 = num1 * (-1);
    string = num2;
    screen.value = num2;
    history_entry = num2;
}


Array.from(buttons).forEach(button =>{
    button.addEventListener('click', (e) =>{
        debugger;
        if(e.target.innerHTML== '='){
            if(screen.value.includes('^')){
                pow();
                return;
            }
            if(screen.value.includes('mod')){
                modulo();
                return;
            }
            if(string==""){
                debugger;
                return;
            }
            string = eval(string);
            screen.value=string;

            history_entry += "="+string;
            history.push(history_entry);
            history_entry = "";
            localStorage.setItem('history', JSON.stringify(history));
            displayHistory();
        }
        else{
            history_entry += e.target.innerHTML;
            string += e.target.innerHTML;
            screen.value=string;
        }
    });
});

function displayHistory() {
    const historyContainer = document.querySelector('.history-container');
    const offcanvasHistoryContainer = document.querySelector('.offcanvas-history-container');

    historyContainer.innerHTML = '';
    offcanvasHistoryContainer.innerHTML = '';
    history.slice().reverse().forEach(calc => {
        const div1 = document.createElement('div');
        div1.classList.add('calculation');
        div1.textContent = calc;

        const div2 = document.createElement('div');
        div2.classList.add('calculation');
        div2.textContent = calc;

        historyContainer.appendChild(div1);
        offcanvasHistoryContainer.appendChild(div2);
    });
}
displayHistory();



function clearHistory(){
    history = [];
    localStorage.removeItem('history');
    displayHistory();
}