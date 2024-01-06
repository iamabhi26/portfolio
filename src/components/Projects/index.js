import './index.css'

const Projects = props => {
    const {projectDetails} = props
    const {projectName, projectLink, description, imageLink} = projectDetails

    return (
        <li className='projects-list'>
            <div className='project-text-container'>
                <h1 className='project-name'>{projectName}</h1>
                <p className='project-description'>{description}</p>
                <a href={projectLink} rel="noreferrer" className='project-link'>View Project</a>
            </div>
            <div>
                <img src={imageLink} alt="project"  className='project-image'/>
            </div>
        </li>
    )
}

export default Projects