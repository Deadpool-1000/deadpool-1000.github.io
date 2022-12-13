import React from 'react'
import styles from './Home.module.css';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import { Button, IconButton } from '@material-ui/core';
import profile from '../assets/profile.jpg';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import resume from '../assets/milind_resume.pdf';
function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.about}>
          <h2>Hi, My name is Milind</h2>
          <div className={styles.prompt}> 
            <p>An aspiring Software Developer with a passion for learning and creating</p>
            <IconButton onClick={()=>window.open("https://www.linkedin.com/in/milind-bhatnagar-ba2b5b24a","_blank")}><LinkedInIcon/></IconButton>
            <IconButton href="mailto:milibhatnagar2002@gmail.com"><EmailIcon/></IconButton>
            <IconButton onClick={()=>window.open( "https://github.com/Deadpool-1000","_blank") }><GithubIcon/></IconButton>
          </div>
      </div>
      <div className={styles.skills}>
          <h1>Skills</h1>
          <ol className={styles.list}>
            <li className={styles.item}>
              <h2>Front-End</h2>
              <span>ReactJS, HTML, CSS, NPM, BootStrap, StyledComponents, API</span>
            </li>
            <li className={styles.item}>
              <h2>Back-End</h2>
              <span>NodeJS, Flask, ExpressJS, MongoDB, MySQL, PHP</span>
            </li>
            <li className={styles.item}>
              <h2>Languages</h2>
              <span>JavaScript, Java, C/C++, Python, PHP</span>
            </li>
          </ol>
      </div>
      <div className={styles.details}>
          <h1>About me</h1>
          <div className={styles.detailsContainer}>
              <img src={profile} alt="profile"/>
              <div className={styles.detailsText}>
                <p>Hi, I am Milind Bhatnagar,21, an aspiring software developer. I am already on my way to gain core knowledge in the field of Information Technology(IT) by pursuing Bachelor of Technology from Manipal University Jaipur which is going to be completed in June 2024. My areas of interest during professional journey will be Web Developing and Artificial Intelligence/Machine Learning(AI/ML). My academic record stands at 8.6 on the scale of 10.
                  It is my quest for knowledge that has led me to gain additional knowledge by the way of different certificate courses beyond my structured academic curriculum. My search for an appropriate opportunity is on and I am available for challenging opportunities in the grand field of IT which has become the need of the hour. </p>
              </div>
          </div>
          <a href={resume} download="milind_resume.pdf"><Button style={{background:"#bf94e4"}} variant="contained" endIcon={<FileDownloadIcon/>}>Download Resume</Button></a>
      </div>
    </div>
  )
}

export default Home