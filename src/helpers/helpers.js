export const formatCurrency = (amount) => {
  const symbol = "£";
  return symbol + amount.toFixed(2);
};
