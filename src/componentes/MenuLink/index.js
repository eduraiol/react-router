import React from 'react'
import { NavLink } from 'react-router-dom';
import styles from './MenuLink.module.css'

function MenuLink({ children, to }) {

    return (
        <NavLink
            className={({ isActive }) => `
                ${styles.link}
                ${isActive ? styles.linkDestacado : ""}
            `}
            to={to}
            end
        >
            {children}
        </NavLink>
    )
}

export default MenuLink
