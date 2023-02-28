import styled from '@emotion/styled';

// 임대 정보 입력 페이지 컴포넌트들에 대한 스타일
export const RentalWrapper = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  color: #222222;
  background-color: #f8f8f8;
`;

export const HeaderWrapper = styled.div`
  width: 320px;
  height: 54px;
  margin: 40px 20px 50px 20px;
  font-weight: 700;
  font-size: 20px;
`;

export const Title = styled.div`
  font-weight: 500;
  font-size: 14px;
  line-height: 100%;
  margin: 9px 18px;
`;

export const TypeBox = styled.div`
  margin: 0px 17px 50px 17px;
  width: 326px;
  height: 44px;
  display: flex;
`;

export const Button = styled.button<{ isClicked: boolean }>`
  background-color: ${({ isClicked }) => (isClicked ? '#2c7fff' : '#ffffff')};
  color: ${({ isClicked }) => (isClicked ? '#ffffff' : '#222222')};

  width: 50%;
  font-weight: 500;
  border-radius: 3px;
  border: 1px #e8e8e8 solid;
`;

export const Notification1 = styled.div`
  color: #7a7a7a;
  font-size: 12px;
  margin: 7px 19px;
  display: flex;

  & > span {
    margin-left: 3px;
  }
`;

export const Notification2 = styled.div`
  color: #7a7a7a;
  font-size: 12px;
  margin: 11px 16px;
  text-align: center;
`;

export const Form = styled.form`
  margin: 12px 0px 17px 0px;
`;

export const FormBox = styled.div`
  display: flex;
  margin: 8px 15px;
`;

export const InputBox = styled.div`
  width: 100%;
  text-align: left;
  padding: 12px 10px;
  font-weight: 500;
  font-size: 12px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px #e8e8e8 solid;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 70%;
  margin: 0px 5px;
  border: none;
  margin-right: auto;
  text-align: center;

  &::placeholder {
    text-align: left;
    color: #b4b4b4;
  }
`;

export const InputCheck = styled.input<{ disabled?: boolean }>`
  width: 75%;
  border: none;
  margin-right: auto;
  text-align: center;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')};
  color: ${({ disabled }) => (disabled ? 'red' : 'black')};

  &::placeholder {
    text-align: left;
    color: #b4b4b4;
  }
`;

export const Check = styled.label`
  margin: 0px 15px;
  font-weight: 400;
  font-size: 14px;
`;

export const CheckBox = styled.input`
  border-radius: 3px;
  margin-right: 5px;

  &:checked ~ .checkText {
    color: #2c7fff;
  }
`;

export const CheckText = styled.span`
  font-weight: 400;
  font-size: 13px;
`;

export const CheckAmountButton = styled.button`
  margin: 32px 16px 0px 16px;
  width: 328px;
  height: 50px;
  background: #2c7fff;
  border-radius: 8px;
  font-weight: 400;
  font-size: 14px;
  border: none;
  color: #ffffff;

  &:hover {
    background: #ffffff;
    color: #2c7fff;
  }
`;
