import styled, { keyframes } from "styled-components";

import colors from "../../utils/colors";

const pulse = keyframes`
  0%, 100% { 
    transform: scale(1);
  }

  50% { 
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  background: ${colors.primary.redTwo};
  min-height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.div`
  width: 100%;
  padding: 1rem 0;
  background: ${colors.primary.redTwo};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
  background: ${colors.gray.black};
  min-height: 100vh;
  width: 100%;
  margin-top: -32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 2% 5%;

  position: relative;
  overflow: hidden;
`;

export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  z-index: 100;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    justify-content: flex-start;
  }
`;

export const LeftHeaderDiv = styled.div`
  width: 42%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 4px;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 1rem;

    > p {
      font-size: 16px;
    }
  }
`;

export const RightHeaderDiv = styled.div`
  width: 58%;
  padding-bottom: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;

  @media screen and (max-width: 960px) {
    width: 100%;
    margin-top: 2rem;

    button {
      font-size: 12px;
      width: 100%;
    }
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    justify-content: flex-start;
    margin-top: 3rem;
  }
`;

export const ButtonSpace = styled.div`
  height: 100%;
  width: 8px;

  @media screen and (max-width: 700px) {
    height: 1rem;
  }
`;

export const ImageBackground = styled.div`
  position: absolute;
  width: 92%;
  height: 92%;
  overflow: hidden;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  z-index: 1;

  @media screen and (max-width: 960px) {
    top: 30%;
  }

  @media screen and (max-width: 700px) {
    top: 40%;
  }

  @media screen and (max-width: 560px) {
    top: 50%;
  }

  @media screen and (max-width: 400px) {
    top: 55%;
  }
`;

export const ImageBg = styled.img`
  width: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  background: ${colors.gray.black};

  @media screen and (max-width: 960px) {
    width: 90%;
  }
`;

export const ImageDark = styled.div`
  width: 90%;
  height: 100%;
  background: #00000099;
  position: absolute;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
`;

export const ResetButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  z-index: 10;
`;

export const ValuesContainer = styled.div`
  width: 100%;
  border-radius: 8px;
  z-index: 3;
  margin-bottom: 60px;
  background: #00000099;
  border: 4px solid ${colors.primary.redTwo};
  display: flex;
  flex-direction: row;
  padding: 16px 0;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    padding: 16px;
  }
`;

export const ValuesContentLeft = styled.div`
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 16px;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 16px 32px;
  }
`;

export const ValuesContentCenter = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 33%;
  border-left: 4px solid ${colors.primary.redTwo};
  border-right: 4px solid ${colors.primary.redTwo};
  padding: 16px;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 16px 32px;

    border-left: none;
    border-right: none;
    border-top: 4px solid ${colors.primary.redTwo};
    border-bottom: 4px solid ${colors.primary.redTwo};
  }
`;

export const ValuesContentRight = styled.div`
  padding: 16px;
  width: 33%;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 960px) {
    width: 100%;
    padding: 16px 32px;
  }
`;

export const ValuesTitleDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FormFullContainer = styled.div<{ display: boolean }>`
  display: ${({ display }) => (display ? "flex" : "none")};
  flex-direction: column;
  z-index: 2;
  width: 100%;
  padding-top: 16px;
  margin-bottom: 100px;
`;

export const Select = styled.select`
  width: 100%;
  height: 50px;
  background-color: ${colors.gray.grayBackground};
  border-color: ${colors.primary.redTwo};
  color: ${colors.gray.white};
  border-radius: 4px;
  border-width: 2px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;

  & + select {
    margin-top: 8px;
  }
`;

export const Option = styled.option``;

export const MadeByContainer = styled.div`
  background: ${colors.gray.black};
  width: 100%;
  padding: 0 10%;
  padding-bottom: 2rem;
`;

export const MadeByContent = styled.div`
  border-bottom: 1px solid ${colors.primary.redTwo};
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 560px) {
    justify-content: center;
  }
`;

export const ButtonInvisible = styled.div`
  background: transparent;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  > h1 {
    > span {
      font-size: 7px;
    }
  }

  &:hover {
    transform: scale(1.1);

    > h1 {
      color: ${colors.primary.redTwo};
    }
  }
`;

export const MadeByText = styled.h1`
  color: ${colors.gray.white};
  font-size: 10px;
  font-family: "HighSpeed";
  transition: all 0.3s ease-in-out;
  text-decoration: underline;
`;

export const HeaderSubTitleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 8px;
  margin-bottom: 16px;
`;

export const TwoDotZeroDiv = styled.div`
  z-index: 10;
  height: 60px;
  width: 60px;
  margin-left: -28px;
  margin-top: -20px;
  transform: rotate(45deg);
`;

export const TwoDotZeroImage = styled.img`
  width: 100%;
  -o-object-fit: cover;
  object-fit: cover;
`;

export const FormSmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 2;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  & + div {
    margin-top: 8px;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }
`;

export const QuantitySelect = styled.select`
  width: 60%;
  height: 50px;
  background-color: ${colors.gray.grayBackground};
  border-color: ${colors.primary.redTwo};
  color: ${colors.gray.white};
  border-radius: 4px;
  border-width: 2px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const QuantityInput = styled.input`
  width: 30%;
  height: 50px;
  background-color: ${colors.gray.grayBackground};
  border-color: ${colors.primary.redTwo};
  color: ${colors.gray.white};
  border-radius: 4px;
  border-width: 2px;
  padding: 0 16px;
  font-size: 16px;
  font-weight: 700;
  font-family: Roboto;

  @media screen and (max-width: 700px) {
    width: 100%;
  }
`;

export const SwitchesDiv = styled.div`
  width: 100%;
  position: relative;
  z-index: 2;
  margin-top: -64px;
  margin-bottom: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding-right: 32px;

  @media screen and (max-width: 700px) {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
`;

export const SwitchesSpace = styled.div`
  height: 64px;
  width: 2px;
  background-color: ${colors.primary.redTwo};
  margin-left: 16px;
  margin-right: 16px;

  @media screen and (max-width: 700px) {
    height: 2px;
    width: 100%;
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

export const FooterInfo = styled.div`
  width: 100%;
  padding: 2% 5%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const FooterDivClick = styled.div`
  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    animation: ${pulse} 1s linear infinite;
  }
`;
