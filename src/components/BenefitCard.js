// src/components/BenefitCard.js
import React from 'react';
import styles from './BenefitCard.module.css';

const BenefitCard = ({ imageSrc, title, description }) => {
    return (
        <div className={styles.card}>
            <img src={imageSrc} alt={title} className={styles.cardImage} />
            <h3 className={styles.cardTitle}>{title}</h3>
            <p className={styles.cardDescription}>{description}</p>
        </div>
    );
};

export default BenefitCard;
