# Pizzabot 🍕

Pizzabot is an interactive, browser-based pizza ordering bot developed with JavaScript and HTML. It allows users to select a pizza type, specify quantity, calculates the total cost, and provides an estimated preparation time based on the order.

## 📝 Features
- **Friendly Greeting**: Greets customers and presents the pizza options on the menu.
- **Pizza Selection**: Offers three types of pizzas: Vegetarian, Hawaiian, and Pepperoni.
- **Order Quantity**: Accepts and processes the desired quantity of pizzas.
- **Cost Calculation**: Computes the total price based on quantity.
- **Preparation Time**: Estimates preparation time based on order size, providing feedback for a smooth user experience.

## 🚀 Technologies Used
- **HTML**: Provides the structure and layout for the bot’s interface.
- **JavaScript**: Implements interactive logic and order processing.
- **CSS**: Adds styling for an improved user interface.

## 📁 Project Structure

```plaintext
pizzabot/
├── index-prompt.html      # HTML file with button to start the bot
├── pizzabot-prompt.js     # JavaScript file for prompt-based interaction
├── index-prompt.html      # HTML file with a friendly user interface to make an order
├── pizzabot-getElement.js # JavaScript file for DOM-based interaction (getElementById)
├── style.css              # CSS file for styling
└── README.md              # Project documentation
```
# 💻 Code Overview
## pizzabot-prompt.js
This version of Pizzabot uses prompt() to interact with the user:
- **Pizza Menu**: Defines the available pizza types (vegetarian, hawaiian, pepperoni) and sets a base price per pizza.
- **orderPizza()**: Main function is called when the "Order Pizza" button is clicked.
- Prompts for the pizza name and quantity.
- Checks if the pizza name exists (case-insensitive).
- Calculates total cost and estimated preparation time.
- Displays an alert summarizing the order details.
- **orderPrice()**: Calculates the total cost based on the number of pizzas ordered.
- **calculateOrderTime()**: Determines order time based on quantity:
- 1-2 pizzas: 10 minutes
- 3-5 pizzas: 15 minutes
- 6 or more pizzas: 20 minutes
## pizzabot-get-element.js
This version of Pizzabot uses getElementById and querySelector to interact with the user’s input on the HTML form:
- **orderPizza()**: The main function is called when the "Order Pizza" button is clicked. It:
- Retrieves the selected pizza type using querySelector and the entered quantity using getElementById.
- Validates the quantity input to ensure it's greater than zero.
- Calculates the total cost and estimated preparation time.
- Displays an alert summarizing the order details.
- **orderPrice()** and **calculateOrderTime()**: These functions perform the same role as in the prompt-based version.
# 🛠️ How to Run the Project
1. Clone or download the repository.
2. Open `index-prompt.html` in a web browser to see the prompt version or open `index-get-element.html` to see the getElement version.

![Demo](/images/demo.png)
