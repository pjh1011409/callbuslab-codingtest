import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { NavBarWrapper, TitleText } from '../../styles/NavBar.style';

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <NavBarWrapper>
      <IoIosArrowBack
        onClick={() => {
          navigate(-1);
        }}
      />
      <TitleText>
        <Link to="/" style={{ textDecoration: 'none', color: '#b4b4b4' }}>
          자라톡 - 임대관리 비서 <div>Zaritalk.com</div>
        </Link>
      </TitleText>
      <IoIosArrowForward
        onClick={() => {
          navigate(1);
        }}
      />
    </NavBarWrapper>
  );
};

export default NavBar;
