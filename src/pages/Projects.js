import React from 'react'
import ProjectItem from '../components/ProjectItem';
import styles from './Projects.module.css';
import {ProjectList} from '../helpers/ProjectList';

function Projects() {
  return (
    <div className={styles.projects}>
      <h1>My Personal Projects</h1>
      <div className={styles.projectList}>
        {ProjectList.map((item,key)=>{
          return <ProjectItem name={item.name} image={item.image} key={key} id={key}/>
        })}
      </div>
    </div>
  )
}

export default Projects