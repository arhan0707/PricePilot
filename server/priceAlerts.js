function checkPriceAlert(currentPrice, targetPrice) {
  if (
    typeof currentPrice !== "number" ||
    typeof targetPrice !== "number" ||
    !Number.isFinite(currentPrice) ||
    !Number.isFinite(targetPrice) ||
    currentPrice < 0 ||
    targetPrice < 0
  ) {
    throw new Error("Prices must be valid non-negative numbers.");
  }

  if (currentPrice <= targetPrice) {
    return "Price alert! The product reached your target price.";
  }

  return "No alert yet. The price is still too high.";
}

console.log(checkPriceAlert(138, 140));
console.log(checkPriceAlert(150, 140));