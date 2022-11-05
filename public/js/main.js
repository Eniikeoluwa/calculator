let firstnum;
let secondnum;
let result;
let operator;
let normscreen = document.getElementById('screen')
let upown = document.getElementById('subscreen');
// let normscreen.value = normscreen.value
function show1(params) {
    normscreen.value +=params
}
function sum(params) {
    // upown.value += params
    // upown.value += normscreen.value
    // normscreen.value = eval(upown)
    secondnum = normscreen.value
    if (operator === '+') {
        result = Number(firstnum) + Number(secondnum)
    }
    else if (operator === '*') {
        result = Number(firstnum) * Number(secondnum)
    }
    else if (operator === '-') {
        result = Number(firstnum) - Number(secondnum)

    }
    else if (operator === '/')   {
        result = Number(firstnum) / Number(secondnum)

    }
    else if (operator === 'sqrt') {
        result = Math.sqrt(Number)
    }
    upown.value += normscreen.value
    upown.value += '=';
    normscreen.value = result;  
}
function clear1() {
    normscreen.value ='';
    upown.value ='';
}

function CLS(params) {
    alert('Cant go back')
}
function operate(params) {

    if (upown.value!='' && operator!='' && normscreen.value!='') {
        sum()
        //return;
    }
    firstnum = normscreen.value;
    upown.value = normscreen.value;
    normscreen.value = '';
    normscreen.value +=params;
    operator = normscreen.value
    upown.value += normscreen.value;
    normscreen.value = '';
    // if (upown = Number) {    
    //     secondnum = normscreen.value
    //     upown.value += normscreen.value;
    //     upown.value = result
    //     upown.value = params
    // }
}




