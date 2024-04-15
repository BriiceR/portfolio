import Button from "../button/button"
import download from '../../assets/download.svg'
import email from '../../assets/email.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github-light.svg'
import cv from '../../assets/Brice cv_2024_CDA_compressed.pdf'
import blob from '/Blob.svg'
import styled from '@emotion/styled'
import { ButtonContainer } from "../hero/hero"
import { mediaMax } from "../../utils/utils"


const Contacts = () => {

    return (
        <Div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <h1>Mes Contacts</h1>
            </div>
            <ButtonContainer style={{ padding: '30px 30px 60px 30px', display: 'flex', justifyContent: 'center', marginTop: '0px' }}>
                <Button svg={download} alt='download icon' label="CV" to={cv} />
                <Button svg={email} alt='email icon' label="Mail" to="mailto:VotreAdresseEmail@gmail.com" />
                <Button svg={linkedin} alt='linkedin icon' label="Linkedin" to="https://www.linkedin.com/in/brice-rabouin/" />
                <Button svg={github} alt='github icon' label="Github" to="https://github.com/BriiceR" />
            </ButtonContainer>
        </Div>
    )
}

export default Contacts

const Div = styled.div`
    // background: url(${blob}) no-repeat;
    // background-position: 100% ; 
    // background-size: 15%;
    // ${mediaMax[0]} {
    //     background-size: 30%;
    // }
`