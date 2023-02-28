import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCustomSelector from '../../hooks/useCustomSelector';
import { GetMontlyRefund } from '../../utils/getMontlyRefund';
import { BottomText, HeaderWrapper, Highlight, MiddleText, TopText } from '../../styles/Residency.style';

const ResidencyHeader = () => {
  const navigate = useNavigate();
  const { MontlyRent } = useCustomSelector().inputState;
  return (
    <HeaderWrapper>
      <TopText>
        내 월세 환급금은 <Highlight>{GetMontlyRefund(Number(MontlyRent))}</Highlight>만원입니다.
        <br />
        자리톡으로 환급 신청하세요 👇
      </TopText>
      <MiddleText>
        해당 금액은 확정된 것이 아니며 세액공제 자격조건, <br />
        세금납부 및 공제이력에 따라 변동될 수 있습니다.
      </MiddleText>
      <BottomText
        onClick={() => {
          navigate(-1);
        }}
      >
        임대비용 수정하기
      </BottomText>
    </HeaderWrapper>
  );
};

export default ResidencyHeader;
