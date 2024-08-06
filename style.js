//TO
let string = "";
let buttons = document.querySelectorAll('.btn');
let input = document.getElementById("display");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', function (e) {
        if (e.target.innerHTML == "=") {
            string = eval(string);
            input.value = string;
        }
        else if (e.target.innerHTML == "%") {
            string = (eval(string) / 100);
            input.value = string;
        }
        else if (e.target.innerHTML == "C") {
            string = "";
            input.value = string;
        }
        else if (e.target.innerHTML == "←") {
            input.value = input.value.slice(0, -1);
            string = input.value;
        }
        else {
            console.log(e.target);
            string = string + e.target.innerHTML;
            input.value = string;
        }
    })
})