let btn = document.getElementById('btn');
let output = document.getElementById('outputtext');

let num = [Math.floor(Math.random() * 100)];

btn.addEventListener('click', function() {
    let input = document.getElementById('userinput').value;
    if (input == num) {
        output.innerHTML = `You guessed right, your number was ${num}`
    }
    else if (input > num) {
        output.innerHTML = "Your number was high, please try again."
    }
    if (input < nun) {
        output.innerHTML = "Your number was low, please try again."
    }
})