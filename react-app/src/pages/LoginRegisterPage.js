import {Routes, Route} from 'react-router-dom';
import Form from '../components/Form';
import DisplayUsers from '../components/DisplayUsers';

const BASE_URL = "http://127.0.0.1:8000";
const REGISTER_URL = "create_new_user";
const LOGIN_URL = "login_user";

function LoginRegisterPage(){
	const registerFields = [
        "username",
        "first name",
        "last name",
        "email",
        "password",
        "confirm password",
    ];

	const loginFields = [
        "email", // or username
        "password"
    ];

    return (
        <>
			{/* BANNER */}
    		<Routes>
				<Route path="*" element={<h1 style={{color: "red"}}>404 PAGE NOT FOUND</h1>}/>
				<Route path="/registered" element={<h1 style={{color: "green"}}>REGISTERED SUCCESSFULLY!</h1>}/>
				<Route path="/login-successful" element={<h1 style={{color: "green"}}>LOGED IN SUCCESSFULLY!</h1>}/>
    			<Route path="/register" element={<Form formType="Register"
													   title="Create a brand new ReadIT account"
                                              		   fields={registerFields}
													   labelText="Already have an account?"
                                                       postURL={`${BASE_URL}/${REGISTER_URL}`}
													   goToLink="/login"
													   linkText="Log in"/>}/>
      			<Route path="/login" element={<Form formType="Log In"
                                                    fields={loginFields}
													title="Log in with yout ReadIT account"
													labelText="Don't have an account?"
                                                    postURL={`${BASE_URL}/${LOGIN_URL}`}
													goToLink="/register"
													linkText="Create one"/>}/>
				<Route path="/users" element={<DisplayUsers/>}/>
			</Routes>
    	</>
    );
}

export default LoginRegisterPage;