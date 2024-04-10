import styled from '@emotion/styled';
import { colors, radius, fontSize } from '../../utils/utils';
import Project from '../../types/project';
import githubdark from '../../assets/github-dark.svg'

interface CardProps {
    project: Project;
}



const Card: React.FC<CardProps> = ({ project }) => {

    return (
        <CardContainer>
            <Img src={project.image} alt="project image" />
            <TitleCard>{project.name}</TitleCard>
            <TextCard>{project.description}</TextCard>
            <SkillsContainer>
                {project.skills.map((skill, index) => (
                    <Skill key={index}>{skill}</Skill>
                ))}
            </SkillsContainer>
            <div style={{ display: 'flex', justifyContent: 'end'}}>
            <a href={project.github} target="_blank" rel="noreferrer"><img src={githubdark} alt="linkdin" /></a>
            </div>
        </CardContainer>
    )
}

export default Card

const CardContainer = styled.div`
    background-color: ${colors.secondary};
    border-radius: ${radius.medium};
    padding: 5px;
    width: 280px;
    height: 425px;

`
const Img = styled.img`
    width: 100%;
    border-radius: ${radius.small} ${radius.small} 0 0;
`
const TitleCard = styled.h2`
    font-size: ${fontSize.text};
    color: ${colors.text_dark};
`
const TextCard = styled.p`
    color: ${colors.text_dark};
    font-size: ${fontSize.button};
`
const SkillsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: start;
`
const Skill = styled.p`
    color: ${colors.text_light};
    font-size: 0.8em;
    background-color: ${colors.primary};
    border-radius: ${radius.max};
    padding: 5px;
    width: 80px;
    text-align: center;
    `