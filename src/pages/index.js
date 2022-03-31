import React, {useState, useEffect} from "react"
import PrimaryNav from "../components/primaryNav"
import HomeHeader from "../components/homeHeader"
import CurrencyForm from "../components/CurrencyForm"
import ForexList from "../components/ForexList"

const IndexPage = () => {
  const [val, setVal] = useState(1)
  return (
    <>
      <title>Home Page</title>
      <header>
        <PrimaryNav />
        <HomeHeader />
      </header>
      <main>
        <CurrencyForm value={val} setVal={setVal} />
        <ForexList value={val} />
      </main>
    </>
  )
}

export default IndexPage
