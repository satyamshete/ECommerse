import React from 'react'
import ProductList from './ProductList'
const ProductContext = React.createContext()
function Context() {
  return (
    <div>
    <ProductContext.Provider value="i am from">
        <ProductList /> 
    </ProductContext.Provider>
    </div>
  )
}

export default Context
export {ProductContext}
