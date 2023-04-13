import React from 'react';


const Form = (props) => {
   
        const handleChange = event =>{
            const {name, value} = event.target;
            props.Change(name, value)
        } 
      const  handleSubmit = event => {
            event.preventDefault();
            props.submit();
        }
   
    return(
        <form onSubmit={handleSubmit}>
            <label>
            <input placeholder='First name' value={values.name} name="Name" onChange={handleChange}></input>
            </label>
            <label>
            <input placeholder='Email' value={values.email} name="Email" onChange={handleChange}></input>
            </label>
            <label>
            <input placeholder='Role' value={values.role} name="Role" onChange={handleChange}></input>
            </label>
        </form>
    )
}
export default Form