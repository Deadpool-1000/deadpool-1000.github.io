import React from 'react'
import styles from './ProjectItem.module.css';
import { useNavigate } from 'react-router-dom';
function ProjectItem( {id, image, name } ) {
  const navigate = useNavigate();
  return (
    <div className={styles.projectItem} onClick={()=>{navigate("/projects/"+id)}}>
        <div style={{backgroundImage:`url(${image})`}} className={styles.bgImage}/>
        <h1>{name}</h1>
    </div>
  )
}

export default ProjectItem