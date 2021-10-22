//initialize the count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Chnage the count-el in the HTML

let countEl = document.getElementById("count-el");
let count = 0;
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    countEl.textContent = count
};

function save() {
    let upCount = count + " - ";
    saveEl.textContent += upCount;
    countEl.textContent = 0;
    count = 0;

};




