// src/components/BenefitsSection.js
import React from 'react';
import BenefitCard from './BenefitCard';
import styles from './BenefitsSection.module.css';

// Sample images, replace them with your actual paths
import image1 from '../assets/image1.jpg';
import image2 from '../assets/image2.jpg';
import image3 from '../assets/image3.jpg';

const BenefitsSection = () => {
    const benefits = [
        {
            imageSrc: image1,
            title: "Flexible Engagement",
            description: "Choose projects that align with your interests and availability, enjoying the freedom and flexibility of independent work."
        },
        {
            imageSrc: image2,
            title: "Meaningful Impact",
            description: "Choose projects that align with your interests and availability, enjoying the freedom and flexibility of independent work."
        },
        {
            imageSrc: image3,
            title: "Continuous Growth",
            description: "Stay engaged, challenged, and connected by tackling new projects and expanding your professional network."
        }
    ];

    return (
        <div className={styles.benefitsSection}>
            <div className={styles.cardsContainer}>
                {benefits.map((benefit, index) => (
                    <BenefitCard 
                        key={index}
                        imageSrc={benefit.imageSrc}
                        title={benefit.title}
                        description={benefit.description}
                    />
                ))}
            </div>
            <div className={styles.sectionFooter}>
                <h2>Benefits of Joining Our Senior <br/> Expert Community</h2>
                <div className={styles.sectionFooterPara}>
                    <p>Our platform empowers Senior Experts to share their <br/> valuable knowledge, connect with exciting opportunities, <br/> and continue making a meaningful impact.</p>
                    <button className={styles.ctaButton}>Explore Opportunities</button>
                </div>
            </div>
        </div>
    );
};

export default BenefitsSection;
