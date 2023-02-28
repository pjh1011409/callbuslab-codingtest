import React from 'react';
import useCustomSelector from '../../hooks/useCustomSelector';
import { Info, InfoBox, Menu, MiddleWrapper } from '../../styles/Completion.style';

const CompletionBoxMiddle = () => {
  const { RentalType, MontlyRent, Deposit, MontlyFee, PaymentDate } = useCustomSelector().inputState;

  return (
    <MiddleWrapper>
      <InfoBox>
        <Menu>임대유형</Menu>
        <Info>{RentalType}</Info>
      </InfoBox>
      <InfoBox>
        <Menu>월임대료 </Menu>
        <Info>
          {MontlyRent}
          {MontlyRent && '만원'}
        </Info>
      </InfoBox>
      <InfoBox>
        <Menu>보증금 </Menu>
        <Info>{Deposit.toLocaleString()} 만원</Info>
      </InfoBox>
      <InfoBox>
        <Menu>월관리비 </Menu>
        <Info>{MontlyFee} 만원</Info>
      </InfoBox>
      <InfoBox>
        <Menu>납부일 </Menu>
        <Info>매달 {PaymentDate} 일 </Info>
      </InfoBox>
      <InfoBox>
        <Menu>납부총액 </Menu>
        <Info>{Number(MontlyRent) + Number(MontlyFee)} 만원</Info>
      </InfoBox>
    </MiddleWrapper>
  );
};

export default CompletionBoxMiddle;
