function forecastDemand(dailySales) {
  if (!Array.isArray(dailySales) || dailySales.length === 0) {
    throw new Error("Please provide daily sales data.");
  }

  const total = dailySales.reduce((sum, sales) => sum + sales, 0);
  const average = total / dailySales.length;

  return Math.round(average);
}

console.log("Predicted demand:", forecastDemand([18, 20, 22, 19, 24, 21, 23]));