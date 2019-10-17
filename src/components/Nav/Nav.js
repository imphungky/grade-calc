import React from 'react';
import "./nav.css";


const Nav = props => {
    let navopen;
    if(props.show) {
        navopen = "nav-anim"
    }
    else {
        navopen = "nav"
    }

    return (
        <div className={navopen}>
            <ul className="nav-ul">
                <div>
                    2019/2020
                </div>
            </ul>
        </div>
    )
}

export default Nav;