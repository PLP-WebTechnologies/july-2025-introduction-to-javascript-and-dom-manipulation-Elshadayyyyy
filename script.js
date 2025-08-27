
console.log("Part 1: Mastering JavaScript Basics");

let Name = "Elshaday"; 
let Age = 20;          
let isStuendt = true;      
console.log("User Name: " + Name);
console.log("User Age: " + Age);   
console.log("Is Student: " + isStuendt);     

function askAge() {
  let age = prompt("Enter your age:");
  if (age >= 18) {
    alert("You are an adult");
  } else {
    alert("You are a minor");
  }
}

console.log("Part 2: JavaScript Functions — The Heart of Reusability");

// Function to calculate the total price of some item you want to buy
function calculateTotal(price, quantity) {
  return price * quantity;
}
console.log("Total price: " + calculateTotal(50, 3));

function toggleMessage() {
  let msg = document.getElementById("message");
  msg.style.display = (msg.style.display === "none") ? "block" : "none";
}


console.log("Part 3: JavaScript Loops — Embrace the Power of Repetition!");

for (let i = 5; i >= 1; i--) {
  console.log("Countdown for part 4: " + i);
}

let counter = 1;
while (counter < 4) {
  console.log("okay one more count down with while loop iteration : " + counter);
  counter++;
}

console.log("Part 4: Mastering the DOM with JavaScript the change title and add list items part ");

document.getElementById("changeTitle").addEventListener("click", function() {
  document.getElementById("title").textContent = "Title changed by manipulating the dom with JavaScript!";
});


let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];
fruits.forEach(function(fruit) {
  let li = document.createElement("li");
  li.textContent = fruit;
  document.getElementById("list").appendChild(li);
});
