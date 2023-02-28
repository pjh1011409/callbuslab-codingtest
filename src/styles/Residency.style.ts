import styled from '@emotion/styled';

// 거주정보입력 페이지의 컴포넌트들에 대한 스타일
export const ResidencyWrapper = styled.div`
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  color: #222222;
  background-color: #f8f8f8;
`;

export const HeaderWrapper = styled.div`
  height: 180px;
  background-color: #ffffff;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  text-align: center;
  padding: 32px 24px;
`;

export const TopText = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const Highlight = styled.span`
  color: #2c7fff;
`;

export const MiddleText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #b4b4b4;
  margin: 8px 0px 16px 0px;
`;

export const BottomText = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  color: #7a7a7a;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #222222;
  }
`;

export const Title = styled.div`
  width: 100%;
  text-align: left;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  display: flex;
  align-items: center;
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

export const Form = styled.form`
  margin: 12px 0px 17px 0px;
`;

export const Column = styled.div`
  display: flex;
  margin: 20px 18px 0px 18px;
`;

export const FormBox = styled.div`
  display: flex;
  margin: 8px 15px;
`;

export const InputBox1 = styled.div`
  width: 100%;
  height: 40px;
  text-align: left;
  padding: 0px 10px;
  font-weight: 500;
  font-size: 12px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px #e8e8e8 solid;
  display: flex;
  align-items: center;
`;

export const InputBox2 = styled.div`
  margin: 0px 16px;
  height: 40px;
  text-align: left;
  padding: 0px 10px;
  font-weight: 500;
  font-size: 12px;
  background: #ffffff;
  border-radius: 3px;
  border: 1px #e8e8e8 solid;
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  margin: 0px 5px;
  border: none;
  margin-right: auto;
  text-align: center;

  &::placeholder {
    color: #b4b4b4;
  }
`;

export const CompletionButton = styled.button`
  margin: 0px 16px;
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

export const Notification2 = styled.div`
  color: #7a7a7a;
  font-size: 12px;
  margin: 24px 16px 12px 16px;
  text-align: center;
`;
