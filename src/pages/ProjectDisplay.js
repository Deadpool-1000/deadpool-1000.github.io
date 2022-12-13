import React from 'react'
import { useParams } from 'react-router-dom';
import { ProjectList } from '../helpers/ProjectList';
import GithubIcon from '@material-ui/icons/GitHub';
import { IconButton } from '@material-ui/core';
import styles from './ProjectDisplay.module.css';

function ProjectDisplay() {
    const {id} = useParams();
    const project = ProjectList[id];
  return (
    <div className={styles.project}>
        <h1>{project.name}</h1>
        <img src={project.image} alt="Project"/>
        <p><b>Skills:</b> {project.skills}</p>
        <IconButton onClick={()=>{window.open(project.git,"_blank")}}>
          <GithubIcon/>
        </IconButton>
    </div>
  )
}

export default ProjectDisplay