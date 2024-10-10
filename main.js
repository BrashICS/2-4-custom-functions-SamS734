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

function gamble() {

    let player_dice1 = (Math.ceil(Math.random() * 6)); // Basically the roll_d6 function, but twice
    
    let player_dice2 = (Math.ceil(Math.random() * 6));

    let player_number = player_dice1 + player_dice2; // Adds the two dice that were rolled
    
    console.log (`You rolled a ${player_dice1} and a ${player_dice2}.\nIn total, ${player_number}`);

    let house_dice1 = (Math.ceil(Math.random() * 6)); // Same odds

    let house_dice2 = (Math.ceil(Math.random() * 6));

    let house_number = house_dice1 + house_dice2;

    console.log (`The house rolled a ${house_dice1} and a ${house_dice2}.\nIn total, ${house_number}`);

    if (player_number>house_number) { // If your number is higher

        console.log(`Congrats! You rolled a higher number.`);

    }

    if (player_number<house_number) { // If your number was lower
        
        console.log(`Womp Womp. You rolled a lower number than the house.`);

    }

    if (player_number==house_number) { // If your number was the same

        console.log(`You rolled the same number as the house. Try again and gamble some more!!!`);

    }

}


function your_age() { // Calculates your age semi-accurately, it does not factor in the day you were born

    let birth_month = +prompt(`What month were you born in? (in numbers)`);

    let birth_year = +prompt(`What year were you born in?`);

    let year_age = 2024 - birth_year

    if (birth_month>10) { // October is the 10th month
        
        year_age--

    }

    console.log(`You are currently ${year_age} years old. (Unless your birthday is this month and before today)`)

}
 // your_age function is not complete (almost done)