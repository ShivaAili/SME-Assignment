// src/components/ToggleSwitch.js
import React, { useState } from 'react';
import styles from './ToggleSwitch.module.css';

const ToggleSwitch = () => {
    const [isForSeniors, setIsForSeniors] = useState(true);

    return (
        <div className={styles.toggleSwitch}>
            <span className={isForSeniors ? styles.active : ''}>For Seniors</span>
            <div className={styles.switch} onClick={() => setIsForSeniors(!isForSeniors)}>
                <div className={`${styles.toggle} ${isForSeniors ? styles.left : styles.right}`}></div>
            </div>
            <span className={!isForSeniors ? styles.active : ''}>For SMEs</span>
        </div>
    );
};

export default ToggleSwitch;
