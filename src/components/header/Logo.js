import React from 'react';
import logo from '../../img/logo.svg';

function Logo() {
    return (
        <div className="logo">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" />
            </a>
            <a className="btn btn-primary d-md-none" href="#">
                CONTACT
            </a>
            <button
                className="navbar-toggler collapsed"
                type="button"
                data-toggle="collapse"
                data-target="#dd-nav"
                aria-controls="dd-nav"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
            </button>
        </div>
    )
}

export default Logo
