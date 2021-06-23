const raining = false;
const cold = true;

/* if (raining) {
    console.log("Dont't forget your umbrella!");
}

if (cold) {
    console.log("Make sure you pick out a scarf!")
}
console.log("Now you are ready to go outside!")
*/

const temperature = -50;

if (temperature < 0 ) {
    console.log("Make sure you pick out a scarf!")
} else if (temperature < 15 ) {
    console.log("Short sleeves wont't cut it!")
 } else {
     console.log("Short sleeves are fine!")
 }

 console.log("Now you are ready to go!")

 const isCitizen = true;
 const age = 12;

 if (isCitizen && age > 18) {
     console.log("You are eligible to vote.")
 } else {
     console.log("You are still not eligible to vote.")
 }

 

 if (temperature < -40 || temperature > 40) {
     console.log("Not the best time to go outside.")
 }

 if (!raining) {
    console.log("Leave your umbrella at home!");
  }
  