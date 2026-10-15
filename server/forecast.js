function forecastDemand(dailySales, horizon = 7) {
  if (
    !Array.isArray(dailySales) ||
    dailySales.length < 7 ||
    !dailySales.every(
      (value) =>
        typeof value === "number" &&
        Number.isFinite(value) &&
        value >= 0
    )
  ) {
    throw new Error("Please provide at least 7 valid days of sales.");
  }

  const lastSevenDays = dailySales.slice(-7);
  const average =
    lastSevenDays.reduce((sum, sales) => sum + sales, 0) / 7;

  return Array.from({ length: horizon }, (_, index) => ({
    day: index + 1,
    predictedQuantity: Math.round(average),
  }));
}

module.exports = forecastDemand;

const sales = [18, 20, 22, 19, 24, 21, 23];
console.log(forecastDemand(sales));