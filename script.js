const inputBox = document.getElementById('segment');
const inputBox2 = document.getElementById('segment2');
const inputBox3 = document.getElementById('segment3');
const backBox = document.getElementById('base-segment');
let checkValue = false, saveMemory = 0, saveOp = 0;



function fun(active, OP, idset) {
    let equal = ['clear', '/', 'x', '+', '-', ''], x, Memory = idset;
    if (active == true && !(idset == undefined) && !(Memory == undefined || Memory == null)) {
        // alert(`${active} ${idset}`);
        if (!(inputBox.innerHTML == '0' || OP == 0)) {
            inputBox2.innerHTML += equal[OP];
            checkValue = true;
            // alert(OpFix);
            if(idset == 5){
                switch (OP) {
                case 1:
                    saveMemory = inputBox.innerHTML / inputBox3.innerHTML;
                    console.log('/')
                    break;
                case 2:
                    saveMemory = inputBox.innerHTML * inputBox3.innerHTML;
                    console.log('X');
                    break;
                case 3:
                    saveMemory += Number(inputBox.innerHTML) + Number(inputBox3.innerHTML);
                    console.log('+');
                    break;
                case 4:
                    saveMemory = inputBox.innerHTML - inputBox3.innerHTML;
                    console.log('-');
                    break;
                default:
                    console.log('Error system')
                    break;
            }
            
            console.log('nothing Oparator Option...!' + idset);
            console.log(inputBox.innerHTML);
            console.log(inputBox3.innerHTML);
            x = Number(inputBox.innerHTML);
            inputBox.innerHTML = saveMemory;
            inputBox2.innerHTML = '';
            inputBox3.innerHTML = '';
            console.log(saveMemory);
            checkValue = false;
            }

        } else if (active == true && idset == 0) {
            inputBox.innerHTML = 0;
            inputBox2.innerHTML = '';
            inputBox3.innerHTML = '';
            checkValue = false;
        }
    }
}

function num(number) {
    // alert(number);
    if (checkValue == false) {
        if (inputBox.innerHTML == '0') {
            // inputBox.innerHTML.innerHTML = Number();
            inputBox.innerHTML = `${number}`;
            console.log('checked')
        } else {
            inputBox.innerHTML += `${number}`;
        }
    } else {
        if (inputBox3.innerHTML == '0') {
            // inputBox.innerHTML.innerHTML = Number();
            inputBox3.innerHTML = `${number}`;
        } else {
            inputBox3.innerHTML += `${number}`;
        }
    }
}

