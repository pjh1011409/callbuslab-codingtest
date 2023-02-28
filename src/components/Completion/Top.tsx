import React from 'react';
import useCustomSelector from '../../hooks/useCustomSelector';
import { Img, TextOverFlow, TopWrapper } from '../../styles/Completion.style';

const CompletionBoxTop = () => {
  const { Address, RoomNumber } = useCustomSelector().inputState;

  return (
    <TopWrapper>
      <Img src="./HomeLogo.png" alt="집모양" />
      <TextOverFlow>
        {Address} {RoomNumber}
      </TextOverFlow>
    </TopWrapper>
  );
};

export default CompletionBoxTop;
