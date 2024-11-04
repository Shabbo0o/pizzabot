# Pizzabot 🍕

Pizzabot is an interactive, browser-based pizza ordering bot developed with JavaScript and HTML. It allows users to select a pizza type, specify quantity, calculates the total cost, and provides an estimated preparation time based on the order.

## 📝 Features
- Greets the customer with available pizza options.
- Accepts an order for different types of pizzas: Vegetarian, Hawaiian, or Pepperoni.
- Calculates the total cost of the order based on quantity.
- Estimates preparation time based on order size.

## 🚀 Technologies Used
- **HTML**: Provides the basic structure of the webpage.
- **JavaScript**: Implements the bot’s interactive logic and order processing.

## 📁 Project Structure

```plaintext
pizzabot/
├── index.html       # Main HTML file with a button to start the bot
├── pizzabot.js      # JavaScript file containing bot logic
├── style.css        # CSS file containing style
└── README.md        # Project documentation
```
# 💻 Code Overview
## pizzabot.js
- **Pizza Menu**: Defines the available pizza types (vegetarian, hawaiian, pepperoni) and sets a base price per pizza.
- **orderPizza()**: Main function called when the "Order Pizza" button is clicked.
Prompts for the pizza name and quantity.
Checks if the pizza name exists (case-insensitive).
Calculates total cost and estimated preparation time.
- **calculateOrderTime()**: Determines order time based on quantity:
- 1-2 pizzas: 10 minutes
- 3-5 pizzas: 15 minutes
- 6 or more pizzas: 20 minutes