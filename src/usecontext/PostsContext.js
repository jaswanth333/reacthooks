import React, { createContext, useState } from 'react'

export const PostsContext= createContext([]);

export const PostsProvider = (props) => {

  const [Posts, setPosts] = useState([

    {
      post:"p1",
      comment: "c1",
    },
    {
      post:"p2",
      comment: "c2",
    },
    {
      post:'p3',
      comment: 'c3',
    }

  ])

  return (
    <PostsContext.Provider value={[Posts,setPosts]} >
      {props.children}
    </PostsContext.Provider>
  )
}
