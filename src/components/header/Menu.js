import React from 'react'

function Menu() {
    return (
        <div className="collapse navbar-collapse" id="dd-nav">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                    <a className="nav-link" href="#">
                        Home <span className="sr-only">(current)</span>
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Projects
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                        Skills
                    </a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="btn btn-primary" href="#">
                        CONTACT
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Menu
