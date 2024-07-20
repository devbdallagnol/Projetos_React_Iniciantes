// arquivoD.js

import multiplicar from "./ArquivoC";

import React from 'react'

const ArquivoD = () => {
  return (
    <div>
        <h3>ArquivoD</h3>
        {console.log(multiplicar(5,3))}  //Output: 15
    </div>
  )
}

export default ArquivoD
