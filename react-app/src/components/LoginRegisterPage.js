import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from './Form';
import './components.css';
import DisplayUsers from './DisplayUsers';


const BASE_URL = "http://127.0.0.1:8000/test"

function LoginRegisterPage(){
	const navigate = useNavigate();

	const registerFields = [
        "username",
        "first name",
        "last name",
        "email",
        "password",
        "confirm password",
    ];

	function getCSRFToken() {
		const cookies = document.cookie.split(';');
		for (const cookie of cookies) {
		  const [name, value] = cookie.trim().split('=');
		  if (name === "csrftoken") {
			return value;
		  }
		}
		return "";
	  }

	const onRegisterSubmit = async(fields, formData) => {
		const new_user = {}
		fields.map(field => {new_user[field] = formData.get(field)})

		const response = await fetch(`${BASE_URL}/create_new_user`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"X-CSRFToken": getCSRFToken()
			},
			body: JSON.stringify(new_user)
		})

		const created_user = await response.json()
		
		const firstNameMatch = created_user.first_name === new_user["first name"]
		const lastNameMatch = created_user.last_name === new_user["last name"]
		const emailMatch = created_user.email === new_user["email"]

		if (firstNameMatch && lastNameMatch && emailMatch)
			navigate('/registered')
		else
			navigate('/register-error')
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
				<Route path="*" element={<h1 style={{color: "red"}}>404 PAGE NOT FOUND</h1>}/>
				<Route path="/registered" element={<h1 style={{color: "green"}}>REGISTERED SUCCESSFULLY!</h1>}/>
				<Route path="/register-error" element={<h1 style={{color: "red"}}>SORRY! THERE WAS A PROBLEM WITH YOUR REGISTRATION!</h1>}/>
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