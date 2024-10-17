// src/components/JobListings.js

import React from 'react';
import Card from './Card';
import styles from './JobListings.module.css'
import logo from '../assets/logo.png'; // Replace with the correct path to your logo

const JobListings = () => {
    const jobs = [
        {
            logo,
            company: "Tech Innovators Ltd.",
            location: "Bangalore",
            title: "Finance Advisor",
            description: "Provide financial guidance and strategic planning to a growing startup.",
            tags: ["Part-time, Remote", "Financial Analysis", "Strategic Planning", "Startup Experience"],
            verified: true
        },
        {
            logo,
            company: "Green Earth Products",
            location: "Delhi",
            title: "Marketing Consultant",
            description: "Develop and implement a marketing strategy to increase brand awareness.",
            tags: ["3-Month Contract", "Marketing Strategy", "Digital Marketing", "Brand Management"],
            verified: false
        },
        {
            logo,
            company: "Global Logistics Solutions",
            location: "Mumbai",
            title: "Operations Manager",
            description: "Oversee daily operations, optimize processes, and improve overall efficiency.",
            tags: ["Full-time, On-site ", "Operations Management", "Process Improvement", "Leadership"],
            verified: false
        },
        {
            logo,
            company: "PeopleFirst Consulting",
            location: "Chennai",
            title: "HR Consultant",
            description: "Design and implement HR policies, procedures, and employee engagement.",
            tags: ["Work from Home", "HR Management", "Employee Relations", "Talent Acquisition"],
            verified: true
        },
        {
            logo,
            company: "Lex & Co. Law Firm",
            location: "Hyderabad",
            title: "Legal Advisor",
            description: "Provide legal counsel on contracts, compliance, and risk management.",
            tags: ["1-Month Contract, Remote", "Legal Expertise", "Contract Review", "Compliance"],
            verified: false
        },
        {
            logo,
            company: "GrowthMinds Ventures",
            location: "Pune",
            title: "Business Development Manager",
            description: "Identify and develop new business opportunities, build relationships, and close deals.",
            tags: ["Full-time", "Hybrid", "Business Development", "Sales", "Negotiation"],
            verified: true
        },
    ];

    return (
        <div className={styles.jobListings}>
            {jobs.map((job, index) => (
                <Card key={index} {...job} />
            ))}
        </div>
    );
};

export default JobListings;
