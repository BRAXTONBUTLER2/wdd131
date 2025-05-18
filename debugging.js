// Constants
const PI = 3.14;

// Activity 1 – Calculate area directly and log results
let radius = 3;
let area = radius * radius * PI;
console.log(`Activity 1 - Area with radius 3: ${area}`);

radius = 4;
area = radius * radius * PI;
console.log(`Activity 1 - Area with radius 4: ${area}`);

// Activity 2 – Refactor using a function
function circleArea(radius) {
  return PI * radius * radius;
}

let area1 = circleArea(3);
console.log(`Activity 2 - Area from function with radius 3: ${area1}`);

let area2 = circleArea(4);
console.log(`Activity 2 - Area from function with radius 4: ${area2}`);

