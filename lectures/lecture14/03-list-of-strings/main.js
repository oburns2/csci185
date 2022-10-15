const names = [
    "Jane", "Brenda", "Wanda", "Maria", "Jasper",
    "John", "Malik", "Arjun", "Larry", "Curly", "Moe"
];


// use a while loop to output a message for each
// item in the array:
const outputElement = document.querySelector('#output');
let i = 0;
while (i < 10) {
outputElement.innerHTML += `<p>Welcome, ${names[++i]}!</p>`;
outputElement.innerHTML += `<p>Welcome, ${names[++i]}!</p>`;
outputElement.innerHTML += `<p>Welcome, ${names[++i]}!</p>`;
outputElement.innerHTML += `<p>Welcome, ${names[++i]}!</p>`;
outputElement.innerHTML += `<p>Welcome, ${names[++i]}!</p>`;
}