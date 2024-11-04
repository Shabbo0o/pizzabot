const vegetarian = "Vegetarian Pizza";
const hawaiian = "Hawaiian Pizza";
const pepperoni = "Pepperoni Pizza";
const pizzaPrice = 80;

let orderName = "";
let orderQuantity = "";

alert(`Hey! Happy to serve your pizza. On our menu we have ${vegetarian}, ${hawaiian}, and ${pepperoni}`);

function orderPizza() {
    const pizzaSelection = document.querySelector('input[name="pizzaSelection"]:checked').value;
    const pizzaQuantity = document.getElementById("pizzaQuantity").value;
    if (pizzaQuantity <= 0) {
        alert("Please enter a valid quantity.");
        return;
    }

    const totalCost = orderPrice(pizzaQuantity);
    const estimatedTime = calculateOrderTime(pizzaQuantity);
    alert(`Great, I'll get started on your ${pizzaSelection} Pizza right away. It will cost ${totalCost} kr, and the order will take ${estimatedTime} minutes.`);
}

function orderPrice(orderQuantity){
    return orderQuantity * pizzaPrice;
}

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
