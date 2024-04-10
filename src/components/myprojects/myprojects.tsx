import Card from '../card/card'
import projects from '../../data/myprojects.json'
import Project from '../../types/project'

const Projects = () => {

    console.log(projects)

    return (
        <>
        <h1>My Projects</h1>
        <div style={{display: 'flex', justifyContent: 'center', gap: '100px'}}>
           
        {projects.map((project: Project) => (
                <Card key={project.id} project={project} />
            ))}
        </div>
        </>
    )
}

export default Projects