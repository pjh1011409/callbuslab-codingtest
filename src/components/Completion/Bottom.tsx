import React from 'react';
import useCustomSelector from '../../hooks/useCustomSelector';
import { MdEmail } from 'react-icons/md';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { BottomWrapper, Button, ButtonBox, Period } from '../../styles/Completion.style';
import { getCalendarDate } from '../../utils/getCalendarDate';

const CompletionBoxBottom = () => {
  const { StartDate, EndDate, Phone } = useCustomSelector().inputState;

  const handleCopyClipBoard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text.toString());
      alert(` ${text} 복사하였습니다.`);
    } catch (error) {
      alert('복사 실패!');
    }
  };

  return (
    <BottomWrapper>
      <Period>계약 기간 : {`${getCalendarDate(StartDate)} ~ ${getCalendarDate(EndDate)}`}</Period>
      <ButtonBox>
        <Button onClick={() => handleCopyClipBoard(Phone)}>
          <MdEmail style={{ width: '15px', margin: '1px' }} />
          임대인 문자
        </Button>
        <Button onClick={() => handleCopyClipBoard(Phone)}>
          <BsFillTelephoneFill style={{ width: '15px', margin: '1px' }} />
          임대인 전화
        </Button>
      </ButtonBox>
    </BottomWrapper>
  );
};

export default CompletionBoxBottom;
