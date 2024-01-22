import { Link } from 'react-router-dom';
import LinkRouter from "./LinkRouter";

function App() {
	return (<>
    	<LinkRouter/>
		<p>
			<Link to={"/users"} className="link_new_acc">
					view_users
			</Link>
		</p>
		</>
	);
}

export default App;
