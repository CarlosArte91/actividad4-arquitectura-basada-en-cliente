export function calculateInvestment ({ percent, investment, time }) {
  const dailyProfit = (percent/100) * investment
  const totalProfit = (dailyProfit * (time * 30)).toFixed(2)

  return totalProfit
}
