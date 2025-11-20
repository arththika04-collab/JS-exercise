function calculateFinalAmount(prices) {
    // Total amount
    const total = prices.reduce((sum, value) => sum + value, 0);
    console.log("Total:", total);
    // 10% discount
    const discount = total * 0.1;
    console.log("Discount:", discount);
    // Final amount after discount
    const finalAmount = total - discount;
    console.log("Final Amount:", finalAmount);
}
// Call the function with array
calculateFinalAmount([80, 120, 360]);