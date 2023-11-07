import {Routes, Route} from 'react-router-dom';
import Form from './Form';
import './components.css';
import DisplayUsers from './DisplayUsers';


const BASE_URL = "http://127.0.0.1:8000/test"

function LoginRegisterPage(){
	const registerFields = [
        "username",
        "first name",
        "last name",
        "email",
        "password",
        "confirm password",
    ];

	const onRegisterSubmit = (fields, formData) => {
		const new_user = {}
		fields.map(field => {new_user[field] = formData.get(field)})

		const response = fetch(`${BASE_URL}/create_new_user`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(new_user)
		})

		console.log(response) // check result from the fetch(...)
	}

	const loginFields = [
        "email or username",
        "password"
    ];

	const onLoginSubmit = (fields, formData) => {
		fields.map((field) =>{
		console.log(formData.get(field));
	})} // change when logic is created

    return (
        <>
			{/* BANNER */}
    		<Routes>
				<Route path="*" element={<h1>404 PAGE NOT FOUND</h1>}/>
    			<Route path="/register" element={<Form formType="Register"
													   title="Create a brand new ReadIT account"
                                              		   fields={registerFields}
													   labelText="Already have an account?"
                                                       logicSubmitFunc={onRegisterSubmit}
													   goToLink="/login"
													   linkText="Log in"/>}/>
      			<Route path="/login" element={<Form formType="Log In"
                                                    fields={loginFields}
													title="Log in with yout ReadIT account"
													labelText="Don't have an account?"
                                                    logicSubmitFunc={onLoginSubmit}
													goToLink="/register"
													linkText="Create one"/>}/>
				<Route path="/users" element={<DisplayUsers/>}/>

			</Routes>
    	</>
    );
}

export default LoginRegisterPage;