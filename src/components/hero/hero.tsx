import styled from '@emotion/styled'
import avatar from '../../assets/avatar.png'
import { colors, fontSize } from '../../utils/utils'
import Button from '../button/button'
import download from '../../assets/download.svg'


const Hero = () => {

    return (
        <Border>
            <div style={{ display: 'flex', padding: '20px' }}>
                <Dot style={{ opacity: '0.8'}}></Dot>
                <Dot style={{ opacity: '0.6'}}></Dot>
                <Dot style={{ opacity: '0.4'}}></Dot>
            </div>
            <Line></Line>
            <HeroContainer>
        <div style={{ padding: '25px'}}>
            <img src={avatar} alt="avatar" />
        </div>
        <div style={{ paddingLeft: '75px'}}>
            <Title>Brice RABOUIN</Title>
            <SubTitle>Développeur Fullstack Javascript</SubTitle>
            <Text>Je suis développeur Fullstack JavaScript, passionné par la création d'applications web dynamiques. Avec une expertise intermédiaire dans l'utilisation de technologies telles que Node.js, Express, React et MongoDB, je suis constamment motivé à me lancer dans de nouveaux défis et à rester à l'affût des innovations dans le domaine. Je m’intéresse aussi aux applications mobiles et aux avancées du Web 3.0.</Text>
            <Button svg={download} label="CV" to="/cv" />
        </div>
        </HeroContainer>
        </Border>
    )
}

export default Hero

const Border = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin: 30Px;
    // padding: 50px 50px 50px 50px;
    border-color: ${colors.primary};
    border-width: 5px;
    border-style: solid;
    border-radius: 5px;
`
const HeroContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px 50px 50px 50px;
`
const Title = styled.h1`
    font-size: ${fontSize.title};
    color: ${colors.text_light};
`
const SubTitle = styled.h2`
    font-size: ${fontSize.subTitle};
    color: ${colors.text_violet};
`
const Text = styled.p`
    font-size: ${fontSize.text};
    color: ${colors.text_light};
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
    height: 5px;
    background-color: ${colors.primary};
`