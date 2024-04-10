import Button from "../button/button"
import download from '../../assets/download.svg'
import email from '../../assets/email.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github-light.svg'
import cv from '../../assets/Brice cv_2024_CDA_compressed.pdf'



const Contacts = () => {

    return (
        <>
        <div style={{ display: 'flex', justifyContent: 'center', padding: '30px'}}>
        <h1>Mes Contacts</h1>
        </div>
        <div style ={{ display: 'flex', justifyContent: 'center', gap: '20px', margin: '30px 30px 60px 30px' }}>
        <Button svg={download} alt='download icon' label="CV" to={cv}  />
            <Button svg={email} alt='email icon' label="Mail" to="mailto:VotreAdresseEmail@gmail.com" />
            <Button svg={linkedin} alt='linkedin icon' label="Linkedin" to="https://www.linkedin.com/in/brice-rabouin/" />
            <Button svg={github} alt='github icon' label="Github" to="https://github.com/BriiceR" />
            </div>
        </>
    )
}

export default Contacts