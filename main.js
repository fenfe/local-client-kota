class ShoppingCart {
    constructor() {
        // State: Factory default allocation of a structured data matrix inside RAM
        this.items = [];
        this._discount = 0;
    }

    // Ticket SHOP-404 Win: Duplicate-Aware Bulk Quantity Engine
    addItem(itemName, price) {
        let matchedItem = this.items.find(item => item.name === itemName);
        
        if (!matchedItem) {
            // First time adding: Push a fresh, type-safe structured object card into memory
            this.items.push({ name: itemName, price: Number(price), quantity: 1 });
        } else {
            // Duplicate found: Locate the live reference keychain and tick the counter up
            matchedItem.quantity += 1;
        }
    }

    // Ticket SHOP-405 Win: Quantity-Aware Accumulator Engine
    getCartTotal() {
        let grandTotal = 0;
        if(this.items.length === 0){
            return grandTotal;
        }
        this.items.forEach(item => {
            let itemCost = item.price * item.quantity;
            grandTotal += itemCost;
        });
        return grandTotal;
}

    // The Secure Setter Guard Rail Module
    set activeDiscount(num){
        if(num < 0 || num > 100){
            // console.log('Security Alert: Rejected invalid discount amount! ');
            return;
        }
        this._discount = num;
    }
    // Ticket SHOP-403 Win: Dynamic Discount Verification Engine
    applyDiscount(percentage) {
        const originalTotal = this.getCartTotal();

        if (percentage < 0 || percentage > 100) {
            // console.log("Error: Invalid discount percentage requested!");
            return originalTotal;
        }

        const finalTotal = originalTotal * (1 - (percentage / 100));
        return finalTotal;
    }

    // Ticket SHOP-402 Win: Surgical Item Eraser Module
    removeItem(itemName) {
        const targetIndex = this.items.findIndex(item => item.name === itemName);
        
        if (targetIndex !== -1) {
            this.items.splice(targetIndex, 1);
        } else {
            console.log("Error: Product name not found in repository!");
        }
    }

    // Ticket SHOP-407 : Implement Total Item-Quantity Accumulator Engine
    getCartItemCount(){
        let totalCartItems = 0;

        this.items.forEach((obj) => {
            totalCartItems += obj.quantity;
        });
        return totalCartItems;
    }
    // Adding the getters and setters
   get itemQuantity(){
        let totalCartItems = 0;
        this.items.forEach((obj) => {
            totalCartItems += obj.quantity;
        })
        return totalCartItems;
    }
      // The Secure Setter Guard Rail Module
      set activeDiscount(num){
        if(num < 0 || num > 100){
            // console.log('Security Alert: Rejected invalid discount amount! ');
            return;
        }
        this._discount = num;
    }
    // Ticket SHOP-408 : Implement Fail-Safe Cart Cleansing Reset Module
    resetCart(){
        if(this.items.length === 0){
            return;
        }
            this.items = [];
    }
    
}

// ======================================================================
// INTEGRATION SANDBOX (Wired outside the class for browser event hooks)
// ======================================================================
// For html nav buttons
document.getElementById('kotaBtn').addEventListener('click' , function(){
        document.getElementById('kotas').scrollIntoView({ behavior: 'smooth' });
})
document.getElementById('burgerBtn').addEventListener('click' , function(){
    document.getElementById('burgers').scrollIntoView({ behavior: 'smooth' });
})
document.getElementById('sidesBtn').addEventListener('click' , function(){
    document.getElementById('sides').scrollIntoView({ behavior: 'smooth' });
})
// For targeting all article btns and numeric quantity spans
const minusButtons = document.querySelectorAll('.minus');
const plusButtons = document.querySelectorAll('.plus');
const quantityDisplay = document.querySelectorAll('.quantity')
console.log(quantityDisplay);
// Targeting footer interactivity


const myCart = new ShoppingCart();
const addBtn = document.querySelector('#add-button');//grab btn
const displayTotal = document.getElementById('total-price-view') // grab view

// Guard rail: Only wire up event loops if the physical HTML nodes exist on screen
if (addBtn && displayTotal) {
    addBtn.addEventListener('click', () => {
        // Test simulation: Add a standard item to change the state tracker
        myCart.addItem("Kota", 30);
        myCart.addItem("drink", 18);

        displayTotal.textContent = `R${myCart.getCartTotal()}`;
    });
}

///////
const setTest = new ShoppingCart();
setTest.activeDiscount = 500;
// console.log("Discount after hack attempt:", setTest._discount);
setTest.activeDiscount = 20; 
// console.log("Discount after valid assignment:", setTest._discount);






