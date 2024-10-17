// src/components/TestimonialsSection.js
import React from 'react';
import TestimonialCard from './TestimonialCard';
import ToggleSwitch from './ToggleSwitch';
import styles from './TestimonialsSection.module.css';

// Sample images, replace them with your actual paths
import rajeshImage from '../assets/profile-1.jpg';
import anitaImage from '../assets/profile-2.jpg';

const TestimonialsSection = () => {
    const testimonials = [
        {
            name: "Rajesh Sharma",
            role: "Marketing Executive",
            testimonial: "This platform has given me the opportunity to stay engaged and continue contributing my skills. I love the flexibility and the variety of projects available.",
            imageSrc: rajeshImage
        },
        {
            name: "Anita Verma",
            role: "Project Manager",
            testimonial: "I've found meaningful projects that allow me to utilize my expertise and make a difference. It's a win-win for both me and the businesses I work with.",
            imageSrc: anitaImage
        }
    ];

    return (
        <div className={styles.testimonialsSection}>
            <div style={{width: "40%"}}>
                <ToggleSwitch />
                <h2>Hear from Our Thriving <br/> Community of Senior Experts <br/> and SMEs.</h2>
                <p>Discover firsthand how our platform is empowering Senior <br/> Experts to share their valuable knowledge and helping SMEs <br/> achieve their goals.</p>
            </div>
            <div className={styles.cardsContainer}>
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard 
                        key={index}
                        name={testimonial.name}
                        role={testimonial.role}
                        testimonial={testimonial.testimonial}
                        imageSrc={testimonial.imageSrc}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonialsSection;
