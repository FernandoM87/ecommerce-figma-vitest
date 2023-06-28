import * as React from 'react'
import styles from '../../App.module.css'; 

export default function Navbar() {
    return (
        <nav>
            <ul className={styles.navbar}>
                <li className={styles.menuItem} role='listitem'>Collections</li>
                <li className={styles.menuItem} role='listitem'>Men</li>
                <li className={styles.menuItem} role='listitem'>Women</li>
                <li className={styles.menuItem} role='listitem'>About</li>
                <li className={styles.menuItem} role='listitem'>Contact</li>
            </ul>
        </nav>
    )
}