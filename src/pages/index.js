import * as React from "react"
import PrimaryNav from "../components/primaryNav"
import HomeHeader from "../components/homeHeader"
import CurrencyForm from "../components/CurrencyForm"
import ForexList from "../components/ForexList"

const IndexPage = () => {
  return (
    <>
      <title>Home Page</title>
      <header>
        <PrimaryNav />
        <HomeHeader />
      </header>
      <main>
        <CurrencyForm />
        <ForexList />
      </main>
    </>
  )
}

export default IndexPage
