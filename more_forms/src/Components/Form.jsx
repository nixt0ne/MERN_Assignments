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
    };
    
    return(
        <form className= " form col-5  mx-auto" onSubmit={ createUser }>
            <div className='row mx-auto '>
                <div className='d-flex p-2 my-2 bg-secondary align text-center rounded'>
                    <label className=' col-md form-label ' >First Name: </label> 
                    <input type="text" className='form-control  ms-4  w-50' onChange={ (e) => setfirstName(e.target.value) } />
                </div>
                {
                        firstName && firstName.length <2 ? <p className='text-danger'>First Name must be atleast 2 characters</p>: null
                    }
                <div className='d-flex p-2 my-2 bg-secondary text-center rounded'>
                    <label className='col form-label'>Last Name: </label>
                    <input type="text" className='form-control ms-4 w-50'onChange={ (e) => setlastName(e.target.value) } />
                </div>
                {
                        lastName && lastName.length <2 ? <p className='text-danger'>Last Name must be atleast 2 characters</p>: null
                    }
                <div className='d-flex p-2 my-2 bg-secondary text-center rounded'>
                    <label className='col form-label'>Email: </label> 
                    <input type="text" className='form-control ms-4 w-50'onChange={ (e) => setEmail(e.target.value) } />
                </div>
                {
                        email && email.length <2 ? <p className='text-danger'>Email must be atleast 2 characters</p>: null
                    }
                <div className='d-flex p-2 my-2 bg-secondary text-center rounded'>
                    <label className='col form-label'>Password: </label>
                    <input type="text" className='form-control ms-4 w-50'onChange={ (e) => setpassword(e.target.value) } />
                </div>
                {
                        password && password.length <8 ? <p className='text-danger'>Password must be atleast 8 characters</p>: null
                    }
                <div className='d-flex p-2 my-2 bg-secondary text-center rounded'>
                    <label className='col form-label'> Confirm Password: </label>
                    <input type="text" className='form-control ms-4 w-50'onChange={ (e) => setconfirmPassword(e.target.value) } />
                </div>
                {
                         password !== confirmPassword ? <p className='text-danger'>Passwords must match</p>: null
                    }
                <div>
                    <input className='btn btn-primary mt-4 w-50 '   type="submit" value="Create User" />
                </div>
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