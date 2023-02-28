import React, { FC, PropsWithChildren } from 'react';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Notification1, Notification2, Title } from '../../../styles/Rental.style';

const InputWrapper: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <Title>임대비용</Title>
      <Notification1>
        <BsFillInfoCircleFill />
        <span>천원 단위는 5.5처럼 소수점 첫째자리까지 입력해주세요. </span>
      </Notification1>
      <Notification1>
        <BsFillInfoCircleFill />
        <span>비용 입력시 고지서가 무료로 제공됩니다.</span>
      </Notification1>
      {children}
      <Notification2>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</Notification2>
    </>
  );
};

export default InputWrapper;
