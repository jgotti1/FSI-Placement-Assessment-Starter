// HINT: You can delete this console.log after you no longer need it!
// First, tell us your name
let yourName = "John Margotti" // HINT: Replace this with your own name!

// selecting the element with an id of credit
let credit = document.querySelector('#credit')

// Code to update name display
document.querySelector('#credit').textContent =  `Created by ${yourName}`;

// We'll use these variables to track the counts of each cookie type
let gb = 0 // Gingerbread
let cc = 0 // Chocolate Chip
let sugar = 0 // Sugar Sprinkle

// selecting the element with an id of add and minus for all
let gbPlusBtn = document.querySelector('#add-gb')
let gbMinusBtn = document.querySelector('#minus-gb')
let ccPlusBtn = document.querySelector('#add-cc')
let ccMinusBtn = document.querySelector('#minus-cc')
let sugarPlusBtn = document.querySelector('#add-sugar')
let sugarMinusBtn = document.querySelector('#minus-sugar')

// Event listener for clicks on the "+"  buttons for All cookies
gbPlusBtn.addEventListener('click', function() {
    gb = gb + 1;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-gb').textContent = gb;

})
sugarPlusBtn.addEventListener('click', function() {
    sugar = sugar + 1;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-sugar').textContent = sugar;

})

ccPlusBtn.addEventListener('click', function() {
    cc = cc + 1;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-cc').textContent = cc;

})

// Event listener for clicks on the "-"  buttons for All cookies

gbMinusBtn.addEventListener('click', function() {
    gb = gb - 1;
    if (gb < 0) gb=0
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-gb').textContent = gb;

})
sugarMinusBtn.addEventListener('click', function() {
    sugar = sugar - 1;
    if (sugar < 0) sugar = 0
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-sugar').textContent = sugar;

})

ccMinusBtn.addEventListener('click', function() {
    cc = cc - 1;
    if (cc < 0) cc=0;
    document.querySelector('#qty-total').textContent = gb + cc + sugar;
    document.querySelector('#qty-cc').textContent = cc;

})