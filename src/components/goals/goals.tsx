import styled from '@emotion/styled'
import { colors, radius } from '../../utils/utils'
import check from '../../assets/check.svg'

const Goals = () => {

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <h1>Mes objectifs</h1>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '300px', margin: '10px 10% 10px 220px', paddingTop: '30px' }}>
                <p>2021 <br />
                    Reconversion</p>
                <p style={{ marginLeft: '40px' }}>2023 <br />
                    Bac +2 développeur <br />
                    web et mobile <br />
                    CEFIM</p>
                <p>2025 <br />
                    Développeur CDI <br />
                    formation web3</p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <CircleChecked />
                <Line />
                <CircleChecked />
                <Line />
                <CircleChecked />
                <Line />
                <Circle />
                <Line />
                <Circle />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '200px', margin: '10px 15% 10px 420px', paddingBottom: '30px' }}>
                <p>2022 <br />
                    Développeur <br />
                    autodidacte
                </p>
                <p style={{ marginLeft: '40px' }}>
                    2024 <br />
                    Contrat de professionnalisation <br />
                    Concepteur développeur <br />
                    d’application</p>
            </div>
        </>
    )
}

export default Goals

const CircleChecked = styled.span`
    display: inline-block;
    width: 50px; 
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
    background: url(${check}) no-repeat center;
`
const Circle = styled.span`
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
`
const Line = styled.span`
    display: inline-block;
    width: 180px;
    height: 4px;
    background-color: ${colors.primary};
`