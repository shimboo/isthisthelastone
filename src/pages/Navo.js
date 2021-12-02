import React from 'react'
import { Link } from "react-router-dom"

const Navo = () => {
    return (
        <div>

            <ul className="me-auto">
                <li><Link id='the' to='/Home'>Home</Link></li>
                <li><Link id="me" to='/One'>Contact</Link></li>
                <li><Link id="me" to='/Two'>About Us</Link></li>
                <li><Link id="me" to='/Profile'>Profile</Link></li>

            </ul>

        </div >
    )
}

export default Navo
