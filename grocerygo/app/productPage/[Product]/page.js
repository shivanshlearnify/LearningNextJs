import React from 'react'

const productName = ({params}) => {
  return (
    <div>{params.Product}</div>
  )
}

export default productName;