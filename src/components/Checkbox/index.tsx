import React from 'react';

import colors from '../../utils/colors';
import Text from '../../components/Text';

import * as Styles from './styles';

interface ICheckboxProps {
  text: string;
  onClick: any;
  className: string;
}

const Checkbox: React.FC<ICheckboxProps> = ({ text, onClick, className }) => {
  return (
    <>
      <Styles.Container>
        <Styles.Label onClick={onClick} >
          <Styles.Input type="checkbox" className={className} />

          <Styles.Span>
            <Styles.I />
          </Styles.Span>
        </Styles.Label>

        <Text
          text={text}
          align="left"
          color={colors.gray.white}
          size={8}
          marginLeft={8}
          weight="500"
          fontFamily="HighSpeed"
        />
      </Styles.Container>
    </>
  );
};

export default Checkbox;
