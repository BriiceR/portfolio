import styled from '@emotion/styled';
import { colors, radius, fontSize } from '../../utils/utils';

interface ButtonProps {
    svg: string; 
    label: string; 
    to: string; 
    alt: string;
}

const Button: React.FC<ButtonProps> = ({ svg, label, to, alt }) => {
    return (
        <StyledLink href={to} target="_blank">
            <img src={svg} alt={alt} /> 
            <span>{label}</span>
        </StyledLink>
    );
};

export default Button;

const StyledLink = styled.a`
    display: flex;
    align-items: center; 
    justify-content: center; 
    color: ${colors.text_light};
    font-size: ${fontSize.button};
    background-color: ${colors.primary};
    padding: 5px;
    border-radius: ${radius.max};
    text-decoration: none;
    width: 126px;
    height: 40px;
    transition:all 1s;
    img {
       margin-left: 2px;
        
    }

    span {
        flex-grow: 1; 
        text-align: center; 
    }
  
    &:hover {
        
        background-color: #8D4FBE;
    }
`;
