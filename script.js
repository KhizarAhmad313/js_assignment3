console.log("-------------------------------------------------------");
console.log("Conditions");
console.log("-------------------------------------------------------");
console.log("-----If Condition-----");
{
  let age = 23;
  if (age >= 18) {
    console.log("Voting is allowed");
  }
}

console.log("-----If-else Condition-----");
{
  let age = 17;
  if (age >= 18) {
    console.log("Voting is Allowed");
  } else {
    console.log("Voting is not allowed because you are minor");
  }
}

console.log("-----nested If Condition-----");
{
  let age = 151;
  if (age >= 18) {
    if (age >= 150) {
      console.log("Voting is not allowed because maximum age limit of is 150");
    }
  } else {
    console.log("Voting is not allowed because you are minor");
  }
}

console.log("-----If-else if Condition-----");
{
  let age = 15;
  if (age >= 18) {
    console.log("Voting is allowed");
  } else if (age >= 150) {
    console.log("Voting is not allowed because maximum age limit of is 150");
  } else {
    console.log("Voting in no allowe because you are child");
  }
}

console.log("-------------------------------------------------------");
console.log("Loops");
console.log("-------------------------------------------------------");
console.log("-----for loop-----");
for (let i = 1; i <= 10; i++) {
  console.log("5 * " + i + " = " + i * 5);
}
console.log("-----while loop-----");
let i = 1;
while (i < 10) {
  console.log(i);
  i++;
}
{
  console.log("----- Do while loop-----");
  let i = 11;
  do {
    console.log("Loop terminated : " + i);
    i++;
  } while (i < 10);
}

console.log("-------------------------------------------------------");
console.log("Switch Cases");
console.log("-------------------------------------------------------");

let day = prompt(`Enter numbers between 1-7`);
switch (+day) {
  case 1:
    console.log(day + " day of the week is Sunday");
    break;
  case 2:
    console.log(day + " day of the week is Monday");
    break;
  case 3:
    console.log(day + " day of the week is Tuesday");
    break;
  case 4:
    console.log(day + " day of the week is Wednesday");
    break;
  case 5:
    console.log(day + " day of the week is Thursday");
    break;
  case 6:
    console.log(day + " day of the week is Friday");
    break;
  case 7:
    console.log(day + " day of the week is Saturday");
    break;
  default: {
    console.log(
      "You have entered wrong number please enter number only between 1 to 7"
    );
  }
}
