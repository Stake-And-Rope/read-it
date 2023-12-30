import {Routes, Route, useNavigate} from 'react-router-dom';
import Form from '../components/Form';
import DisplayUsers from '../components/DisplayUsers';

const BASE_URL = "http://127.0.0.1:8000"

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

	const onRegisterSubmit = async (fields, formData) => {
		const newUser = {}
		fields.map(field => {newUser[field] = formData.get(field)})
		newUser["first_name"] = newUser["first name"]
		newUser["last_name"] = newUser["last name"]

		delete newUser["first name"]
		delete newUser["last name"]
		
		let response = null;
		try{
			response = await fetch(`${BASE_URL}/create_new_user`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-CSRFToken": getCSRFToken()
				},
				body: JSON.stringify(newUser)
			})
		}
		catch (error){
			console.log(error);
			navigate("/register-error");
		}

		if (response.status === 201)
			navigate("/registered")
		else
			navigate("/register-error")
	}

	const loginFields = [
        "email", // or username
        "password"
    ];

	const onLoginSubmit = async (fields, formData) => {
		const loginUser = {};
		fields.map(field => {loginUser[field] = formData.get(field)});
		console.log(loginUser);
		
		let response = null;
		try{
			response = await fetch(`${BASE_URL}/login_user`, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					"X-CSRFToken": getCSRFToken()
				},
				body: JSON.stringify(loginUser)
			});

			const data = await response.json();
			console.log(data);
		}
		catch (error){
			console.log(error);
			navigate("/login-error");
		}

		console.log(response);

		if (response.status === 200)
			navigate("/login-successful");
		else
			navigate("/login-error");
	}

    return (
        <>
			{/* BANNER */}
    		<Routes>
				<Route path="*" element={<h1 style={{color: "red"}}>404 PAGE NOT FOUND</h1>}/>
				<Route path="/registered" element={<h1 style={{color: "green"}}>REGISTERED SUCCESSFULLY!</h1>}/>
				<Route path="/register-error" element={<h1 style={{color: "red"}}>SORRY! THERE WAS A PROBLEM WITH YOUR REGISTRATION!</h1>}/>
				<Route path="/login-successful" element={<h1 style={{color: "green"}}>LOGED IN SUCCESSFULLY!</h1>}/>
				<Route path="/login-error" element={<h1 style={{color: "red"}}>SORRY! THERE WAS A PROBLEM WITH LOGING YOU IN!</h1>}/>
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