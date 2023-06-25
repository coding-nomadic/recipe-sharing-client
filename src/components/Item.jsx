import React from 'react'
import Stack from 'react-bootstrap/Stack';

function Item({data}) {
  return (
  <div>
    <h1>
      {data.author}
      </h1>
      <Stack gap={3} style={{border: "ridge"}}>
        {
          data.comments?.length && data.comments.map(el => {
            return <div className="p-2">
              {  el.body}
            </div>
          })
        }
    </Stack>
  </div>
)
}

export default Item;


