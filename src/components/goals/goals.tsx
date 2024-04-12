import styled from '@emotion/styled'
import { colors, radius, mediaMax } from '../../utils/utils'
import check from '../../assets/check.svg'
import blob from '/Blob.svg'

const Goals = () => {

    return (
        <Div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px' }}>
                <h1>Mes objectifs</h1>
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'end', gap: '340px', margin: '10px 0 10px 50px', paddingTop: '30px' }}>
                <p style={{ width: '120px' }}>2021 <br />
                    Reconversion</p>
                <p style={{ width: '120px' }}>2023 <br />
                    Bac +2 développeur <br />
                    web et mobile <br />
                    CEFIM</p>
                <p style={{ width: '120px' }}>2025 <br />
                    Développeur CDI <br />
                    formation web3</p>
            </div> */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px', marginBottom: '220px' }}>
                <CircleChecked />
                <Line />
                <CircleChecked2 />
                <Line />
                <CircleChecked3 />
                <Line />
                <Circle />
                <Line />
                <Circle2 />
            </div>
            {/* <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center', gap: '200px', margin: '10px 15% 10px 420px', paddingBottom: '30px' }}>
                <p>2022 <br />
                    Développeur <br />
                    autodidacte
                </p>
                <p style={{ marginLeft: '40px' }}>
                    2024 <br />
                    Contrat de professionnalisation <br />
                    Concepteur développeur <br />
                    d’application</p>
            </div> */}
        </Div>
    )
}

export default Goals

const CircleChecked = styled.span`
    position: relative;
    display: inline-block;
    width: 50px; 
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
    background: url(${check}) no-repeat center;
    :before {
        position: absolute;
        content: "2021 \ Reconversion";
        width: 100px;
        display: block;
        top: -60px;
    }
`
const CircleChecked2 = styled.span`
    position: relative;
    display: inline-block;
    width: 50px; 
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
    background: url(${check}) no-repeat center;
    :after {
        position: absolute;
        content: "2022\ Développeur\ autodidacte";
        width: 100px;
        display: block;
        top: 60px;
    }
`
const CircleChecked3 = styled.span`
    position: relative;
    display: inline-block;
    width: 50px; 
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
    background: url(${check}) no-repeat center;
    :before {
        position: absolute;
        content: "2023\ Développeur\ web et mobile\ CEFIM";
        width: 120px;
        display: block;
        top: -110px;
    }
`
const Circle = styled.span` 
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
    :after {
        position: absolute;
        content: "2024 Contrat de professionnalisation Concepteur développeur d’application";
        width: 100px;
        display: block;
        top: 60px;
    }
`
const Circle2 = styled.span` 
    position: relative;
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: ${radius.max};
    border: 4px solid ${colors.primary};
    :before {
        position: absolute;
        content: "2025 Développeur CDI formation web3";
        width: 120px;
        display: block;
        top: -110px;
        ${mediaMax[2]} {
            right: 0;
        }
        
    }
`
const Line = styled.span`
    display: inline-block;
    width: 180px;
    height: 4px;
    background-color: ${colors.primary};
`
const Div = styled.div`
    // background: url(${blob}) no-repeat ;
    // background-size: 20%;
`