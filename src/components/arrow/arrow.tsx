import arrow from '../../assets/Arrow.svg'
import styled from '@emotion/styled';
import { bounce, mediaMax } from '../../utils/utils';

const ArrowSection = () => {
    
    return (
        <AnimatedContainer>
            <Arrow src={arrow} alt="arrow" />
        </AnimatedContainer>
    )
}

export default ArrowSection


// Utilise l'animation de rebond dans le style du composant
const AnimatedContainer = styled.div`
    animation: ${bounce} 2s ease infinite;
    margin-top: 30px;
    display: flex;
    justify-content: center;
`;

const Arrow = styled.img`
    width: 30px;
    height: auto;
    ${mediaMax[1]} {
        width: 30px;
    }
`