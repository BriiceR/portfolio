import Card from '../card/card'
import projects from '../../data/myprojects.json'
import Project from '../../types/project'

const Projects = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <h1>Mes Projets</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', padding: '30px' }}>

                {projects.map((project: Project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </>
    )
}

export default Projects