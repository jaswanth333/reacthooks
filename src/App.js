import { Fragment } from 'react';
import './App.css';
import { Form } from './usecontext/Form';
import { Nav } from './usecontext/Nav';
import { Posts } from './usecontext/Posts';
import { PostsProvider } from './usecontext/PostsContext';
import { Reducer } from './usereducer/Reducer';
import { Reducer2 } from './usereducer2/Reducer2';

function App() {
	return (
		<Fragment>
			<PostsProvider>
				<div className='App'>
					<Posts />
					<Nav />
					<Form />
				</div>
			</PostsProvider>
			<hr />
			<div className='App'>
				<Reducer />
				<Reducer2 />
			</div>
		</Fragment>
	);
}

export default App;
