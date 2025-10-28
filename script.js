const inputBox = document.getElementById('segment');
const backBox = document.getElementById('base-segment');



if (inputBox.style.width > backBox.style.width) {
    alert('max value');
    inputBox.style.fontSize / 1.5;
}

function fun(active, idset) {
    let equal = ['clear', '/', '×', '+', '-', ''];

    if (active == true && !(idset == undefined)) {
        // alert(`${active} ${idset}`);
        if (!(inputBox.value == '0' || idset == 0)) {
            inputBox.value += equal[idset]
        } else if (idset == 0) {
            inputBox.value = 0; 
        }
    }
    active = false
}

function num(number) {
    // alert(number);
    if (inputBox.value == '0') {
        // inputBox.innerHTML = Number();
        inputBox.value = number;
    } else {
        inputBox.value += number;
    }
}

