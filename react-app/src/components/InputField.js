import {useState} from "react";
import Form from 'react-bootstrap/Form';
import './components.css';

function InputField({fieldName}){
    const [field, setField] = useState('');


    const onFieldChange = (e) =>{
        setField(e.target.value);
    }

    const type = fieldName.split(' ').pop();

    return (
        <div>
            <Form.Control
                className="input-field"
                type={type === "password" ? type : fieldName}
                name={fieldName}
                id={fieldName}
                placeholder={fieldName}
                value={field}
                onChange={onFieldChange}
                autoComplete="off"
            />
        </div>
    );
}

export default InputField;