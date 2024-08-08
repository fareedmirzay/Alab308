// Part 2: Practical Math
// Let’s look at a more practical scenario.
// You are planning a cross-country road trip!
// The distance of the trip, in total, is 1,500 miles.
// Your car’s fuel efficiency is as follows:
// At 55 miles per hour, you get 30 miles per gallon.
// At 60 miles per hour, you get 28 miles per gallon.
// At 75 miles per hour, you get 23 miles per gallon.
// You have a fuel budget of $175.
// The average cost of fuel is $3 per gallon.
// Set up a program to answer the following questions:
// How many gallons of fuel will you need for the entire trip?
// Will your budget be enough to cover the fuel expense?
// How long will the trip take, in hours?
// Compare the results when traveling at an average of 55, 60, and 75 miles per hour. Which makes the most sense for the trip?
// Log the results of your calculations using string concatenation or template literals.


// Constants
const TotalTripDistance = 1500; // miles
const TheTotalFuelCostPerGallon = 3; // dollars

// Car's fuel efficiency at 60 mph (miles per gallon)
const OurFuelEfficiency60 = 28;

// Fuel budget
const TotalFuelBudget = 175; // dollars

// Calculate the required fuel, cost, and trip duration for 60 mph
const AmountOfGallonsNeeded60 = TotalTripDistance / OurFuelEfficiency60;
const TheFuelCost60 = AmountOfGallonsNeeded60 * TheTotalFuelCostPerGallon;
const TheHoursNeeded60 = TotalTripDistance / 60;

const isBudgetSufficient60 = TheFuelCost60 <= TotalFuelBudget;

// Log the results for 60 mph
console.log(`Traveling at 60 mph:`);
console.log(`Gallons of fuel needed: ${AmountOfGallonsNeeded60.toFixed(2)}`);
console.log(`Total fuel cost: $${TheFuelCost60.toFixed(2)}`);
console.log(`Total trip duration: ${TheHoursNeeded60.toFixed(2)} hours`);
console.log(`Is budget sufficient? ${isBudgetSufficient60}`);
