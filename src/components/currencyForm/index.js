import React, {useState, useEffect} from "react"
import axios from 'axios'
import Select from 'react-select'
import "./index.scss"

const CurrencyForm = ({value, setVal, selectedCurrency, setSelectedCurrency}) => {
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

  const currencyList = data.map(entry => (
    {value: entry[0], label: entry[0] + " - " + entry[1]}
  ))

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
        {!loading && (
          <Select className="form__input" options={currencyList} defaultValue={selectedCurrency} onChange={setSelectedCurrency(value)} />
        )}
      </div>
      <div className="form__group form__group_button">
        <button>Get Rates</button>
      </div>
    </form>
  )
}

export default CurrencyForm
