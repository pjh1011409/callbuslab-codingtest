import styled from '@emotion/styled';
// 네비게이션바에 대한 스타일

export const NavBarWrapper = styled.div`
  min-height: 5vh;
  background-color: #ffffff;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #dfdfdf;
`;

export const TitleText = styled.div`
  font-size: 13px;
  text-align: center;
  width: 50%;

  & > div {
    margin: 2px;
    font-size: 8px;
  }
`;
