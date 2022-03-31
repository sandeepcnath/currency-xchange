import React, {useState, useEffect} from "react"
import axios from 'axios';
import "./index.scss"

const ForexList = () => {
  const [loading, setLoading] = useState(true);
  const [currencyList, setCurrencyList] = useState({})
  const [forexList, setForexList] = useState({})
  const [selectedCurrency, setSelectedCurrency] = useState("usd")

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json');
        setCurrencyList(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []); 

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency}.json`);
        console.log(response[selectedCurrency], "data")
        setForexList(Object.keys(response[selectedCurrency]).map(item => ({shortForm: item, currency: currencyList[item], value: response[selectedCurrency][item]})))
        
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [selectedCurrency, currencyList]); 

  console.log(forexList, "forexList")

  // Object.keys(rate.eur).map(item => ({shortForm: item, currency: currency[item], value: rate.eur[item]}))

  return (
    <section className="listing-section">

      <ul className="forex-list">
        {!loading && (
          forexList.map(currency => (
            <li className="forex-list__li">
              <img className="forex-list__img" src="/static/united-states.png" />
              <span className="forex-list__text">
                <span className="forex-list__short">{currency.shortForm} - </span>
                <span className="forex-list__currency">{currency.currency}</span>
                <span className="forex-list__value">{currency.value.toFixed(4)}</span>
              </span>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default ForexList
