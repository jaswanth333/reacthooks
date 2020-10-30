import React, { useContext } from 'react';
import { Post } from './Post';
import { PostsContext } from './PostsContext';

export const Posts = () => {
	const [Posts] = useContext(PostsContext);
	return (
		<div>
			{Posts.map(val => (
				<Post name={val.post} comment={val.comment} key={val} />
			))}
		</div>
	);
};
