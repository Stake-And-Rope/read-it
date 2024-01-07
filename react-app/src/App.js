import './App.css';
import { Link } from 'react-router-dom';
import LoginRegisterPage from './components/LoginRegisterPage';

function App() {
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
