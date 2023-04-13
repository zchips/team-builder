import React from 'react';

const Form = (props) => {
    const handleChange = event => {
        const { name, value } = event.target;
        props.change(name, value);
    } 

    const handleSubmit = event => {
        event.preventDefault();
        props.submit();
    }
   
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input placeholder="First name" value={props.values.name} name="Name" onChange={handleChange}/>
            </label>
            
            <label>
                Email:
                <input placeholder="Email" value={props.values.email} name="Email" onChange={handleChange}/>
            </label>
            
            <label>
                Role:
                <input placeholder="Role" value={props.values.role} name="Role" onChange={handleChange}/>
            </label>

            <input type="submit" value="create your team"/>
        </form>
    );
}

export default Form;
