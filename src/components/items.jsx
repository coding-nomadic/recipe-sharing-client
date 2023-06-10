import React, { useEffect } from 'react'
import Item from './Item'

function Items({data}) {
  return (
    <div>
      {!!data && data.map((el, i) => {
       return <Item key={i} data={el} />
      })}</div>
  )
}

export default Items