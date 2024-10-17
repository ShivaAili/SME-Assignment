

import React from 'react';
import styles from './Card.module.css';

const Card = ({ logo, company, location, title, description, tags, verified }) => {
    return (
        <div className={styles.jobCard}>
            <div className={styles.cardHeader}>
                <div className={styles.companyInfo}>
                    <h3>{company}</h3>
                    <p>{location}</p>
                </div>
                <img src={logo} alt="Company Logo" className={styles.logo} />
            </div>
            <h2 className={styles.jobTitle}>{title}</h2>
            <p className={styles.jobDescription}>{description}</p>
            <div className={styles.tags}>
                {tags.map((tag, index) => (
                    <span key={index} className={styles.tag}>{tag}</span>
                ))}
            </div>
            <div className={styles.footer}>
                <button className={styles.applyBtn}>Apply Now</button>
                {verified && <span className={styles.verified}>Verified</span>}
            </div>
        </div>
    );
};

export default Card;
