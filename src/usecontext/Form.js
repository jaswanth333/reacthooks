import React, { useContext, useState } from 'react';
import { PostsContext } from './PostsContext';
export const Form = () => {
	const [Posts, setPosts] = useContext(PostsContext);
	const [Name, setName] = useState(' ');
	const [Comment, setComment] = useState(' ');

	const nameHandler = e => {
		setName(e.target.value);
	};

	const commentHandler = e => {
		setComment(e.target.value);
	};
	const SubmitHandler = e => {
		e.preventDefault();
		setPosts([...Posts, { post: Name, comment: Comment }]);
		console.log(Posts);
	};
	return (
		<div>
			<form onSubmit={SubmitHandler}>
				<input type='text' onChange={nameHandler} value={Name} />
				<input type='text' onChange={commentHandler} value={Comment} />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};
