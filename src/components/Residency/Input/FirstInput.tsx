import * as React from 'react';
import { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import { AiOutlineSearch } from 'react-icons/ai';
import { Column, Input, Notification1, Title } from '../../../styles/Residency.style';
import { BsFillInfoCircleFill } from 'react-icons/bs';
import { OnChangeFirstProps } from '../../../types/type';
import { InputBox2 } from '../../../styles/Residency.style';

const FirstInput = ({ onChangeAddress, setAddressAPI }: OnChangeFirstProps): JSX.Element => {
  const [openPostcode, setOpenPostcode] = useState<boolean>(false);
  const [inputAddressValue, setInputAddressValue] = useState('');

  const handle = {
    // 버튼 클릭 이벤트
    clickButton: () => {
      setOpenPostcode(current => !current);
    },

    // 주소 선택 이벤트
    selectAddress: (data: any) => {
      setInputAddressValue(data.address);
      setOpenPostcode(false);
      // onChangeAddress(data.address);
      setAddressAPI(data.address);
    },
  };

  const postCodeStyle: React.CSSProperties = {
    display: 'block',
    position: 'absolute',
    top: '20%',
    width: '355px',
    height: '400px',
    padding: '7px',
    zIndex: 100,
  };

  return (
    <div>
      <Column>
        <Title>거주 건물</Title>
      </Column>
      <InputBox2 onClick={handle.clickButton}>
        <Input
          name="주소"
          type="text"
          placeholder="살고 계신 건물주소 또는 건물명을 입력하세요."
          value={inputAddressValue}
          onChange={onChangeAddress}
        />
        <AiOutlineSearch size="24" color="#b4b4b4" />
      </InputBox2>
      <Notification1>
        <BsFillInfoCircleFill size={20} />
        <span>과거 거주지가 아닌 현재 거주지를 입력해주세요. (과거 거주지 환급도 현재 거주지를 입력해야 합니다.)</span>
      </Notification1>

      {openPostcode && (
        <DaumPostcode
          style={postCodeStyle}
          onComplete={handle.selectAddress} // 값을 선택할 경우 실행되는 이벤트
          defaultQuery="판교역로 235" // 팝업을 열때 기본적으로 입력되는 검색어
          autoClose={false}
        />
      )}
    </div>
  );
};

export default FirstInput;
