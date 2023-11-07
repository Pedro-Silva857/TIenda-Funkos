import React from 'react'
import LisItem from './LisItem'
import { useEffect } from 'react'
import { getProducts, getProductsByCategory } from '../../asyncMock'
import { useState } from 'react'
import {useParams} from 'react-router-dom'

const ListItemContainer = ({greeting}) => {
  const [products, setProducts]= useState([])

  const {categoryId} = useParams()
  
  useEffect(() => {
    const asyncFunc = categoryId ? getProductsByCategory : getProducts

    asyncFunc(categoryId)
    .then(response => {
      setProducts(response)
    })
    .catch(error => {
      console.error(error)
    })
  
},[categoryId])

return (
  <div>
    <h1>{greeting}</h1>
    <LisItem products={products}/>
  </div>
)
}

export default ListItemContainer
