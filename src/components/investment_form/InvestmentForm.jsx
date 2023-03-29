import { useState } from "react"
import { calculateInvestment } from "../../utilities/calculateInvesment"

export function InvestmentForm({ activate, handle, coins }) {
  if (!activate) return null

  const [state, setState] = useState({
    price: '$0.00',
    percent: '0%',
    percentInvestment: 0,
  })

  const [inputs, setInputs] = useState({
    investment: '0',
    time: '0',
  })

  const [profit, setProfit] = useState('')

  const handleClose = () => {
    handle(false)
  }

  const handleChange = (event) => {
    const findElement = coins.find((item) => item.id === event.target.value)
    const newState = {
      price: findElement.price,
      percent: findElement.percentChange,
      percentInvestment: findElement.percentInvestment,
    }

    setState(newState)
  }

  const handleChangeInput = (event) => {
    const item = event.target.name
    const value = event.target.value

    setInputs({
      ...inputs,
      [item]: value
    })
  }

  const calculate = () => {
    const newProfit = calculateInvestment({
      percent: state.percentInvestment,
      investment: parseInt(inputs.investment),
      time: parseInt(inputs.time)
    })

    setProfit(newProfit)
  }

  return (
    <section className="modal">
      <div className="container-form">
        <h2>Calcula tu inversion</h2>
        <form>
          <div className="group-select">
            <label htmlFor="crypto">Selecciona tu cryptomoneda</label>

            <select id="crypto" onChange={handleChange}>
              <option value="" defaultChecked></option>
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

          <article className="info-table">
            <div className="info">
              <span>Precio actual</span>
              <span>{state.price}</span>
            </div>

            <div className="info">
              <span>Porcentaje de ganancia diario</span>
              <span>{state.percent}</span>
            </div>
          </article>

          <div className="group-input">
            <label htmlFor="crypto">¿Cuantos dolares desea invetir?</label>
            <input
              name="investment"
              value={inputs.investment}
              type="number"
              required
              onChange={handleChangeInput}
            />
          </div>

          <div className="group-input">
            <label htmlFor="crypto">¿Cuantos meses durará su inversion?</label>
            <input
              name="time"
              value={inputs.time}
              type="number"
              required
              onChange={handleChangeInput}
            />
          </div>

          <div className="group-select">
            <label htmlFor="crypto">Ganancia neta al final del periodo</label>
            <span
              className={profit < 0 ? "profit-lose" : profit > 0 ? "profit-win" : ""}
            >
              {profit ? `$ ${profit}` : ""}
            </span>
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
              onClick={calculate}
            />
          </div>
        </form>
      </div>
    </section>
  )
}
