import { useState, useEffect } from "react"
import { cryptoService } from "../../services/crypto.service"
import { InvestmentForm } from "../investment_form/InvestmentForm"
import { Table } from "../table/Table"

export function Dashboard() {
  const [coins, setCoins] = useState([])
  const [activateForm, setActivateForm] = useState(false)

  const handleActivateForm = (boolean) => {
    setActivateForm(boolean)
  }

  const loadCoins = async () => {
    const { data } = await cryptoService()
    setCoins(data)
  }

  useEffect(() => {
    loadCoins()
  }, [])

  return (
    <div className="dashboard">
      <h1>Mercado de Cryptomonedas</h1>

      <div className="buttons">
        <button
          className="button-investment"
          onClick={() => handleActivateForm(true)}
        >
          Calcular Inversion
        </button>

        <button
          className="button-investment"
          onClick={loadCoins}
        >
          Refrescar tabla
        </button>
      </div>

      {coins.length ? <Table coins={coins} /> : null}

      <InvestmentForm
        activate={activateForm}
        handle={handleActivateForm}
        coins={coins}
      />
    </div>
  )
}
