import React from 'react'
import { useState } from 'react';

const Form = () => {
    const [state, setState] = useState({
        Email: "",
        Password: ""
    });
    const handleInputChange = (event) =>{
      setState((prevProp) => ({
          ...prevProp,
         [event.target.name]: event.target.value
      }));
    };

    const handleSubmit = (event) => {
        // event.preventDefault();
        console.log(state);
    };
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <div className='form-control'>
                <label>Email</label>
                <input type ="text" name="Email" value={state.email} onChange={handleInputChange} />
            </div>
            <div className='form-control'>
                <label>Password</label>
                <input type="password" name="Password" value = {state.password} onChange={handleInputChange}/>
            </div>
            <div className='form-control'>
                <label></label>
             <button type='submit'>Login</button>
            </div>
        </form>
    </div>

    );
}

export default Form;