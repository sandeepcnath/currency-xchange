import React from "react"
import "./index.scss"

const ForexList = ({value, forexList, selectedToCurrencies}) => {
  return (
    <section className="listing-section">
      <ul className="forex-list">
        {forexList && (
          forexList.map(currency => (
            <li className="forex-list__li" key={currency.shortForm}>
              <img className="forex-list__img" src="/static/united-states.png" />
              <span className="forex-list__text">
                <span className="forex-list__short">{currency.shortForm} - </span>
                <span className="forex-list__currency">{currency.currency}</span>
                <span className="forex-list__value">{value == 0 ? currency.value.toFixed(4) : (currency.value * value).toFixed(4)}</span>
              </span>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default ForexList
