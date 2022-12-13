import React from 'react'
import styles from './Footer.module.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { IconButton } from '@material-ui/core';
function Footer() {
  return (
    <div className={styles.footer}>
        <div className={styles.socialMedia}>

            <IconButton onClick={()=>window.open("https://www.instagram.com/milind_coder","_blank")}><InstagramIcon/></IconButton>
            <IconButton onClick={()=>window.open("https://twitter.com/Deadpool_coder","_blank")}><TwitterIcon/></IconButton>
            <IconButton onClick={()=>window.open("https://www.linkedin.com/in/milind-bhatnagar-ba2b5b24a","_blank")}><LinkedInIcon/></IconButton>
        </div>
        <p> &#169; 2022 Milind Bhatnagar </p>
    </div>
  )
}

export default Footer