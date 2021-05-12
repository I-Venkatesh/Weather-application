import React from 'react';
import "./Nav.css";
function Nav() {
    return (
        <div>
            <nav>
                <div className="logo">
                    <h4><i class="fas fa-sun"></i>The Weather</h4>
                </div>
                <ul className="nav-links">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">About</a></li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
