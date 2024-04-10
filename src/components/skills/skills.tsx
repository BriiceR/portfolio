import typescript from '../../assets/typescript.svg'
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import mysql from '../../assets/mysql.svg'
import figma from '../../assets/figma.svg'


const Skills = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', padding: '30px 200px' }}>
            <img src={typescript} alt="typescript icon" title='typescript' />
            <img src={react} alt="react icon" title='react' />
            <img src={node} alt="node icon" title='nodejs' />
            <img src={express} alt="express icon" title='express' />
            <img src={mongodb} alt="mongodb icon" title='mongodb' />
            <img src={mysql} alt="mysql icon" title='mysql'/>
            <img src={figma} alt="figma icon" title='figma' />
        </div>
    )

}

export default Skills