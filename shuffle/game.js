let box_1 = document.querySelectorAll('.box');

let btn = document.querySelector('#btn');

btn.addEventListener('click', only);

function only() {
    empty_arr = [];
    let arr = ['H','M','I','L','R','G','U','A'];

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