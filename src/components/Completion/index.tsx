import React from 'react';
import { CompletionWrapper } from '../../styles/Completion.style';
import CompletionBoxTop from './Top';
import CompletionBoxMiddle from './Middle';
import CompletionBoxBottom from './Bottom';

const Completion = () => {
  return (
    <CompletionWrapper>
      <CompletionBoxTop />
      <CompletionBoxMiddle />
      <CompletionBoxBottom />
    </CompletionWrapper>
  );
};

export default Completion;
