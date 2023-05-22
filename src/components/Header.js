import React from 'react'
import './header.css'
import { useNavigate } from 'react-router-dom'
import logoutButton from '../Assets/Image/logoutButton.png';
import invoice_logo from '../Assets/Image/invoice_logo.png'
export const Header = () => {
    const navigate = useNavigate()
    const handleNavigate = () => {
        navigate('/')
    }
    return (
        <div className='header-main-component'>
            <div className='header-icon-container'>
                <img src={invoice_logo} />
                <h1>Billing System</h1>
            </div>
            <button className='logout-button' onClick={handleNavigate}>
                <img src={logoutButton} />
                Logout
            </button>
        </div>
    )
}
