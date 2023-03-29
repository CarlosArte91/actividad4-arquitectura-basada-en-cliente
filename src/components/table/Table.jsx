import { headers } from "../../constants/constants"

export function Table({ coins }) {
  return (
    <section className="table">
      <table>
        <thead>
          <tr>
            {headers.map((header) => (
              <th key={header.id}>
                <span>{header.title}</span>
              </th>
            ))}
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
              <th>{coin.price}</th>
              <th>{coin.rankin}</th>
              <th>{coin.totalVolume}</th>
              <th>{coin.marketCap}</th>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  )
}
