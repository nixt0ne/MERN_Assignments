import React, { useState } from  'react';
    
const Form = (props) => {
    
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");  
    const [confirmPassword, setconfirmPassword] = useState("");
    
    const createUser = (e) => {
        e.preventDefault();
    
        const newUser = { 
            firstName: firstName, 
            lastName: lastName,
            email: email, 
            password: password, 
            confirmPassword: confirmPassword,
        };
        console.log("Welcome", newUser);
    };
    
    return(
        <form className= "form col-4  mx-auto" onSubmit={ createUser }>
            <div className='mx-auto'>
                <div className='d-flex p-2'>
                    <label className='form-label' >First Name: </label> 
                    <input type="text" className='form-control h-25 w-50 ms-4' onChange={ (e) => setfirstName(e.target.value) } />
                </div>
                <div className='d-flex p-2'>
                    <label className='form-label'>Last Name: </label>
                    <input type="text" className='form-control h-25 w-50 ms-4'onChange={ (e) => setlastName(e.target.value) } />
                </div>
                <div className=' d-flex p-2'>
                    <label className='form-label'>Email: </label> 
                    <input type="text" className='form-control h-25 w-50 ms-4'onChange={ (e) => setEmail(e.target.value) } />
                </div>
                <div className='d-flex p-2 '>
                    <label className='form-label'>Password: </label>
                    <input type="text" className='form-control h-25 w-50 ms-4'onChange={ (e) => setpassword(e.target.value) } />
                </div>
                <div className='d-flex p-2'>
                    <label className='form-label'> Confirm Password: </label>
                    <input type="text" className='form-control h-25 w-50 ms-4'onChange={ (e) => setconfirmPassword(e.target.value) } />
                </div>
                <input className='btn btn-primary mt-4'   type="submit" value="Create User" />
                <div className='mt-3'>
                    <h4> Your Form Data </h4>
                    <p> First Name: { firstName } </p>
                    <p> Last Name: { lastName } </p>
                    <p> Email: { email } </p>
                    <p> Password: { password } </p>
                    <p> Confirme Password: { confirmPassword } </p>
                </div>
            </div>
        </form>

    );
};
    
export default Form;