import styled from 'styled-components';

import colors from '../../utils/colors';

export const Label = styled.label`
  position: relative;
  /* width: 160px; */
  /* height: 80px; */
  width: 80px;
  height: 40px;
  cursor: pointer;
`;

export const Input = styled.input`
  position: relative;
  z-index: 1;
  appearance: none;

  &:checked ~ span {
    background-color: ${colors.support.green};
    /* box-shadow: 0 15px 25px ${colors.support.greenLight}; */
    box-shadow: 0 7px 12px ${colors.support.greenLight};
  }

  &:checked ~ span i {
    /* left: 84px; */
    left: 42px;

    // Rosto 
    &::before {
      background: ${colors.support.green};
      /* box-shadow: 31px 0 0 ${colors.support.green}; */
      box-shadow: 15px 0 0 ${colors.support.green};
    }

    &::after {
      border-radius: 0;
      background: ${colors.support.green};
      /* height: 15px; */
      /* bottom: 12px; */
      height: 7px;
      bottom: 6px;
      /* border-bottom-left-radius: 15px; */
      /* border-bottom-right-radius: 15px; */
      border-bottom-left-radius: 7px;
      border-bottom-right-radius: 7px;
    }
    // Rosto 
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${colors.support.red};
  /* border-radius: 80px; */
  border-radius: 40px;
  transition: 0.5s;
  /* box-shadow: 0 15px 25px ${colors.support.redLight}; */
  box-shadow: 0 7px 12px ${colors.support.redLight};
`;

export const I = styled.i`
  position: absolute;
  /* top: 4px; */
  /* left: 4px; */
  top: 3px;
  left: 3px;
  /* width: 72px; */
  /* height: 72px; */
  width: 34px;
  height: 34px;
  background: ${colors.gray.white};
  border-radius: 50%;
  transition: 0.5s;

  // Rosto 
  &::before {
    content: '';
    position: absolute;
    /* top: 22px; */
    /* left: 12px; */
    top: 11px;
    left: 6px;
    /* width: 12px; */
    /* height: 12px; */
    width: 6px;
    height: 6px;
    background: ${colors.support.red};
    border-radius: 50%;
    /* box-shadow: 31px 0 0 ${colors.support.red}; */
    box-shadow: 15px 0 0 ${colors.support.red};
    transition: 0.5s;
  }

  &::after {
    content: '';
    position: absolute;
    /* bottom: 15px; */
    bottom: 7px;
    /* left: calc(50% - 15px); */
    left: calc(50% - 7px);
    /* width: 30px; */
    width: 15px;
    /* height: 6px; */
    height: 3px;
    transition: 0.5s;
    /* border-radius: 6px; */
    border-radius: 3px;
    background: ${colors.support.red};
  }
  // Rosto 
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;
