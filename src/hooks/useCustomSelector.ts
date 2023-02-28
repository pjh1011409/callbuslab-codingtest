import React from 'react';
import { InputState } from '../types/type';
import { useSelector } from 'react-redux';

const useCustomSelector = () => {
  const inputState = useSelector((state: { input: InputState }) => state.input);

  return { inputState };
};

export default useCustomSelector;
