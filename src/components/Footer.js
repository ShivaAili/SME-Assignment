// src/components/Footer.js

import React from 'react';
import styles from './Footer.module.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import logo from '../assets/logo.png';  // Import your logo here

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div id={styles.container}>
               
                <div className={styles.row}>
                <div className={styles.logoSection}>
                    <img src={logo} alt="Company Logo" className={styles.logo} />
                </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Product</h3>
                        <ul className={styles.links}>
                            <li><a href="/features">Features</a></li>
                            <li><a href="/pricing">Pricing</a></li>
                            <li><a href="/documentation">Documentation</a></li>
                            <li><a href="/integrations">Integrations</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Company</h3>
                        <ul className={styles.links}>
                            <li><a href="/about">About Us</a></li>
                            <li><a href="/careers">Careers</a></li>
                            <li><a href="/blog">Blog</a></li>
                            <li><a href="/team">Our Team</a></li>
                        </ul>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Contact</h3>
                        <p className={styles.text}>Email: info@example.com</p>
                        <p className={styles.text}>Phone: +123 456 7890</p>
                        <p className={styles.text}>Address: 1234 Web Street, Tech City</p>
                    </div>
                    <div className={styles.column}>
                        <h3 className={styles.title}>Legal</h3>
                        <ul className={styles.links}>
                            <li><a href="/privacy-policy">Privacy Policy</a></li>
                            <li><a href="/terms-of-service">Terms of Service</a></li>
                            <li><a href="/cookies-policy">Cookies Policy</a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.socialRow}>
                    <div className={styles.socialIcons}>
                        <a href="https://facebook.com" aria-label="Facebook"><FaFacebook /></a>
                        <a href="https://twitter.com" aria-label="Twitter"><FaTwitter /></a>
                        <a href="https://linkedin.com" aria-label="LinkedIn"><FaLinkedin /></a>
                        <a href="https://instagram.com" aria-label="Instagram"><FaInstagram /></a>
                    </div>
                    <div className={styles.copy}>
                        <p className={styles.text}>&copy; 2024 Your Website. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
