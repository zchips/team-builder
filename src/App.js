import React, {useState} from 'react'
import Form from './components/Form';



function App() {

  const [members, setMembers] = useState([])
  const [values, setValues] = useState({name:'', email:'', role:''})

 const onSubmit = () => {
    setMembers([values, ...members])
    setValues({name:'', email:'', role:''})
  }

  const onChange = (name, value) =>{
    setValues({...values, [name]: value})
  }


  return (
    <div className="App">
      <h1> Practice in building websites with create react app</h1>
     <Form
     change={onChange}
     submit={onSubmit}
     values={values}
     >
      
     </Form>

     {members.map((member, idx) =>{
      return(
        <div key={idx}> {member.email}, {member.name}, {member.role}</div>
      )
     })}
    </div>
  );
}

export default App;
