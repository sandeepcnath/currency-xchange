import React, {useState, useEffect} from "react"
import axios from 'axios';
import "./index.scss"

const ForexList = () => {
  const [loading, setLoading] = useState(true);
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

  return (
    <section className="listing-section">

      <ul className="forex-list">
        {!loading && (
          data.map(currency => (
            <li className="forex-list__li">
              <img className="forex-list__img" src="/static/united-states.png" />
              <span>
                <span className="forex-list__short">{currency[0]}</span> - {currency[1]}
              </span>
            </li>
          ))
        )}
      </ul>
    </section>
  )
}

export default ForexList
