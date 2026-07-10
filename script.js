
window.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Apple Hub!");

    // Buy Now Buttons
    const buttons = document.querySelectorAll(".product-card button");
    console.log("Buttons:", buttons.length);

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            alert("Thank you for shopping with Apple Hub!");
        });
    });

    // Navigation Links
    const links = document.querySelectorAll("a");

    links.forEach((link) => {
        link.addEventListener("click", () => {
            console.log("Navigating...");
        });
    });
});

