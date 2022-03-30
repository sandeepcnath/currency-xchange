import * as React from "react"
import { Link } from "gatsby"
import "./index.scss"

const PrimaryNav = () => {
  return (
    <nav className="primary-nav">
      <Link className="primary-nav__title" to="/">
        CX
      </Link>
    </nav>
  )
}

export default PrimaryNav
