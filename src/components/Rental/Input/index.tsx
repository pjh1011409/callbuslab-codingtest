import React from 'react';
import MontlyInput from './MontlyInput';
import CharterInput from './CharterInput';
import InputWrapper from './InputWrapper';
import { RentalInputProps } from '../../../types/type';

const RentalInput = ({ isClickedCharter, isClickedMontly }: RentalInputProps) => {
  return (
    <>
      {isClickedMontly ? (
        <InputWrapper>
          <MontlyInput />
        </InputWrapper>
      ) : null}

      {isClickedCharter ? (
        <InputWrapper>
          <CharterInput />
        </InputWrapper>
      ) : null}
    </>
  );
};

export default RentalInput;
