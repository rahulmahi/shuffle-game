let box_1 = document.querySelectorAll('.box');

let btn = document.querySelector('#btn');

btn.addEventListener('click', only);

var attempts = document.querySelector('#attempt');

var attempt = 0;

function only() {

    attempt += 1;
    empty_arr = [];
    let arr = ['H', 'M', 'E', 'L', 'R', 'G', 'U', 'A'];

    for (let i = 0; i < arr.length; i++) {

        while (empty_arr.length < 8) {
            let random = parseInt(Math.random() * arr.length);
            if (!(empty_arr.includes(arr[random]))) {
                empty_arr[i] = arr[random];
                break;
            }
        }
        box_1[i].innerHTML = empty_arr[i];
        //console.log(empty_arr);
    }
}

var btn_click = document.querySelector('#btn-click');

var val = document.querySelector('#input-box-val');

var arr = ['large', 'merge', 'leg', 'real', 'hema', 'mega', 'ug', 'age', 'me'];

btn_click.addEventListener('click', only1);

var points_val = document.querySelector('#points');

var points = 0;

var array = [];

function only1() {
    var input_box = document.querySelector('#input-box1');
    val_box = input_box.value;
    for (let i = 0; i < arr.length; i++) {
        if (!(array.includes(arr[i]))) {
            if (val_box == arr[i]) {
                val.innerHTML += val_box + "<br>";
                array.push(val_box);
                console.log(array);
                points += 2;
                points_val.textContent = 'SCORE : ' + points;
            }
        }
    }
    input_box.value = "";
    console.log(input_box);
}

var over_btn = document.querySelector('#over-btn');

var scores = document.querySelector('#score');

over_btn.addEventListener('click',only2)

    function only2(){
        attempts.textContent = 'ATTEMPT : ' + attempt;
        scores.textContent = 'SCORE : ' + points;
        array = [];
    }