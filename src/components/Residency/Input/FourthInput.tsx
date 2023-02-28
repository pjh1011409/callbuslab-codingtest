import React from 'react';
import { OnChangeFourthProps } from '../../../types/type';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import {
  Column,
  CompletionButton,
  FormBox,
  Input,
  InputBox1,
  Notification1,
  Notification2,
  Title,
} from '../../../styles/Residency.style';

const ThirdInput = ({ onChangePhone }: OnChangeFourthProps) => {
  return (
    <>
      <Column>
        <Title>임대인 휴대폰 번호</Title>
      </Column>
      <FormBox>
        <InputBox1>
          <Input
            name="휴대폰번호"
            type="text"
            minLength={11}
            placeholder="임대인(현재 집주인) 휴대폰 번호를 입력해주세요."
            onChange={onChangePhone}
          />
        </InputBox1>
      </FormBox>
      <Notification1>
        <BsFillInfoCircleFill size={15} />
        &nbsp;임대인(현재 집주인) 번호가 아닐 경우 월세환급 기회가 박탈될 수 있습니다.
      </Notification1>
      <Notification2>환급금만 확인해도 월세고지서가 무료로 제공됩니다.</Notification2>

      <CompletionButton type="submit">완료</CompletionButton>
    </>
  );
};

export default ThirdInput;
