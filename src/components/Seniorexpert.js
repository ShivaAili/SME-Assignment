import React, { useState } from 'react';
import './Seniorexpert.css'
import { RiLightbulbFlashLine } from "react-icons/ri";
import { IoCalendarClear, IoPersonRemove } from "react-icons/io5";
import { VscGraphLine } from "react-icons/vsc";
import { LineChart } from '@mui/x-charts/LineChart';
import { BarChart, SparkLineChart, PieChart } from '@mui/x-charts'; // Ensure this import exists
import Box from '@mui/material/Box'; // Import Box component
import { HiOutlineSquares2X2 } from "react-icons/hi2";

import Smeimage from '../assets/sme-image.jpg'; // Correct way for default export
import logo from '../assets/logo.png'
import profile1 from '../assets/profile-1.jpg';
import profile2 from '../assets/profile-2.jpg';
import profile3 from '../assets/profile-3.jpg';
import profile4 from '../assets/profile-4.jpg';
import profile5 from '../assets/profile-5.jpg';
import profile6 from '../assets/profile-6.jpg';

import company1 from '../assets/company-1.png';
import company2 from '../assets/company-2.png';
import company3 from '../assets/company-3.png';
import company4 from '../assets/company-4.png';
import company5 from '../assets/company-5.png';






function Seniorexpert() {
  const balanceSheet = [
    { year: '2021', currAss: 200, nCurrAss: 100, curLia: 150, nCurLia: 50, capStock: 70, retEarn: 100, treas: 30 },
    { year: '2022', currAss: 250, nCurrAss: 120, curLia: 180, nCurLia: 60, capStock: 20, retEarn: 110, treas: 40 },
    { year: '2023', currAss: 300, nCurrAss: 140, curLia: 210, nCurLia: 70, capStock: 100, retEarn: 120, treas: 50 },
    // Add more years as needed
  ];
  
  const addLabels = (data) => {
    return data.map(item => ({
      ...item,
      label: `${item.year}` // Assuming you want to label by year
    }));
  };
  
  const desktopOS = [
    { name: 'Windows', value: 400 },
    { name: 'Mac', value: 300 },
    { name: 'Linux', value: 300 },
  ];
  const valueFormatter = (value) => {
    return `${value} users`; // Customize this format as needed
  };
  
  
  const [toggleFor, setToggleFor] = useState('seniors'); // Toggle state

  const handleToggle = () => {
    setToggleFor(toggleFor === 'seniors' ? 'smes' : 'seniors');
  };


  return (
    <div >
      <div className="main-container">
      <header className="navbar">
        <div className='navbar-section-1'>
       <img src={logo} alt='logo' className="logo"/>
        <nav>
          <a href="#projects">Explore Projects</a>
          <a href="#about">About Us</a>
          <a href="#resources">Resources</a>
          <a href="#contact">Contact</a>
        </nav>
        </div>
        <div className='navbar-section-2'>
          <button className="sign-in-btn">Sign In</button>
          <button className="register-btn">Register</button>
        </div>
      </header>

      <section className="hero-section">
        <div className="toggle-container">
          <span>For Seniors</span>
          <label className="switch">
            <input type="checkbox" onChange={handleToggle} />
            <span className="slider round"></span>
          </label>
          <span>For SMEs</span>
        </div>
        <h1 className="hero-title">Unlock New Opportunities <br/> in Retirement</h1>
        <p className="hero-description">
          Explore flexible work arrangements that fit your lifestyle. Keep <br/> learning and growing professionally.
        </p>
        <div className="cta-buttons">
          <button className="cta-btn register">Register</button>
          <button className="cta-btn demo">Get Demo</button>
        </div>
        <div className="trusted-info">
          <div className="profile-images">
            <img src={profile1} alt="Profile 1" className="profile-img" />
            <img src={profile2} alt="Profile 2" className="profile-img" />
            <img src={profile3} alt="Profile 3" className="profile-img" />
            <img src={profile4} alt="Profile 4" className="profile-img" />
            <img src={profile5} alt="Profile 5" className="profile-img" />
            <img src={profile6} alt="Profile 6" className="profile-img" />

          </div>           
          <p>Trusted by <strong>5000+</strong> Senior Experts and <strong>200+ </strong> SMEs</p>
        </div>
        <div className= "company-logo">
            <img src={company1} alt="company1" />
            <img src={company2} alt="company2" />
            <img src={company3} alt="company3" />
            <img src={company4} alt="company4" />
            <img src={company5} alt="company5" />
        </div>
      </section>
      </div>
      <div className='empower-section'>
        <h2 className='empower-title'>Empower Your Next Chapter: Discover the Benefits <br/> of Joining Our Senior Expert Community</h2>
        <div className="benefits">
          <div className="benefit-item">
            <RiLightbulbFlashLine className='benefits-icon'/>
            <h4>Share Your Expertise</h4>
            <p>Continue making a meaningful impact by sharing your knowledge and experience with businesses seeking your guidance.</p>
          </div>
          <div className="benefit-item">
            <IoCalendarClear className='benefits-icon'/>
            <h4>Flexible Opportunities</h4>
            <p>Choose projects that align with your interests and availability, enjoying the freedom and flexibility of independent work.</p>
          </div>
          <div className="benefit-item">
            <VscGraphLine className='benefits-icon'/>
            <h4>Continued Growth</h4>
            <p>Stay engaged and challenged by tackling new projects and expanding your professional network.</p>
          </div>
        </div>
        </div>
          <section class="how-it-works">
            <div className='how-it-works-container'>
              <div className="how-it-works-toggle-container">
                <span>For Seniors</span>
                <label className="switch">
                  <input type="checkbox" onChange={handleToggle} />
                  <span className="slider round"></span>
                </label>
                <span>For SMEs</span>
                <h2>How It Works?</h2>
              </div>
              <div className='how-it-works-get-started'>
                <p>Highlight your skills, experience, and areas <br/>of expertise to attract potential clients.</p>
                <button class="get-started-btn">Get Started</button>
              </div>
            </div>
            <div class="steps">
                <div class="step">
                    <div class="step-icon">1</div>
                    <IoPersonRemove/>
                    <h4>Create Your Profile</h4>
                    <p>Highlight your skills, experience, and areas of expertise to attract potential clients.</p>
                </div>
                <div class="step">
                    <div class="step-icon">2</div>
                    <h4>Explore Projects</h4>
                    <p>Discover a wide range of projects aligned with your interests and skillset.</p>
                </div>
                <div class="step">
                    <div class="step-icon">3</div>
                    <h4>Apply & Connect</h4>
                    <p>Submit compelling proposals and build relationships with prospective clients.</p>
                </div>
                <div class="step">
                    <div class="step-icon">4</div>
                    <h4>Get Started</h4>
                    <p>Embark on stimulating projects and contribute your valuable insights to drive success.</p>
                </div>
            </div>
            <div class="get-started-container">
            </div>
        </section>

        <div class="efficient-tools">
            <div class="tools">
                <div class="tool">
                    <div class="tool-icon">&#10004;</div>
                    <div>
                      <p>Efficient Management: Tools that streamline <br/> project communication and collaboration.</p>
                    </div>
                </div>
                <div class="tool">
                    <div class="tool-icon">&#10004;</div>
                    <p>Secure & Trusted: We prioritize data security <br/> and user privacy.</p>
                </div>
                <div class="tool">
                    <div class="tool-icon">&#10004;</div>
                    <p>Dedicated Support: Our team is here to assist <br/> with any concerns.</p>
                </div>
            </div>
        </div>
        
      

        {/* Cards Section */}
              <div className="expert-sme-section">
        <h2>For Senior Experts and SMEs.</h2>
        <p>Where Expertise Meets Opportunity for Mutual Success, Fostering Growth and Innovation Through Collaboration.</p>

        <div className="expert-sme-grid">
          {/* Card 1: Expertise Meets Opportunity */}
          <div className="card">
            <div className="card-upper">

                <LineChart
                  xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
                  series={[
                    {
                      data: [2, 5.5, 2, 8.5, 1.5, 5],
                      valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                    },
                    {
                      data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                      data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                      valueFormatter: (value) => (value == null ? '?' : value.toString()),
                    },
                  ]}
                  height={200}
                  margin={{ top: 10, bottom: 20 }}
                />
              </div>
            <div className="card-lower">
              <h4>Expertise Meets Opportunity</h4>
              <p>Connect with seasoned professionals across diverse industries, gaining access to specialized skills and insights to drive your business forward.</p>
            </div>
          </div>

          {/* Card 2: Efficiency & Cost-Effectiveness */}
          <div className="card">
            <div className="card-upper">
              {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 50" className="chart-line">
                <polyline
                  fill="none"
                  stroke="rgba(0, 128, 0, 0.8)"
                  strokeWidth="2"
                  points="0,40 10,30 20,35 30,20 50,15 70,25 90,5"
                />
              </svg> */}
              <Box sx={{ flexGrow: 1 }}>
              <SparkLineChart data={[1, 4, 2, 5, 7, 2, 4, 6]} height={200} />
              </Box>
            </div>
            <div className="card-lower">
              <h4>Efficiency & Cost-Effectiveness</h4>
              <p>Leverage a flexible workforce to optimize your budget and achieve your goals without the overhead costs of full-time employees.</p>
            </div>
          </div>
          </div>
          {/* Card 3: Knowledge Transfer & Mentorship */}
          <div className='card-section-2'>
          <div className="card">
            <div className="card-upper">
            <BarChart
                  dataset={balanceSheet}
                  series={addLabels([
                    { dataKey: 'currAss', stack: 'assets' },
                    { dataKey: 'nCurrAss', stack: 'assets' },
                    { dataKey: 'curLia', stack: 'liability' },
                    { dataKey: 'nCurLia', stack: 'liability' },
                    { dataKey: 'capStock', stack: 'equity' },
                    { dataKey: 'retEarn', stack: 'equity' },
                    { dataKey: 'treas', stack: 'equity' },
                  ])}
                  xAxis={[{ scaleType: 'band', dataKey: 'year' }]}
                  slotProps={{ legend: { hidden: true } }}
                  width={320}
                  height={250}
                />          
             </div>
            <div className="card-lower">
              <h4>Knowledge Transfer & Mentorship</h4>
              <p>Benefit from the wisdom and guidance of experienced professionals, fostering a culture of learning and development within your organization.</p>
            </div>
          </div>

          {/* Card 4: Innovation & Growth */}
          <div className="card">
            <div className="card-upper">
            <LineChart
                xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
                series={[
                  {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    area: true,
                  },
                ]}
                width={300}
                height={250}
              />            
              </div>
            <div className="card-lower">
              <h4>Innovation & Growth</h4>
              <p>Tap into fresh perspectives and innovative ideas to spark creativity, overcome challenges, and unlock new opportunities for your business.</p>
            </div>
          </div>

          {/* Card 5: Mutual Success */}
          <div className="card">
            <div className="card-upper">
            <PieChart
              series={[
                {
                  data: desktopOS,
                  highlightScope: { fade: 'global', highlight: 'item' },
                  faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                  valueFormatter,
                },
              ]}
              height={250}
            />            
            </div>
            <div className="card-lower">
              <h4>Mutual Success</h4>
              <p>Build lasting relationships based on trust, collaboration, and shared goals, achieving exceptional results together.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
            <div className="container-section">
                <div className="text-content">
                    <h1>Empowering SMEs to <br/> achieve their full potential</h1>
                    <p>
                        Connect with experienced talent to fuel your growth, <br/>
                        innovation, and success.
                    </p>
                    <button className="post-project-btn">Post a Project</button>
                </div>
                <div className="image-container">
                    <img src={Smeimage} alt="Sme" className="sme-image" />
                </div>
            </div>
            <div className="opportunities-section">
                <h2>Discover a World of Opportunities Tailored to Your Expertise.</h2>
                <p>
                    Discover a diverse range of projects tailored to your skills and experience.
                    Browse through current <br/>
                     openings and find the perfect fit for your expertise.
                </p>
                <div className="tags">
                    <span> <HiOutlineSquares2X2/> Business Strategy</span>
                    <span> <HiOutlineSquares2X2/> Marketing & Sales</span>
                    <span> <HiOutlineSquares2X2/> Finance & Accounting</span>
                    <span> <HiOutlineSquares2X2/> Technology & IT</span>
                    <span> <HiOutlineSquares2X2/> Operations & Management</span> <br/> <br/>
                    <span> <HiOutlineSquares2X2/> Human Resources</span>
                    <span> <HiOutlineSquares2X2/> Legal & Compliance</span>
                    <span> <HiOutlineSquares2X2/> Healthcare</span>
                    <span> <HiOutlineSquares2X2/> Education</span>
                </div>
            </div>
        </div>
      <div>
      </div>
      </div>
    );
  };
  
  export default Seniorexpert

