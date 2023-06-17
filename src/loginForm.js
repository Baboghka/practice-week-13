import React from 'react';

export default function LoginForm(){
    return (
        <div className='login-form'>
            <h3 className='login-title'>Log in</h3>
            <div className='form-group'>
                <label htmlFor='username'>Username:</label>
                <input type='text' id='username' name='username' />
            </div>
            <div className='form-group'>
                <label htmlFor='password'>Password:</label>
                <input type='password' id='password' name='password' />
            </div>
        </div>

    );

};
