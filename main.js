/**
 * 2.4 - Custom Functions
 * ICS3 - Mr. Brash 🐿️
 * 
 * Read README.md and YOUR_Task.md 
 * 
 * This is a playground. Feel free to play.
 **/ 


// Example custom function using Number() and prompt()
function circle_area() {

    let radius = Number(prompt("What is the radius of the circle?"));

    console.log(`The area is: ${Math.PI * radius**2}`);

}


/*****  Your code goes below  *****/

// TASK PART 1

function to_fahrenheit() {

    let celsius = +prompt("What is the temperature in Celsius?");

    let fahrenheit = (celsius * 9/5) + 32; // Fahrenheit = (Celsius * 9/5) + 32

    console.log(`${celsius}° Celsius is equal to ${fahrenheit}° Fahrenheit.`);

}


// TASK PART 2

function to_celsius() {

    let fahrenheit = +prompt("What is the temperature in Fahrenheit?");

    let celsius = (fahrenheit - 32) * 5/9; // Celsius = (Fahrenheit - 32) * 5/9

    console.log(`${fahrenheit}° Fahrenheit is equal to ${celsius}° Celsius.`);

}


// TASK PART 3

function roll_d10() {

    console.log(Math.ceil(Math.random() * 10)); // Rounds up so the values will be from 1-10

}


// TASK PART 4

function roll_d6() {

    console.log(Math.ceil(Math.random() * 6)); // 1-6 instead of 1-10

}


// TASK PART 5

function gamble1() {

    let player_number = (Math.ceil(Math.random() * 12)); // basically two dice

    console.log (`You rolled a ${player_number}`)

}


function gamble2() {

    let house_number = (Math.ceil(Math.random() * 12));

    if (player_number > house_number)

        console.log(`Congrats! Your number is higher. You rolled a ${player_number} and the house rolled a ${house_number}`)

    if (player_number < house_number)

    console.log(`Womp Womp. You only rolled a ${player_number} while the house rolled a $`)

}

// not done yet