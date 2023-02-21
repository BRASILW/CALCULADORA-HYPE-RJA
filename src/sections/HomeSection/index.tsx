import React, { useCallback, useState, useEffect } from "react";
import { AiFillLock, AiFillClockCircle } from "react-icons/ai";
import { FaMoneyBillAlt } from "react-icons/fa";
import { toast } from "react-toastify";

import Text from "../../components/Text";
import ButtonComponent from "../../components/ButtonComponent";
import Checkbox from "../../components/Checkbox";

import colors from "../../utils/colors";
import artigosPenais from "../../utils/artigosPenais";
import artigosTransito from "../../utils/artigosTransito";
import artigosPenaisQuantity from "../../utils/artigosPenaisQuantity";

import logoBackground from "../../assets/logoBackground.png";
import newCalculator from "../../assets/newCalculator.png";

import * as Styles from "./styles";

interface IFormArrayPros {
  id: string;
  secondaryId?: string;
  type: "unique" | "quantity" | "traffic";
}

const HomeSection: React.FC = () => {
  const [selectedFormType, setSelectedFormType] = useState("unique");

  const [uniqueFormArray, setUniqueFormArray] = useState<IFormArrayPros[]>([]);
  const [trafficFormArray, setTrafficFormArray] = useState<IFormArrayPros[]>(
    []
  );
  const [quantityFormArray, setQuantityFormArray] = useState<IFormArrayPros[]>(
    []
  );

  const [totalTimeState, setTotalTimeState] = useState(0);
  const [totalTrafficState, setTotalTrafficState] = useState(0);
  const [totalBailState, setTotalBailState] = useState(0);

  const [runnedTips, setRunnedTips] = useState(false);

  const hashGenerate = useCallback(() => {
    let result = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const charactersLength = characters.length;

    for (var i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
  }, []);

  const loadData = useCallback(() => {
    const loadUniqueFormArray = [
      { id: hashGenerate(), type: "unique" },
      { id: hashGenerate(), type: "unique" },
    ] as IFormArrayPros[];

    const loadTrafficFormArray = [
      { id: hashGenerate(), type: "traffic" },
      { id: hashGenerate(), type: "traffic" },
    ] as IFormArrayPros[];

    const loadQuantityFormArray = [
      { id: hashGenerate(), secondaryId: hashGenerate(), type: "quantity" },
      { id: hashGenerate(), secondaryId: hashGenerate(), type: "quantity" },
    ] as IFormArrayPros[];

    setUniqueFormArray(loadUniqueFormArray);
    setTrafficFormArray(loadTrafficFormArray);
    setQuantityFormArray(loadQuantityFormArray);
  }, [hashGenerate]);

  const handleSelectFormType = useCallback(
    (type: React.SetStateAction<string>) => {
      setSelectedFormType(type);
    },
    []
  );

  // const handleExecuteAudio = useCallback(() => {
  //   const audioTune = new Audio(require('../../assets/audios/realeza.mp3'));
  //   audioTune.load();
  //   audioTune.currentTime = 0;
  //   audioTune.muted = false;

  //   audioTune.play();
  // }, []);

  const handleNavigateToPortfolio = useCallback(() => {
    // handleExecuteAudio();

    window.open("https://discord.com", "_blank")!.focus();
  }, []);

  const addFieldToUniqueForm = useCallback(
    (index: number) => {
      if (index === 0 && uniqueFormArray.length <= 2 && runnedTips === false) {
        toast("Selecione o último campo, para adicionar mais uma opção.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "info",
        });

        setRunnedTips(true);
      }

      if (index + 1 === uniqueFormArray.length) {
        setUniqueFormArray([
          ...uniqueFormArray,
          {
            id: hashGenerate(),
            type: "unique",
          },
        ]);
      }
    },
    [hashGenerate, uniqueFormArray, runnedTips]
  );

  const addFieldToTrafficForm = useCallback(
    (index: number) => {
      if (index === 0 && trafficFormArray.length <= 2 && runnedTips === false) {
        toast("Selecione o último campo, para adicionar mais uma opção.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "info",
        });

        setRunnedTips(true);
      }

      if (index + 1 === trafficFormArray.length) {
        setTrafficFormArray([
          ...trafficFormArray,
          {
            id: hashGenerate(),
            type: "traffic",
          },
        ]);
      }
    },
    [hashGenerate, trafficFormArray, runnedTips]
  );

  const addFieldToQuantityForm = useCallback(
    (index: number) => {
      if (
        index === 0 &&
        quantityFormArray.length <= 2 &&
        runnedTips === false
      ) {
        toast("Selecione o último campo, para adicionar mais uma opção.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          type: "info",
        });

        setRunnedTips(true);
      }

      if (index + 1 === quantityFormArray.length) {
        setQuantityFormArray([
          ...quantityFormArray,
          {
            id: hashGenerate(),
            secondaryId: hashGenerate(),
            type: "quantity",
          },
        ]);
      }
    },
    [hashGenerate, quantityFormArray, runnedTips]
  );

  const handleResetPage = useCallback(() => {
    // window.location.reload();

    const loadUniqueFormArray = [
      { id: hashGenerate(), type: "unique" },
      { id: hashGenerate(), type: "unique" },
    ] as IFormArrayPros[];

    const loadTrafficFormArray = [
      { id: hashGenerate(), type: "traffic" },
      { id: hashGenerate(), type: "traffic" },
    ] as IFormArrayPros[];

    const loadQuantityFormArray = [
      { id: hashGenerate(), secondaryId: hashGenerate(), type: "quantity" },
      { id: hashGenerate(), secondaryId: hashGenerate(), type: "quantity" },
    ] as IFormArrayPros[];

    setSelectedFormType("unique");
    setUniqueFormArray(loadUniqueFormArray);
    setTrafficFormArray(loadTrafficFormArray);
    setQuantityFormArray([]);
    setTimeout(() => {
      setQuantityFormArray(loadQuantityFormArray);
    }, 500);

    setTotalTimeState(0);
    setTotalTrafficState(0);
    setTotalBailState(0);
  }, [hashGenerate]);

  const handleChangeInputForm = useCallback(
    (index: any, category: string) => {
      if (category === "unique") addFieldToUniqueForm(index);
      if (category === "traffic") addFieldToTrafficForm(index);
      if (category === "quantity") addFieldToQuantityForm(index);

      let totalTime = 0;
      let totalTrafficTicket = 0;
      let totalBail = 0;

      for (const uniqueItem of uniqueFormArray) {
        const currentTime = (
          document.getElementById(uniqueItem.id) as HTMLInputElement
        )?.value.split("|")[0];
        const currentTrafficTicket = (
          document.getElementById(uniqueItem.id) as HTMLInputElement
        )?.value.split("|")[1];
        const currentBail = (
          document.getElementById(uniqueItem.id) as HTMLInputElement
        )?.value.split("|")[2];

        totalTime = totalTime + Number(currentTime);
        totalTrafficTicket = totalTrafficTicket + Number(currentTrafficTicket);
        totalBail = totalBail + Number(currentBail);
      }

      for (const trafficItem of trafficFormArray) {
        const currentTime = (
          document.getElementById(trafficItem.id) as HTMLInputElement
        )?.value.split("|")[0];
        const currentTrafficTicket = (
          document.getElementById(trafficItem.id) as HTMLInputElement
        )?.value.split("|")[1];
        const currentBail = (
          document.getElementById(trafficItem.id) as HTMLInputElement
        )?.value.split("|")[2];

        totalTime = totalTime + Number(currentTime);
        totalTrafficTicket = totalTrafficTicket + Number(currentTrafficTicket);
        totalBail = totalBail + Number(currentBail);
      }

      for (const quantityItem of quantityFormArray) {
        const currentTime = (
          document.getElementById(quantityItem.id) as HTMLInputElement
        )?.value.split("|")[0];
        const currentTrafficTicket = (
          document.getElementById(quantityItem.id) as HTMLInputElement
        )?.value.split("|")[1];
        const currentBail = (
          document.getElementById(quantityItem.id) as HTMLInputElement
        )?.value.split("|")[2];

        const quantityInput = (
          document.getElementById(quantityItem.secondaryId!) as HTMLInputElement
        )?.value;

        totalTime = totalTime + Number(currentTime) * Number(quantityInput);
        totalTrafficTicket =
          totalTrafficTicket +
          Number(currentTrafficTicket) * Number(quantityInput);
        totalBail = totalBail + Number(currentBail) * Number(quantityInput);
      }

      const reuState = (
        document.querySelector(".reuPrimario") as HTMLInputElement
      ).checked;
      const presencaState = (
        document.querySelector(".presencaAdvogado") as HTMLInputElement
      ).checked;

      let calculatedFinalTimeValue = totalTime > 150 ? 150 : totalTime;
      let calculatedTrafficTicketValue =
        totalTrafficTicket > 150000 ? 150000 : totalTrafficTicket;
      let calculatedBailValue = totalBail > 450000 ? 450000 : totalBail;

      if (reuState === true) {
        calculatedFinalTimeValue =
          calculatedFinalTimeValue - calculatedFinalTimeValue * 0.5;
      }

      if (presencaState === true) {
        calculatedFinalTimeValue =
          calculatedFinalTimeValue - calculatedFinalTimeValue * 0.1;
      }

      setTotalTimeState(calculatedFinalTimeValue);
      setTotalTrafficState(calculatedTrafficTicketValue);
      setTotalBailState(calculatedBailValue);
    },
    [
      addFieldToUniqueForm,
      uniqueFormArray,
      addFieldToTrafficForm,
      trafficFormArray,
      addFieldToQuantityForm,
      quantityFormArray,
    ]
  );

  const handleNavigateToWhatsApp = useCallback(() => {
    let message =
      "Olá Lulfex, tenho algo pra falar sobre a Calculadora da NexusRP!";

    const wppURL = `https://api.whatsapp.com/send?l=pt-BR&phone='5562991624471'&text=${message}`;

    window.open(wppURL, "_blank")!.focus();
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  return (
    <>
      <Styles.Container id="home">
        {/**/}
        <Styles.Header></Styles.Header>

        <Styles.Content>
          <Styles.ContentHeader>
            <Styles.LeftHeaderDiv>
              <Text
                text="Preencha com os artigos, para calcular a pena"
                align="left"
                color={colors.gray.white}
                size={8}
                weight="500"
                letterSpacing={0.1}
                fontFamily="Montroc"
              />
            </Styles.LeftHeaderDiv>

            <Styles.RightHeaderDiv>
              <ButtonComponent
                text="ÚNICOS"
                fontSize={6}
                onClick={() => handleSelectFormType("unique")}
                isActive={selectedFormType === "unique" ? true : false}
              />

              <Styles.ButtonSpace />

              <ButtonComponent
                text="QUANTITATIVOS"
                fontSize={6}
                onClick={() => handleSelectFormType("quantity")}
                isActive={selectedFormType === "quantity" ? true : false}
              />

              <Styles.ButtonSpace />

              <ButtonComponent
                text="TRANSITO"
                fontSize={6}
                onClick={() => handleSelectFormType("traffic")}
                isActive={selectedFormType === "traffic" ? true : false}
              />
            </Styles.RightHeaderDiv>
          </Styles.ContentHeader>

          <Styles.FormContainer>
            <Styles.ImageBackground>
              <Styles.ImageDark />
              <Styles.ImageBg src={logoBackground} />
            </Styles.ImageBackground>

            {/* Formulário dos ÚNICOS  */}
            <Styles.FormFullContainer
              display={selectedFormType === "unique" ? true : false}
            >
              {uniqueFormArray.map((option, optionIndex) => (
                <Styles.Select
                  id={option.id}
                  key={option.id}
                  onChange={() =>
                    handleChangeInputForm(optionIndex, option.type)
                  }
                >
                  <Styles.Option value={`0 | 0 | 0`}>
                    SELECIONE UM ARTIGO
                  </Styles.Option>

                  {artigosPenais.map((artigo) => (
                    <Styles.Option
                      key={artigo.article}
                      value={`${artigo.time} | ${artigo.trafficTicket} | ${artigo.bail}`}
                    >
                      {`${artigo.article} - ${artigo.name} ${
                        artigo.note && `-> ${artigo.note}`
                      }`}
                    </Styles.Option>
                  ))}
                </Styles.Select>
              ))}
            </Styles.FormFullContainer>
            {/* Formulário dos ÚNICOS  */}

            {/* Formulário dos QUANTITY  */}
            <Styles.FormFullContainer
              display={selectedFormType === "quantity" ? true : false}
            >
              {quantityFormArray.map((option, optionIndex) => (
                <Styles.FormSmallContainer key={option.id}>
                  <Styles.QuantitySelect
                    id={option.id}
                    key={option.id}
                    // onChange={() => handleChangeInputForm(optionIndex, option.type)}
                  >
                    <Styles.Option value={`0 | 0 | 0`}>
                      SELECIONE UM ARTIGO
                    </Styles.Option>

                    {artigosPenaisQuantity.map((artigo) => (
                      <Styles.Option
                        key={artigo.article}
                        value={`${artigo.time} | ${artigo.trafficTicket} | ${artigo.bail}`}
                      >
                        {`${artigo.article} - ${artigo.name} ${
                          artigo.note && `-> ${artigo.note}`
                        }`}
                      </Styles.Option>
                    ))}
                  </Styles.QuantitySelect>

                  <Styles.QuantityInput
                    type="number"
                    id={option.secondaryId}
                    min={1}
                    // min={minQuantity4 > 0 ? minQuantity4 : 0}
                    // placeholder={`${minQuantity4} U.`}
                    placeholder="Quantidade"
                    onChange={() =>
                      handleChangeInputForm(optionIndex, option.type)
                    }
                  />
                </Styles.FormSmallContainer>
              ))}
            </Styles.FormFullContainer>
            {/* Formulário dos QUANTITY  */}

            {/* Formulário dos TRAFFIC  */}
            <Styles.FormFullContainer
              display={selectedFormType === "traffic" ? true : false}
            >
              {trafficFormArray.map((option, optionIndex) => (
                <Styles.Select
                  id={option.id}
                  key={option.id}
                  onChange={() =>
                    handleChangeInputForm(optionIndex, option.type)
                  }
                >
                  <Styles.Option value={`0 | 0 | 0`}>
                    SELECIONE UM ARTIGO
                  </Styles.Option>

                  {artigosTransito.map((artigo) => (
                    <Styles.Option
                      key={artigo.article}
                      value={`${artigo.time} | ${artigo.trafficTicket} | ${artigo.bail}`}
                    >
                      {`${artigo.article} - ${artigo.name} ${
                        artigo.note && `-> ${artigo.note}`
                      }`}
                    </Styles.Option>
                  ))}
                </Styles.Select>
              ))}
            </Styles.FormFullContainer>
            {/* Formulário dos TRAFFIC  */}

            <Styles.SwitchesDiv>
              <Checkbox
                text="Réu Primário"
                className="reuPrimario"
                onClick={() => handleChangeInputForm(0, "reuPrimario")}
              />

              <Styles.SwitchesSpace />

              <Checkbox
                text="Presença Do Advogado"
                className="presencaAdvogado"
                onClick={() => handleChangeInputForm(0, "presencaAdvogado")}
              />
            </Styles.SwitchesDiv>

            <Styles.ValuesContainer>
              <Styles.ValuesContentLeft>
                <Styles.ValuesTitleDiv>
                  <AiFillLock color={colors.gray.white} size={18} />

                  <Text
                    text="FIANÇA"
                    align="left"
                    color={colors.gray.white}
                    size={16}
                    marginLeft={8}
                    weight="500"
                    letterSpacing={0.1}
                    fontFamily="Montroc"
                  />
                </Styles.ValuesTitleDiv>

                <Text
                  text={`R$ ${new Intl.NumberFormat("pt-BR").format(
                    totalBailState
                  )}`}
                  align="right"
                  color={colors.gray.white}
                  size={20}
                  marginTop={32}
                  weight="500"
                  letterSpacing={0.1}
                  fontFamily="Montroc"
                />
              </Styles.ValuesContentLeft>

              <Styles.ValuesContentCenter>
                <Styles.ValuesTitleDiv>
                  <FaMoneyBillAlt color={colors.gray.white} size={18} />

                  <Text
                    text="MULTA"
                    align="left"
                    color={colors.gray.white}
                    size={16}
                    marginLeft={8}
                    weight="500"
                    letterSpacing={0.1}
                    fontFamily="Montroc"
                  />
                </Styles.ValuesTitleDiv>

                <Text
                  text={`R$ ${new Intl.NumberFormat("pt-BR").format(
                    totalTrafficState
                  )}`}
                  align="right"
                  color={colors.gray.white}
                  size={20}
                  marginTop={32}
                  weight="500"
                  letterSpacing={0.1}
                  fontFamily="Montroc"
                />
              </Styles.ValuesContentCenter>

              <Styles.ValuesContentRight>
                <Styles.ValuesTitleDiv>
                  <AiFillClockCircle color={colors.gray.white} size={18} />

                  <Text
                    text="TEMPO"
                    align="left"
                    color={colors.gray.white}
                    size={16}
                    marginLeft={8}
                    weight="500"
                    letterSpacing={0.1}
                    fontFamily="Montroc"
                  />
                </Styles.ValuesTitleDiv>

                <Text
                  text={`${totalTimeState.toFixed(0)} meses`}
                  align="right"
                  color={colors.gray.white}
                  size={20}
                  marginTop={32}
                  weight="500"
                  letterSpacing={0.1}
                  fontFamily="Montroc"
                />
              </Styles.ValuesContentRight>
            </Styles.ValuesContainer>

            <Styles.ResetButtonContainer>
              <ButtonComponent
                text="RESETAR"
                fontSize={10}
                onClick={handleResetPage}
              />
            </Styles.ResetButtonContainer>
          </Styles.FormContainer>
        </Styles.Content>

        <Styles.MadeByContainer>
          <Styles.MadeByContent>
            <Styles.ButtonInvisible onClick={handleNavigateToPortfolio}>
              <Styles.MadeByText>
                Modificado e atualizado por Lulfex
              </Styles.MadeByText>
            </Styles.ButtonInvisible>
          </Styles.MadeByContent>
        </Styles.MadeByContainer>

        {/* ESCONDER FOOTER
        <Styles.FooterInfo>
          <Text
            text="Projeto desenvolvido para a cidade Nexus RP"
            align="left"
            color={colors.gray.white}
            size={10}
            weight="500"
            fontFamily="Dosis"
            marginBottom={4}
          />

          <Styles.FooterRow>
            <Text
              text="Qualquer problema, entre em contato (basta clicar no nome) => "
              align="left"
              color={colors.gray.white}
              size={8}
              weight="500"
              fontFamily="Dosis"
            />

            <Styles.FooterDivClick onClick={handleNavigateToWhatsApp}>
              <Text
                text="Lulfex"
                align="left"
                color={colors.gray.white}
                size={8}
                marginLeft={4}
                textDecoration="underline"
                weight="500"
                fontFamily="Dosis"
              />
            </Styles.FooterDivClick>
          </Styles.FooterRow>
        </Styles.FooterInfo>
        */}
      </Styles.Container>
    </>
  );
};

export default HomeSection;
