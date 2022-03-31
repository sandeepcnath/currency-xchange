import React, {useState, useEffect} from "react"
import axios from 'axios';
import PrimaryNav from "../components/primaryNav"
import HomeHeader from "../components/homeHeader"
import CurrencyForm from "../components/CurrencyForm"
import ForexList from "../components/ForexList"

const IndexPage = () => {
  const [val, setVal] = useState(1)
  const [loading, setLoading] = useState(true)
  const [currencyList, setCurrencyList] = useState({})
  const [forexList, setForexList] = useState([])
  const [selectedCurrency, setSelectedCurrency] = useState("usd")
  const [selectedToCurrencies, setSelectedToCurrencies] = useState([])

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
        let a = currencyList;
        if (Object.keys(a).length === 0) {
          const {data: response} = await axios.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json');
          a = response;
        }
        const {data: response} = await axios.get(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${selectedCurrency}.json`);
        setForexList(Object.keys(response[selectedCurrency]).map(item => ({shortForm: item, currency: a[item], value: response[selectedCurrency][item]})))
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    }
    fetchData();
  }, [selectedCurrency]); 

  return (
    <>
      <title>Currency XChange</title>
      <header>
        <PrimaryNav />
        <HomeHeader />
      </header>
      <main>
        <CurrencyForm 
          value={val} 
          setVal={setVal} 
          currencyList={currencyList} 
          loading={loading} 
          setLoading={setLoading} 
          selectedCurrency={selectedCurrency} 
          setSelectedCurrency={setSelectedCurrency} 
          selectedToCurrencies={selectedToCurrencies}
          setSelectedToCurrencies={setSelectedToCurrencies}
        />
        {selectedToCurrencies.length == 0 ? (
          <ForexList 
            value={val} 
            forexList={forexList} 
            loading={loading} 
            selectedToCurrencies={selectedToCurrencies} 
          />
        ) : (
          <ForexList 
            value={val} 
            forexList={forexList.filter(item =>selectedToCurrencies.indexOf(item.shortForm) !== -1)} 
            loading={loading} 
            selectedToCurrencies={selectedToCurrencies} 
          />
        )}
      </main>
    </>
  )
}

export default IndexPage
