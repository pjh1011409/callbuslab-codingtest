import React, { useEffect, useState } from 'react';
import { setDeposit, setMontlyFee, setMontlyRent, setPaymentDate } from '../../../redux/reducer/inputSlice';
import { useDispatch } from 'react-redux';
import useCustomInput from '../../../hooks/useCustomInput';
import { useCustomToast } from '../../../hooks/useCustomToast';
import { useNavigate } from 'react-router-dom';
import {
  Check,
  CheckAmountButton,
  CheckBox,
  CheckText,
  Form,
  FormBox,
  Input,
  InputBox,
  InputCheck,
} from '../../../styles/Rental.style';
import useCustomSelector from '../../../hooks/useCustomSelector';

const MontlyInput = () => {
  const dispatch = useDispatch();
  const { RentalType, Deposit, MontlyRent, MontlyFee, PaymentDate } = useCustomSelector().inputState;

  const [deposit, onChangeDeposit, setDepositValue] = useCustomInput('');
  const [montlyRent, onChangemontlyRent, setMontlyRentValue] = useCustomInput('');
  const [montlyFee, onChangeMontlyFee, setMontlyFeeValue] = useCustomInput('');
  const [paymentDate, onChangePaymentDate, setPaymentDateValue] = useCustomInput('');
  const [isDisabled, setIsDisabled] = useState(false);
  const toast = useCustomToast();
  const navigate = useNavigate();
  const isActive = deposit && montlyRent && (isDisabled || montlyFee) && paymentDate;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isActive) {
      dispatch(setDeposit(deposit));
      dispatch(setMontlyRent(montlyRent));
      dispatch(setMontlyFee(montlyFee));
      dispatch(setPaymentDate(paymentDate));
      navigate('/residencyPage');
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

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsDisabled(event.target.checked);
    !isDisabled ? setMontlyFeeValue('0') : setMontlyFeeValue('');
  };

  useEffect(() => {
    if (RentalType === '월세') {
      setDepositValue(Deposit);
      setMontlyRentValue(MontlyRent);
      setMontlyFeeValue(MontlyFee);
      setPaymentDateValue(PaymentDate);
      if (MontlyFee === '0') setIsDisabled(!isDisabled);
    }
  }, [Deposit, MontlyRent, MontlyFee, PaymentDate]);

  return (
    <Form onSubmit={handleSubmit}>
      <FormBox>
        <InputBox>
          <Input name="보증금" type="number" placeholder="보증금" onChange={onChangeDeposit} value={deposit} />
          만원
        </InputBox>
        <InputBox>
          <Input
            name="월임대료"
            type="number"
            placeholder="월 임대료"
            onChange={onChangemontlyRent}
            value={montlyRent}
          />{' '}
          만원
        </InputBox>
      </FormBox>
      <FormBox>
        <InputBox>
          <InputCheck
            name="월관리비"
            type="text"
            placeholder="월 관리비"
            value={montlyFee}
            onChange={onChangeMontlyFee}
            disabled={isDisabled}
          />
          만원
        </InputBox>
        <InputBox>
          <Input
            name="임대료납부일"
            type="number"
            placeholder="임대료 납부일"
            value={paymentDate}
            min={1}
            max={31}
            onChange={onChangePaymentDate}
          />
          일
        </InputBox>
      </FormBox>
      <Check>
        <CheckBox type="checkbox" checked={isDisabled} onChange={handleCheckboxChange} />
        <CheckText className="checkText">관리비는 관리실에 따로 납부하거나 없습니다. </CheckText>
      </Check>
      <CheckAmountButton type="submit">금액 확인하기 👆</CheckAmountButton>
    </Form>
  );
};

export default MontlyInput;
