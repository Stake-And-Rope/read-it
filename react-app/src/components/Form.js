import InputField from "./InputField";
import {Link, useNavigate} from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useState} from "react";
import "./components.css"

const LOGIN_URL = "/login-successful";
const REGISTER_URL = "/registered";

function Form({
    formType, 
    title, 
    fields, 
    labelText, 
    postURL, 
    goToLink, 
    linkText}){

    const navigate = useNavigate();

    async function post(fields, formData, postURL){
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
    
        const user = {}
        fields.array.forEach(field => {user[field.replace(/ /g, '_')] = formData.get(field)})
        
        let response = null;
        try{
            response = await fetch(postURL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "X-CSRFToken": getCSRFToken()
                },
                body: JSON.stringify(user)
            })
        }
        catch (error){
            console.log(error);
        }

        console.log(response);
        let data = await response.json();
        console.log(data);
        
        if (response.status === 200)
            navigate(LOGIN_URL)

        if (response.status === 201)
            navigate(REGISTER_URL)

        let errors = {}
        Object.entries(data).forEach(([field, value]) => {
            if (field === "user")
                errors = {...errors, ...value}
            else if (field === "non_field_errors")
                setResponse(value);

            errors[field.replace('_', ' ')] = value;
        })

        setFieldErrors(errors);
    }

    const onSubmit = (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target);
        post(fields, formData, postURL);
    };

    const [response, setResponse] = useState("");
    const [fieldErrors, setFieldErrors] = useState({});

    return (
        <>
            <form onSubmit={onSubmit} key={formType}>
                <div>
                    <h3 className="form-title">
                        {title}
                    </h3>

                    <h4 className="error">
                        {response[0] === "Invalid credentials" ? "Your email or password is wrong" : response}
                    </h4>

                    {fields.map((field) =>{
                        const error = fieldErrors[field] !== undefined;
                        return (
                            <div key={field + error}>
                                <InputField fieldName={field} key={`${formType}_${field}`} error={error}/>

                                {error ?
                                    <h5 className="error" key={`${field}-error`}>
                                        {fieldErrors[field].join(" ").replace("This", field.charAt(0).toUpperCase() + field.slice(1))}
                                    </h5> : null
                                }
                            </div>
                        );
                    })}



                    <Button className="form-button" type="submit">
                        {formType}
                    </Button>
                </div>
            </form>

            <label className="label_text_newacc">
                {labelText}
            </label>
            {' '}
            <Link to={goToLink} className="link_new_acc" onClick={() => {setResponse(""); setFieldErrors({});}}> {/* stops forms from keeping state */}
                {linkText}
            </Link>
        </>
    );
}

export default Form;