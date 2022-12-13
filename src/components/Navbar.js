import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';
import ReorderIcon from '@material-ui/icons/Reorder'
function Navbar() {
    const [ expandNavbar, setExpandNavbar ] = useState(false);
    const location = useLocation();
    useEffect(()=>{
        setExpandNavbar(false);
    },[location]);
  return (
    <div className={styles.navbar} id={expandNavbar?styles.open:styles.close}>
        <div className={styles.toggleButton}>
            <button onClick={()=>{setExpandNavbar(prev=>!prev)}}><ReorderIcon/></button>
        </div>
        <div className={styles.links}>
            <Link to="/"> Home </Link>  
            <Link to="/projects"> Project </Link>
            <Link to="/experience"> Experience </Link>
        </div>
    </div>
  )
}

export default Navbar