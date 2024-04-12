import Card from '../card/card'
import projects from '../../data/myprojects.json'
import Project from '../../types/project'
import styled from '@emotion/styled'
import blob from '/Blob.svg'

const Projects = () => {

    return (
        <Div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <h1>Mes Projets</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', padding: '30px' }}>

                {projects.map((project: Project) => (
                    <Card key={project.id} project={project} />
                ))}
            </div>
        </Div>
    )
}

export default Projects

const Div = styled.div`
    background: url(${blob}) no-repeat ;
    background-position: 100%;
    background-size: 30%;
`