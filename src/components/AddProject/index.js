import React, {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Projects from '../Projects'
import './index.css'

const initialProjectsList = [
    {
        id: uuidv4(),
        projectName: "Bookhub",
        projectLink: 'https://abhibookhub.ccbp.tech/login',
        description: "A Bookhub project project is a clone of Goodreads application built using react where you can login a view list of books and information regarding them.",
        imageLink: 'https://res.cloudinary.com/dwswlczpp/image/upload/v1680243470/loginpage_usduxl.jpg'
    },
    {
        id: uuidv4(),
        projectName: "Jobby App",
        projectLink: 'https://abhijobbypage.ccbp.tech/login',
        description: "The Jobby app is a job search application where you can find the details of the new job vacancies in different companies and job description and other related info.",
        imageLink: 'https://res.cloudinary.com/dwswlczpp/image/upload/v1704546429/preview_dbecus.png'
    },
    {
        id: uuidv4(),
        projectName: "IPL Dashboard",
        projectLink: 'https://abhiiplboard.ccbp.tech/',
        description: "Details of different ipl teams and their squads, score against each team, status of the match.",
        imageLink: 'https://res.cloudinary.com/dwswlczpp/image/upload/v1704546282/Original_Indian_Premier_League_IPL_Logo_PNG_Transparent_Images_File_Download_Free_Download_qksljr.png'
    }
]

class AddProject extends Component {
    state = {projectName: '', projectLink: '', description: '', projectsList: initialProjectsList}

    changeName = event => {
        this.setState({projectName: event.target.value})
    }

    changeLink = event => {
        this.setState({projectLink: event.target.value})
    }

    changeDescription = event => {
        this.setState({description: event.target.value})
    }

    submitForm = event => {
        event.preventDefault()
        const {projectName, projectLink, description} = this.state
        const newList = {
            id: uuidv4(),
            projectName,
            projectLink,
            description
        }
        this.setState(prevState => ({
            projectsList: [...prevState.projectsList, newList],
            projectName: '',
            projectLink: '',
            description: ''
        }))
    }

    render () {
        const {projectName, projectLink, description, projectsList} = this.state

        return (
            <div className='add-project-container'>
                <h2 className='add-project-heading'>Add Project</h2>
                <form onSubmit={this.submitForm}>
                    <div className='input-container'>
                      <label htmlFor='projectName' className='label'>Project Name</label>
                      <input type="text" id="projectName" onChange={this.changeName} value={projectName} className='input' />
                    </div>
                    <div className='input-container'>
                      <label htmlFor='projectLink' className='label'>Project Link</label>
                      <input type="text" id="projectLink" onChange={this.changeLink} value={projectLink} className='input' />
                    </div>
                    <div className='input-container'>
                      <label htmlFor='description' className='label'>Description</label>
                      <input type="text" id="description" onChange={this.changeDescription} value={description} className='description-input' />
                    </div>
                    <button type="submit" className='add-button'>Add</button>
                </form>
                <div className='projects-container'>
                  <h2 className='add-project-heading'>Projects</h2>
                  <ul className='projects-list-container'>
                    {projectsList.map(eachProject => (
                        <Projects key={eachProject.id} projectDetails={eachProject} />
                    ))}
                  </ul>
                </div>
            </div>
        )
    }
}

export default AddProject