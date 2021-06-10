import React from 'react'
import { Link } from "react-router-dom";
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <Link to="/"><h1 className="title">Quiz App</h1></Link>
            <hr className='divider' />
        </div>
    )
}

export default Header
