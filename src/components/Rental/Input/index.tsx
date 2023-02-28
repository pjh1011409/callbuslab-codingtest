import React from 'react';
import MontlyInput from './MontlyInput';
import CharterInput from './CharterInput';
import InputWrapper from './InputWrapper';

const RentalInput = () => {
  return (
    <>
      <InputWrapper>
        <MontlyInput />
      </InputWrapper>

      <InputWrapper>
        <CharterInput />
      </InputWrapper>
    </>
  );
};

export default RentalInput;
