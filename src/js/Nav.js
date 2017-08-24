import React from 'react';
import {BrowserRouter as Router, Route, NavLink, withRouter} from 'react-router-dom';
import '../css/Nav.scss'

function Nav() {
    return (
        <withRouter>

            <div>
                <ul className="navBar">
                    <li>
                        <NavLink exact activeClassName="active" to="/"> Home </NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName="active" to="/battle"> Battle </NavLink>
                    </li>

                    <li>
                        <NavLink activeClassName="active" to="/popular"> Popular </NavLink>
                    </li>
                </ul>
            </div>

        </withRouter>
    )
}

module.exports = Nav;