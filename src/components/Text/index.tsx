import React from 'react';
import styled, { css } from 'styled-components';

import colors from '../../utils/colors';

interface ITextProps {
  id?: string;
  color?: string;
  size?: number;
  text: string;
  align?: 'center' | 'left' | 'right';
  marginBottom?: number;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  margin?: number;
  textDecoration?: 'line-through' | 'underline' | 'none';
  weight?: '300' | '400' | '500' | '600' | '700';
  ellipsis?: boolean;
  fontFamily?: 'Dosis' | 'Orelega One' | 'Roboto Slab' | 'Roboto' | 'HighSpeed' | 'Montroc';
  letterSpacing?: number;
  zIndex?: number;
}

const TextStyled: any = styled.p`
  color: ${({ color }: any) => color || colors.gray.black};
  font-size: ${({ size = 16 }: any) => size / 10}rem;
  text-align: ${({ align = 'center' }: any) => align};
  margin: ${({ margin = 0 }: any) => margin / 10}rem;
  line-height: ${({ size = 16 }: any) => (size * 1.3) / 10}rem;
  margin-bottom: ${({ marginBottom = 0 }: any) => marginBottom / 10}rem;
  margin-top: ${({ marginTop = 0 }: any) => marginTop / 10}rem;
  margin-left: ${({ marginLeft = 0 }: any) => marginLeft / 10}rem;
  margin-right: ${({ marginRight = 0 }: any) => marginRight / 10}rem;
  font-weight: ${({ weight = '400' }: any) => weight};
  text-decoration-line: ${({ textDecoration }: any) => (textDecoration || 'none')};
  font-family: ${({ fontFamily }: any) => (fontFamily || 'Dosis')};
  letter-spacing: ${({ letterSpacing = 1 }: any) => letterSpacing / 10}rem;
  z-index: ${({ zIndex = 1 }: any) => zIndex};
  position: relative;

  ${({ ellipsis }: any) => ellipsis
    && css`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    }
  `}
`;

const Text: React.FC<ITextProps> = ({
  id,
  text,
  color,
  size,
  align,
  marginBottom,
  marginTop,
  marginLeft,
  marginRight,
  margin,
  weight,
  textDecoration,
  ellipsis,
  ...rest
}) => (
  <TextStyled
    id={id}
    color={color}
    size={size}
    align={align}
    marginBottom={marginBottom}
    marginTop={marginTop}
    marginLeft={marginLeft}
    marginRight={marginRight}
    margin={margin}
    weight={weight}
    textDecoration={textDecoration}
    ellipsis={ellipsis}
    {...rest}
  >
    {text}
  </TextStyled>
);

export default Text;
