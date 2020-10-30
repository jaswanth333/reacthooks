import React from 'react';

export const Post = ({ name, comment }) => {
	return (
		<div>
			<h1>{name}</h1>
			<h1>{comment}</h1>
		</div>
	);
};
