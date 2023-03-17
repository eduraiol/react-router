import React from 'react'
import { useParams } from 'react-router-dom'

function Post() {
    const parametros = useParams();

    console.log(parametros);

  return (
    <h1>Post..</h1>
  )
}

export default Post