import {Routes, Route} from 'react-router-dom';
import Form from './Form';
import './components.css';

function LoginRegisterPage(){
	const registerFields = [
        "username",
        "first name",
        "last name",
        "email",
        "password",
        "confirm password",
    ];

	const onRegisterSubmit = (fields, formData) => {fields.map((field) =>{
		console.log(formData.get(field));
	})} // change when logic is created

	const loginFields = [
        "email or username",
        "password"
    ];

	const onLoginSubmit = (fields, formData) => {{fields.map((field) =>{
		console.log(formData.get(field));
	})}} // change when logic is created

    return (
        <>
			<h1 style={{position: 'fixed', top: 10, color: '#E2C799'}}>//BANNER//</h1>
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

			</Routes>
    	</>
    );
}

export default LoginRegisterPage;