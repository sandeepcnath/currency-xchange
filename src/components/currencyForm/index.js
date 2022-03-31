import React, {useState, useEffect} from "react"
import axios from 'axios'
import "./index.scss"

const CurrencyForm = ({value, setVal}) => {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      try {
        const {data: response} = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json');
        setData(Object.entries(response));
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, []); 

  console.log(value, "value")

  return (
    <form className="form">
      <div className="form__group">
        <label className="form__control" htmlFor="input-amount">Amount</label>
        <input
          type="text"
          className="form__input" 
          id="input-amount" 
          name="input-amount" 
          placeholder="Amount to convert" 
          pattern="[0-9]*"
          value={value}
          onChange={(e) =>
            setVal((v) => (e.target.validity.valid ? e.target.value : v))
          }
        />
      </div>
      <div className="form__group">
        <label className="form__control" htmlFor="input-currency">Currency</label>
        <input type="text" className="form__input" id="input-currency" name="input-currency" list="input-amount-dl" placeholder="Choose Currency" />
        <datalist id="input-amount-dl">
        {!loading && (
          data.map(currency => (
            <li className="forex-list__li">
              <option value={`${currency[0]} - ${currency[1]}`} />
            </li>
          ))
        )}
        </datalist>
      </div>
      <div className="form__group form__group_button">
        <button>Get Rates</button>
      </div>
    </form>
  )
}

export default CurrencyForm
