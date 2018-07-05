import React from 'react'

function Comment ({comment}) {

  return (
    <div><h3>{comment.user}</h3><p>{comment.text}</p></div>
  )
}

export default Comment