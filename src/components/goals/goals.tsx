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
            <LineContainer>
                <CircleChecked />
                <Line />
                <CircleChecked2 />
                <Line />
                <CircleChecked3 />
                <Line />
                <Circle />
                <Line />
                <Circle2 />
            </LineContainer>
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
        ${mediaMax[1]} {
            top: 0px;
            left: 60px;
        }
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
        ${mediaMax[1]} {
            top: 0px;
            right: 60px;
        }
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
        ${mediaMax[1]} {
            top: 0px;
            left: 60px;
        }
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
        ${mediaMax[1]} {
            top: 0px;
            right: 100px;
        }
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
        ${mediaMax[1]} {
            top: 0px;
            left: 60px;
        }
        
    }
`
const Line = styled.span`
    display: inline-block;
    width: 180px;
    height: 4px;
    background-color: ${colors.primary};
    ${mediaMax[1]} {
        width: 4px;
        height: 120px;
    }
`
const Div = styled.div`
    // background: url(${blob}) no-repeat ;
    // background-size: 20%;
`
const LineContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    margin-bottom: 220px;
    ${mediaMax[1]} {
        flex-direction: column;
        margin-bottom: 100px;
        margin-top: 60px;
    }
`