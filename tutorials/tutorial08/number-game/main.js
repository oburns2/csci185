// Global Variables
const secret = Math.floor(Math.random() * 99) + 1;
// document.querySelector('#secret').innerHTML = secret;
let count = 0;


function check() {
    count++;
    document.querySelector('#num-guesses').innerHTML = 'Number of guesses:' + count;
    // your code here.
    // 1. get the number you entered + store it in a variable
let guess = document.querySelector('#guess').value;
    // 2. convert guess to a number
guess = Number(guess);
    // 3. check if they won (compare variable)
            // if guess < secret ---> too low
            // if guess === secret ---> won
            // if otherwise ---> too high
if(guess === secret){
    console.log('You Win!');
    document.querySelector('#message').innerHTML = 'You Win!';
    document.querySelector('#celebrate').className = '';
} else if (guess < secret) {
    console.log('Too Low');
    document.querySelector('#message').innerHTML = 'Too Low!';
    document.querySelector('#celebrate').className = 'hide';
} else {
    console.log ('Too High');
    document.querySelector('#message').innerHTML = 'Too High!';
    document.querySelector('#celebrate').className = 'hide';
}

}