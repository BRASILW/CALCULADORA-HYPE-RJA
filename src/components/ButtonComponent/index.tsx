import React from 'react';
import styled from 'styled-components';

import colors from '../../utils/colors';

import * as Styles from './styles';

interface IButtonProps {
  text: string;
  fontSize?: number;
  isActive?: boolean;
  onClick?: (event: MouseEvent) => void;
}

const Button: any = styled.button<{ fontSize: string, isActive?: boolean }>`
  position: relative;
  display: inline-block;
  padding: 15px 30px;
  color: ${colors.gray.white};
  border: 1px solid ${colors.primary.redTwo};
  text-transform: uppercase;
  letter-spacing: 4px;
  text-decoration: none;
  font-size: ${({ fontSize = 16 }: any) => fontSize / 10}rem;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  font-weight: 500;
  font-family: Montroc;
  z-index: 3;

  background: ${({ isActive }) => (
    isActive
      ? `${colors.primary.redOne}`
      : `${colors.gray.black}`
  )};

  box-shadow: ${({ isActive }) => (
    isActive
      ? `0 0 10px ${colors.primary.redTwo}, 
         0 0 40px ${colors.primary.redTwo}, 
         0 0 80px ${colors.primary.redTwo};`
      : `none`
  )};
  
  &:hover {
    color: ${colors.gray.white};
    background: ${colors.primary.redOne};
    box-shadow: 0 0 10px ${colors.primary.redTwo}, 
                0 0 40px ${colors.primary.redTwo}, 
                0 0 80px ${colors.primary.redTwo};
    transform: scale(1.02);
  }
`;

const ButtonComponent: React.FC<IButtonProps> = ({
  text, fontSize, isActive, onClick
}) => {
  return (
    <>
      <Styles.Container>
        <Button fontSize={fontSize} isActive={isActive} onClick={onClick}>
          {text}
        </Button>
      </Styles.Container>
    </>
  );
};

export default ButtonComponent;
