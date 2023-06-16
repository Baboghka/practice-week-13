import React from 'react';
const Navigation = () => {
    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <a className='navbar-link' href='https://exaple.com'>Link1</a>
                </li>
                <li className='navbar-item'>
                    <a className='navbar-link' href='https://example.com/link2'>Link2</a>
                </li>
                <li className='navbar-item'>
                    <a className='navbar-link' href='#section3'>Link 3</a>
                </li>
            </ul>
        </nav>
    );
};
export default Navigation