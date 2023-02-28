import React, { useEffect, useState } from 'react';
import RentalInput from './Input';
import { useDispatch } from 'react-redux';
import { setRentalType } from '../../redux/reducer/inputSlice';
import { Button, Title, TypeBox } from '../../styles/Rental.style';
import useCustomSelector from '../../hooks/useCustomSelector';

const RentalType = () => {
  const dispatch = useDispatch();
  const { RentalType } = useCustomSelector().inputState;
  const [isClickedMontly, setIsClickedMontly] = useState(false);
  const [isClickedCharter, setIsClickedCharter] = useState(false);

  const handleClickMontly = () => {
    setIsClickedMontly(!isClickedMontly);
    setIsClickedCharter(false);
    dispatch(setRentalType('월세'));
  };

  const handleClickCharter = () => {
    setIsClickedCharter(!isClickedCharter);
    setIsClickedMontly(false);
    dispatch(setRentalType('전세'));
  };

  useEffect(() => {
    setIsClickedMontly(RentalType === '월세');
    setIsClickedCharter(RentalType === '전세');
  }, [RentalType]);

  return (
    <>
      <Title>임대유형</Title>
      <TypeBox>
        <Button isClicked={isClickedMontly} onClick={handleClickMontly}>
          월세
        </Button>
        <Button isClicked={isClickedCharter} onClick={handleClickCharter}>
          전세
        </Button>
      </TypeBox>
      <RentalInput isClickedMontly={isClickedMontly} isClickedCharter={isClickedCharter} />
    </>
  );
};

export default RentalType;
