import * as React from "react"
import "./index.scss"

const CurrencyForm = () => {
  return (
    <form className="form">
      <div className="form__group">
        <label className="form__control" for="input-amount">Amount</label>
        <input type="number" className="form__input" id="input-amount" placeholder="Amount to convert" defaultValue={1} />
      </div>
      <div className="form__group">
        <label className="form__control" for="input-currency">Currency</label>
        <input type="text" className="form__input" id="input-currency" list="input-amount-dl" placeholder="Choose Currency" />
        <datalist id="input-amount-dl">
          <option selected value="Chocolate" />
          <option value="Coconut" />
          <option value="Mint" />
          <option value="Strawberry" />
          <option value="Vanilla" />
        </datalist>
      </div>
      <div className="form__group form__group_button">
        <button>Get Rates</button>
      </div>
    </form>
  )
}

export default CurrencyForm
