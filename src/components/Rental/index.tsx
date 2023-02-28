import React from 'react';
import RentalHeader from './Header';
import RentalType from './Type';
import { RentalWrapper } from '../../styles/Rental.style';

const Rental = () => {
  return (
    <RentalWrapper>
      <RentalHeader />
      <RentalType />
    </RentalWrapper>
  );
};

export default Rental;
