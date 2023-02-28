import styled from '@emotion/styled';

// 완료페이지의 컴포넌트들에 대한 스타일
export const CompletionWrapper = styled.div`
  width: 328px;
  height: auto;
  margin: 20px 16px;
  background-color: #ffffff;
  box-shadow: 0px 0px 7px 2px rgba(180, 180, 180, 0.05);
  border-radius: 6px;
`;

export const TopWrapper = styled.div`
  padding: 12px 10px;
  height: 60px;
  font-weight: 700;
  font-size: 14px;
  display: flex;
  align-items: center;
  border-bottom: 0.2px solid #dddddd;
`;

export const Img = styled.img`
  width: 24px;
  margin: 8px;
`;

export const TextOverFlow = styled.div`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const MiddleWrapper = styled.div`
  margin: 25px 20px;
  border-bottom: 0.2px solid #dddddd;
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const InfoBox = styled.div`
  width: 100%;
  height: 30px;
  padding: 5px 3px;
  display: flex;
  align-items: center;
  font-family: 'Apple SD Gothic Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
`;

export const Menu = styled.div`
  color: #b4b4b4;
`;

export const Info = styled.div`
  color: #222222;
  margin: 0px 10px;
`;

export const BottomWrapper = styled.div`
  margin: 16px;
`;

export const Period = styled.div`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  color: #b4b4b4;
  text-align: center;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
`;

export const Button = styled.button`
  font-weight: 700;
  font-size: 13px;
  color: #7a7a7a;
  display: flex;
  margin: 16px 2px;
  padding: 12px 30px;
  align-items: center;
  background: #ffffff;
  border: 1px solid #c8c8c8;
  border-radius: 8px;

  &:hover {
    background: #7a7a7a;
    color: #ffffff;
  }
`;
