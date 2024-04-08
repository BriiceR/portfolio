import typescript from '../../assets/typescript.svg'
import react from '../../assets/react.svg'
import node from '../../assets/nodejs.svg'
import express from '../../assets/express.svg'
import mongodb from '../../assets/mongodb.svg'
import mysql from '../../assets/mysql.svg'
import figma from '../../assets/figma.svg'


const Skills = () => {

    return (
        <div style={{ display: 'flex', justifyContent: 'space-around', gap: '20px', padding: '0px 100px' }}>
            <img src={typescript} alt="typescript icon" />
            <img src={react} alt="react icon" />
            <img src={node} alt="node icon" />
            <img src={express} alt="express icon" />
            <img src={mongodb} alt="mongodb icon" />
            <img src={mysql} alt="mysql icon" />
            <img src={figma} alt="figma icon" />
        </div>
    )

}

export default Skills