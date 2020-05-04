// week 4, day 2, challange 2 Objects
// Calculate the Profit

function profit(costPrice, sellPrice, inventory) {
  let totalSales = inventory * sellPrice;
  let totalCost = inventory * costPrice;
  let profit = totalSales - totalCost;
  console.log("Your Profit/Loss is " + profit)
};
profit(32.67, 45.00, 1200);
profit(225.89, 550.00, 100);
profit(2.77, 7.95, 8500);