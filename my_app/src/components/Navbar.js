import { FaBars, FaTimes } from 'react-icons/fa'

import { useRef, useState, useEffect } from "react";
import "../Styles/main.css";
import { NavLink, useLocation } from "react-router-dom";
import FlashMessage from "./Messages";

import React from 'react';

const Navbar = () => {
    const [flashMessage, setFlashMessage] = useState("");
    const [flashMessageType, setFlashMessageType] = useState("");
    const [showFlashMessage, setShowFlashMessage] = useState("");
    const [hasBorder, setHasBorder] = useState(false);
    const navRef = useRef();
    const loc = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            if (
                document.body.scrollTop > 50 ||
                document.documentElement.scrollTop > 50
            ) {
                setHasBorder(true);
            } else {
                setHasBorder(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => {
        if (path === "/") {
            return location.pathname === path;
        } else {
            return location.pathname.startsWith(path);
        }
    };

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav")
    };

    const handleLogout = () => {
        if (localStorage.getItem("token")) {
            localStorage.removeItem('token');
            setFlashMessage("logged out successfully");
            setFlashMessageType("success");
            setShowFlashMessage(true);
        }else {
            setFlashMessage("log out failed");
            setFlashMessageType("danger");
            setShowFlashMessage(true);
        };
    };

  return (
    <>
        <header style={{ borderBottom: hasBorder ? '1.5px solid #1B1B1B' : 'none'}}>
            <h3>Logo</h3>
            <nav ref={navRef}>
                <NavLink exact className={`link ${isActive('/') ? 'active' : ''}`} to='/'>
                    Home
                </NavLink>
                <NavLink className={`link ${isActive('/register') ? 'active' : ''}`} to='/register'>
                    Register
                </NavLink>
                <NavLink className={`link ${isActive('/login') ? 'active' : ''}`} to='/login'>
                Login
                </NavLink>
                {/* <NavLink className={`link ${isActive('/') ? 'active' : ''}`} onClick={handleLogout}>
                    Logout
                </NavLink> */}
                <NavLink className={`link ${isActive('/profile') ? 'active' : ''}`} to='/profile'>
                    Profile
                </NavLink>
                <NavLink className={`link ${isActive('/123') ? 'active' : ''}`} to='/123'>
                    Inventory
                </NavLink>
                <NavLink className={`link ${isActive('/456') ? 'active' : ''}`} to='/456'>
                    All Bobs
                </NavLink>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                    <FaTimes/>
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars/>
            </button>
        </header>
        {showFlashMessage && (
            <FlashMessage
                message={flashMessage}
                type={flashMessageType}
                onClose={() => setShowFlashMessage(false)}
            />
        )}
    </>
  );
};

export default Navbar;