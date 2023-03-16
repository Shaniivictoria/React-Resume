import React from 'react';
import { Link } from 'react-router-dom';

    const Navbar = () => {
        return(
            <nav className='navyBar'>
                <Link to='/'>Home</Link>
                <Link to='/resume'>Resume</Link>
                <Link to='/portfolio'>Portfolio</Link>
                <Link to='/education'>Education</Link>
                <Link to='/hobbies'>Hobbies</Link>
                <Link to='/skills'>Skills</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        )
    }



export default Navbar