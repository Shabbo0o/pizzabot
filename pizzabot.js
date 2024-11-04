const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

let orderName = "";
let orderQuantity = "";

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`);

function orderPizza(){
    orderName = prompt(`Enter the name of the pizza you want to order today. "Vegetarian", "Hawaiian", or "Pepperoni"`);

    if (!checkOrderName()) {
        alert("Sorry, we don't have this pizza!");
        return;
    }

    orderQuantity = prompt(`How many of ${orderName} Pizza do you want?`);
    console.log(orderName, orderQuantity);

    let total = orderPrice(orderQuantity);
    let estimatedTime = calculateOrderTime(orderQuantity);  

    if (estimatedTime) {
        alert(`Great, I'll get started on your ${orderName.trim()} Pizza right away. It will cost ${total} kr, and the order will take ${estimatedTime} minutes.`);
    } else {
        alert("Please try again and enter a correct quantity.");
    }
}

// Function to calculate the order price
function orderPrice(orderQuantity){
    return orderQuantity * pizzaPrice;
}

// Function to calculate estimated time based on quantity
function calculateOrderTime(orderQuantity) {
    if (orderQuantity > 0 && orderQuantity < 3) {
        return 10;
    } else if (orderQuantity > 2 && orderQuantity < 6) {
        return 15;
    } else if (orderQuantity >= 6) {
        return 20;
    } else {
        return 0;  // Invalid quantity
    }
}

function checkOrderName(){
    if ((orderName.toLowerCase().trim() === "vegetarian" || 
        orderName === "hawaiian" || 
        orderName === "pepperoni")){
            return true;
    } else return false;
}