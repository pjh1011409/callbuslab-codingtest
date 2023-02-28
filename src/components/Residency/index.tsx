import React from 'react';
import { ResidencyWrapper } from '../../styles/Residency.style';
import ResidencyHeader from './Header';
import ResidencyInput from './Input';

const Residency = () => {
  return (
    <ResidencyWrapper>
      <ResidencyHeader />
      <ResidencyInput />
    </ResidencyWrapper>
  );
};

export default Residency;
