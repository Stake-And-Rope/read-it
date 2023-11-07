import './App.css';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoginRegisterPage from './components/LoginRegisterPage';

function App() {
	const navigate = useNavigate()

	useEffect( () => {
		navigate('/register')
	}, [])

	return (<>
    	<LoginRegisterPage />
		<p>
			<Link to={"/users"} class="link_new_acc">
					view_users
			</Link>
		</p>
		</>
	);
}

export default App;
