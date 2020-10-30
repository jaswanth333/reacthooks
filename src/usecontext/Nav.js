import React, { useContext } from 'react'
import { PostsContext } from './PostsContext'

export const Nav = () => {
  const [Posts] = useContext(PostsContext)
  return (
    <div>
      <h1>{Posts.length}</h1>
      
    </div>
  )
}
