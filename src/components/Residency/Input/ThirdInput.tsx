import React, { useState } from 'react';
import { OnChangeThirdProps } from '../../../types/type';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { Column, FormBox, Input, InputBox1, Notification1, Title } from '../../../styles/Residency.style';
import { Input as InputCalendar } from '@chakra-ui/react';

const ThirdInput = ({ onChangeStartDate, onChangeEndDate }: OnChangeThirdProps) => {
  return (
    <>
      <Column>
        <Title>계약시작일</Title>
        <Title>계약종료일</Title>
      </Column>
      <FormBox>
        <InputBox1>
          <InputCalendar
            name="계약시작일"
            placeholder="선택해주세요."
            size="25"
            type="datetime-local"
            onChange={onChangeStartDate}
            style={{ border: 'none', width: '100px', margin: '0 auto' }}
          />
        </InputBox1>
        <InputBox1>
          <InputCalendar
            name="계약종료일"
            placeholder="선택해주세요."
            size="25"
            type="datetime-local"
            onChange={onChangeEndDate}
            style={{ border: 'none' }}
          />
        </InputBox1>
      </FormBox>
      <Notification1>
        <BsFillInfoCircleFill />
        &nbsp;정확히 모를 경우 임의로 작성 후 수정요청 하세요.
      </Notification1>
    </>
  );
};

export default ThirdInput;
