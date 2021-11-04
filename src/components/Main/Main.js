import React from 'react'
import {Routes, Route} from "react-router-dom"
import Homes from "../../pages/Home/Home"
const main = () => {
  return (
    <div className="Main">
      <Routes>

    <Route path="/" element={<Homes/>}/> 

      </Routes>

    </div>
  )
}

export default main
