import React from 'react'
import Smeimage from '../assets/sme-image.jpg'; // Correct way for default export
import styles from './Platform.module.css'
import { FaAngleRight } from "react-icons/fa6";


function Platform() {
  return (
    <div>
        <div className={styles.platformSection}>
                <div className={styles.platformContent}>
                    <h1>Why SME's Should Choose Our  <br/>PlatForm?</h1>
                   <div className={styles.platformInside}>
                    <h3>Acess a Vest Network of Expertise</h3> 
                    <FaAngleRight style={{background: "#f75e5e", fontSize: "25px",color: "white",borderRadius: "5px"}}/>
                   </div>
                   <p style={{color: "white"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                   <div className={styles.platformInside}>
                    <h3>Acess a Vest Network of Expertise</h3> 
                    <FaAngleRight style={{background: "#f75e5e", fontSize: "25px",color: "white",borderRadius: "5px"}}/>
                   </div>
                   <div className={styles.platformInside}>
                    <h3>Acess a Vest Network of Expertise</h3> 
                    <FaAngleRight style={{background: "#f75e5e", fontSize: "25px",color: "white",borderRadius: "5px"}}/>
                   </div>
                </div>
                <div className={styles.platformImageContainer}>
                    <img src={Smeimage} alt="Sme" className={styles.platformImage} />
                </div>
            </div>
    </div>
  )
}

export default Platform