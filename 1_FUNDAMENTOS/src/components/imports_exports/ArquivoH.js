import * as valores from './ArquivoG';

import React from 'react'

const ArquivoH = () => {
  return (
    <div>
        <h3>Arquivo H</h3>
        {console.log(valores.a)}    //Output: 1
        {console.log(valores.b)}  //Output: 2
    </div>
  )
}

export default ArquivoH