import styled from '@emotion/styled';
import { mediaMax } from '../../utils/utils';
import typescript from '../../assets/typescript.svg'
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import mysql from '../../assets/mysql.svg'
import figma from '../../assets/figma.svg'



const Skills = () => {

    return (
        <Div>
            <img style={{ margin: '20px' }} src={typescript} alt="typescript icon" title='typescript' />
            <img style={{ margin: '20px' }} src={react} alt="react icon" title='react' />
            <img style={{ margin: '20px' }} src={node} alt="node icon" title='nodejs' />
            <img style={{ margin: '20px' }} src={express} alt="express icon" title='express' />
            <img style={{ margin: '20px' }} src={mongodb} alt="mongodb icon" title='mongodb' />
            <img style={{ margin: '20px' }} src={mysql} alt="mysql icon" title='mysql' />
            <img style={{ margin: '20px' }} src={figma} alt="figma icon" title='figma' />
        </Div>
    )

}

export default Skills

const Div = styled.div`
    display: flex;
    justify-content: space-around;
    padding: 30px 200px;
    ${mediaMax[2]} {
        padding: 30px 50px;
    }
    ${mediaMax[1]} {
        flex-flow: row wrap;
    }
`