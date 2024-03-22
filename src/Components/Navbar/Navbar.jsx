import React, { useState, useEffect } from 'react';
import './Navbar.css';
import '../Hero/Hero.css';

const Navbar = () => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsTop(scrollTop === 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="navbar-hero-container">
            <div className={`navbar-margin ${isTop ? 'visible' : ''}`} />
            <nav className={`navbar navbar-expand-lg p-0 ${!isTop ? 'sticky-top scrolled' : ''}`}>
                <div className="container-fluid navbar-inner ">
                    <a className="navbar-brand" href="/">
                        <img src="./logo.svg" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between " id="navbarSupportedContent">
                        <ul className="navbar-nav inter-bold mb-2 mb-lg-0 ul1">
                            <li className="nav-item ">
                                <a className="nav-link" aria-current="page" href="/">Home</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link " href="/">Businesses</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Investor Relations</a>
                            </li>
                            <li className="nav-item ">
                                <a className="nav-link" href="/">Career</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/">
                                    Customer Care
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav inter-bold mb-2 mb-lg-0 ul2">
                            <li className="nav-item btn1">
                                <a className="nav-link" href="/">
                                    Store Locator
                                </a>
                            </li>
                            <li className="nav-item btn2">
                                <a className="nav-link" href="/">
                                    Shop Now
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;
