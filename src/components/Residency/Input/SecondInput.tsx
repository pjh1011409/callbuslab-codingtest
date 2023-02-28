import React from 'react';
import { OnChangeSecondProps } from '../../../types/type';
import { Column, FormBox, Input, InputBox1, Title } from '../../../styles/Residency.style';

const SecondInput = ({ onChangeRoomNumber, onChangeTanantName }: OnChangeSecondProps) => {
  return (
    <>
      <Column>
        <Title>호실</Title>
        <Title>세입자(본인)이름</Title>
      </Column>
      <FormBox>
        <InputBox1>
          <Input name="호실" type="text" maxLength={20} placeholder="예) 101" onChange={onChangeRoomNumber} /> 호
        </InputBox1>
        <InputBox1>
          <Input name="세입자이름" type="text" maxLength={20} placeholder="예)홍길동 " onChange={onChangeTanantName} />
        </InputBox1>
      </FormBox>
    </>
  );
};

export default SecondInput;
