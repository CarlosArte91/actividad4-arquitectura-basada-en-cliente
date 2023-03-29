function formatedValue (value) {
  const newValue = value.toLocaleString('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2 })
  return newValue
}

export function formatedApiResponse (response) {
  const responseFormated = []

  response.forEach((item) => {
    const newItem = {
      id: item.id,
      image: item.image,
      name: item.name,
      symbol: item.symbol.toUpperCase(),
      price: formatedValue(item.current_price),
      rankin: item.market_cap_rank,
      marketCap: formatedValue(item.market_cap),
      totalVolume: formatedValue(item.total_volume),
      percentChange: `${item.price_change_percentage_24h.toFixed(2)}%`,
      percentInvestment: item.price_change_percentage_24h,
    }

    responseFormated.push(newItem)
  });

  return responseFormated
}
