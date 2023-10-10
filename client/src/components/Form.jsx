import InputField from "./InputField";
import {Link} from "react-router-dom";
import Button from "react-bootstrap/Button";

function Form({
    formType, 
    title, 
    fields, 
    labelText, 
    logicSubmitFunc, 
    goToLink, 
    linkText}){

    const onSubmit = (e) =>{
        e.preventDefault()

        const formData = new FormData(e.target);
        logicSubmitFunc(fields, formData);
    };

    return (
        <>
            <form onSubmit={onSubmit}>
                <div>
                    <h3 className="form-title">
                        {title}
                    </h3>

                    {fields.map((field) =>
                        <InputField fieldName={field} key={`${formType}_${field}`} />
                    )}



                    <Button className="form-button" type="submit">
                        {formType}
                    </Button>
                </div>
            </form>

            <label>
                {labelText}
            </label>
            {' '}
            <Link to={goToLink}>
                {linkText}
            </Link>
        </>
    );
}

export default Form;