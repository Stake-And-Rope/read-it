import './App.css';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import LoginRegisterPage from './components/LoginRegisterPage';

function App() {
	const navigate = useNavigate()

	useEffect( () => {
		navigate('/login')
	}, [])

	return (
    	<LoginRegisterPage />
	);
}

export default App;
