import styled from '@emotion/styled';
import { colors, radius, fontSize } from '../../utils/utils';

interface ButtonProps {
    svg: string; 
    label: string; 
    to: string; 
  }

  const Button: React.FC<ButtonProps> = ({ svg, label, to }) => {

    return (
        <StyledLink href={to}>
            <img src={svg} />
            <span>{label}</span>
        </StyledLink>
    );
};

export default Button

const StyledLink = styled.a`
  display: block;
  color: ${colors.text_light};
  font-size: ${fontSize.text};
  background-color: ${colors.primary};
  padding: 10px;
  border-radius: ${radius.max};
  text-decoration: none;
  width: 126px;
  
  &:hover {
    text-decoration: underline;
  }
`;