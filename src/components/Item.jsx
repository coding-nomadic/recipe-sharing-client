import React from 'react'

function Item({data}) {
  return (
  <div>
    <h1>
      {data.author}
      </h1>
  </div>
)
}

export default Item