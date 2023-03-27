export function Table({ coins }) {
  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            <th>
              <span>Moneda</span>
            </th>

            <th>
              <span>Precio</span>
            </th>

            <th>
              <span>Rankin</span>
            </th>

            <th>
              <span>Volumen en 24 h</span>
            </th>

            <th>
              <span>Cap. de mercado</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.id}>
              <th>
                <img src={coin.image} alt="cryptocoin symbol" />
                <span>{coin.name}</span>
                <span className="symbol">{coin.symbol}</span>
              </th>
              <th>{coin.current_price}</th>
              <th>{coin.market_cap_rank}</th>
              <th>{coin.total_volume}</th>
              <th>{coin.market_cap}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
