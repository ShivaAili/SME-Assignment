// src/components/TestimonialCard.js
import React from 'react';
import styles from './TestimonialCard.module.css';

const TestimonialCard = ({ name, role, testimonial, imageSrc }) => {
    return (
        <div className={styles.testimonialCard}>
            <div className={styles.testimonialHeader}>
                <span className={styles.testimonialTag}>Expert Testimonial</span>
                <div className={styles.stars}>
                    {/* Add 5 stars */}
                    {Array(5).fill('⭐').map((star, index) => (
                        <span key={index}>{star}</span>
                    ))}
                </div>
            </div>
            <p className={styles.testimonialText}>{testimonial}</p>
            <div className={styles.profile}>
                <img src={imageSrc} alt={name} className={styles.profileImage} />
                <div>
                    <h4 className={styles.profileName}>{name}</h4>
                    <p className={styles.profileRole}>{role}</p>
                </div>
            </div>
        </div>
    );
};

export default TestimonialCard;
