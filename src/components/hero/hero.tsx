import styled from '@emotion/styled'
import avatar from '../../assets/avatar.png'
import { colors, fontSize, mediaMax } from '../../utils/utils'
import Button from '../button/button'
import download from '../../assets/download.svg'
import email from '../../assets/email.svg'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github-light.svg'
import cv from '../../assets/Brice cv_2024_CDA_compressed.pdf'
import blob from '/Blob.svg'


const Hero = () => {

    return (
        <Border>
            <div style={{ display: 'flex', padding: '20px' }}>
                <Dot style={{ opacity: '0.8' }}></Dot>
                <Dot style={{ opacity: '0.6' }}></Dot>
                <Dot style={{ opacity: '0.4' }}></Dot>
            </div>
            <Line></Line>
            <HeroContainer>
                <AvatarDiv>
                    <img src={avatar} alt="avatar" />
                </AvatarDiv>
                <TextDiv>
                    <Title>Brice RABOUIN</Title>
                    <SubTitle>Développeur Fullstack Javascript</SubTitle>
                    <Text>Je suis développeur Fullstack JavaScript, passionné par la création d'applications web dynamiques. Avec une expertise intermédiaire dans l'utilisation de technologies telles que Node.js, Express, React et MongoDB, je suis constamment motivé à me lancer dans de nouveaux défis et à rester à l'affût des innovations dans le domaine. Je m’intéresse aussi aux applications mobiles et aux avancées du Web 3.0.</Text>
                    <div style={{ display: 'flex', gap: '20px', marginTop: '30px' }}>
                        <Button svg={download} alt='download icon' label="CV" to={cv} />
                        <Button svg={email} alt='email icon' label="Mail" to="mailto:VotreAdresseEmail@gmail.com" />
                        <Button svg={linkedin} alt='linkedin icon' label="Linkedin" to="https://www.linkedin.com/in/brice-rabouin/" />
                        <Button svg={github} alt='github icon' label="Github" to="https://github.com/BriiceR" />
                    </div>

                </TextDiv>
            </HeroContainer>

        </Border >
    )
}

export default Hero

const Border = styled.div`
    margin: 20px 30px 10px 30px;
    border-color: ${colors.primary};
    border-width: 3px;
    border-style: solid;
    border-radius: 5px;
    background: url(${blob}) no-repeat ;
    background-position: 0%;
    background-size: 35%;
    ${mediaMax[2]} {
        background-size: 50%;
        background-position: -15%;
    }
`
const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 30px 0px 30px 0px;
    
`
const AvatarDiv = styled.div`
    padding-left: 100px;
    ${mediaMax[2]} {
        padding-left: 30px;
    }
`
const TextDiv = styled.div`
    padding-right: 100px;
    padding-left: 120px;
    ${mediaMax[2]} {
        padding-left: 30px;
        padding-right: 30px;
    }
`
const Title = styled.h1`
    font-size: ${fontSize.title};
    color: ${colors.text_light};
`
const SubTitle = styled.h2`
    font-size: ${fontSize.subTitle};
    color: ${colors.text_violet};
    margin-bottom: 20px;
`
const Text = styled.p`
    font-size: ${fontSize.text};
    color: ${colors.text_light};
    margin-bottom: 20px;
    text-align: justify;
`
const Dot = styled.span`
    width: 15px;
    height: 15px;
    background-color: ${colors.primary};
    border-radius: 100%;
    margin-right: 5px;
`
const Line = styled.span`
    display: block; 
    width: 100%;
    height: 3px;
    background-color: ${colors.primary};
`