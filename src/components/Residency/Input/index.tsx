import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import useCustomInput from '../../../hooks/useCustomInput';
import { useCustomToast } from '../../../hooks/useCustomToast';
import {
  setAddress,
  setRoomNumber,
  setStartDate,
  setEndDate,
  setTanantName,
  setPhone,
} from '../../../redux/reducer/inputSlice';
import SecondInput from './SecondInput';
import ThirdInput from './ThirdInput';
import { Form } from '../../../styles/Residency.style';
import FourthInput from './FourthInput';
import FirstInput from './FirstInput';

const ResidencyInput = () => {
  const dispatch = useDispatch();
  const [address, onChangeAddress, setAddressAPI] = useCustomInput('');
  const [roomNumber, onChangeRoomNumber] = useCustomInput(0);
  const [tanantName, onChangeTanantName] = useCustomInput(0);
  const [startDate, onChangeStartDate] = useCustomInput('');
  const [endDate, onChangeEndDate] = useCustomInput('');
  const [phone, onChangePhone] = useCustomInput('');

  const isActive = roomNumber && tanantName && startDate && endDate && phone;
  const toast = useCustomToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isActive) {
      dispatch(setAddress(address));
      dispatch(setRoomNumber(roomNumber));
      dispatch(setTanantName(tanantName));
      dispatch(setStartDate(startDate));
      dispatch(setEndDate(endDate));
      dispatch(setPhone(phone));

      navigate('/completionPage');
      toast({
        title: '등록되었습니다.',
        status: 'success',
        isClosable: true,
      });
    } else {
      toast({
        title: '모든 정보를 입력해주세요.',
        status: 'warning',
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FirstInput onChangeAddress={onChangeAddress} setAddressAPI={setAddressAPI} />
        <SecondInput onChangeRoomNumber={onChangeRoomNumber} onChangeTanantName={onChangeTanantName} />

        {address && roomNumber && tanantName && (
          <ThirdInput onChangeStartDate={onChangeStartDate} onChangeEndDate={onChangeEndDate} />
        )}
        {address && roomNumber && tanantName && startDate && endDate && <FourthInput onChangePhone={onChangePhone} />}
      </Form>
    </>
  );
};

export default ResidencyInput;
