export function InvestmentForm({ activate, handle, coins }) {
  if (!activate) return null

  const handleClose = () => {
    handle(false)
  }

  return (
    <section className="modal">
      <div className="container-form">
        <h2>Calcula tu inversion</h2>
        <form>
          <div className="group-input">
            <label htmlFor="crypto">Selecciona tu cryptomoneda</label>
            <select name="" id="crypto">
              {coins.map((coin) => (
                <option
                  key={coin.id}
                  value={coin.id}
                >
                  {`${coin.name} - ${coin.symbol}`}
                </option>
              ))}
            </select>
          </div>

          <table>
            <tbody>
              <tr>
                <th>Precio actual</th>
                <th>500</th>
              </tr>
              <tr>
                <th>Porcentaje de ganancia diario</th>
                <th>10%</th>
              </tr>
            </tbody>
          </table>

          <div className="group-input">
            <label htmlFor="crypto">¿Cuantos dolares desea invetir?</label>
            <input type="number" />
          </div>

          <div className="group-input">
            <label htmlFor="crypto">¿Cuantos meses durará su inversion?</label>
            <input type="number" />
          </div>

          <div className="group-input">
            <label htmlFor="crypto">Ganancia neta al final del periodo</label>
            <input type="number" />
          </div>

          <div className="buttons-form">
            <input
              className="button-investment"
              type="button"
              value="Cerrar"
              onClick={handleClose}
            />

            <input
              className="button-investment"
              type="button"
              value="Calcular"
              onClick={handleClose}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
