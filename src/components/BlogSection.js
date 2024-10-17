// src/components/BlogSection.js

import React from 'react';
import styles from './BlogSection.module.css';
import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';
import profile4 from '../assets/profile-4.jpg';

const BlogSection = () => {
    const blogs = [
        {
            title: "The Future of Web Development",
            description: "Explore the latest trends in web development for 2024 and beyond. This article discusses emerging technologies like AI, progressive web apps, and the importance of responsive design in creating user-friendly experiences.",
            image: profile1,
            name: "Rajesh Sharma",
            designation: "Marketing Executive"
        },
        {
            title: "Understanding React Hooks",
            description: "A comprehensive guide to React Hooks and how they simplify state management. Learn how to effectively manage state and lifecycle methods using Hooks, and why they are a game-changer for functional components.",
            image: profile2,
            name: "Anita Verma",
            designation: "Web Developer"
        },
        {
            title: "Best Practices for Responsive Design",
            description: "Learn the top strategies for making your web designs responsive. This blog covers flexible layouts, CSS media queries, and techniques to ensure your website looks great on all devices.",
            image: profile3,
            name: "John Doe",
            designation: "UI/UX Designer"
        },
        {
            title: "Why JavaScript is the Future",
            description: "Discover why JavaScript continues to dominate the web development industry. Explore the versatility of JavaScript in both front-end and back-end development and its growing ecosystem of frameworks and libraries.",
            image: profile4,
            name: "Jane Smith",
            designation: "Software Engineer"
        },
    ];

    return (
        <>
        <div className={styles.blogSectionHeading}>
            <h1>News and Blogs</h1>
            <p>Explore the variety of topic and gain knowledge from experienced professionals across different industry</p>
        </div>
        <div className={styles.blogSection}>
            {blogs.map((blog, index) => (
                <div key={index} className={styles.card}>
                    <div className={styles.content}>
                        <img src={blog.image} alt={blog.title} className={styles.image} />
                        <div className={styles.nameContainer}>
                            <div className={styles.name}>{blog.name}</div>
                            <div className={styles.designation}>{blog.designation}</div>
                        </div>
                    </div>
                    <h3>{blog.title}</h3>
                    <p>{blog.description}</p>
                </div>
            ))}
        </div>
        </>
    );
};

export default BlogSection;
