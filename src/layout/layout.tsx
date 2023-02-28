import React from 'react';
import { Outlet } from 'react-router';
import styled from '@emotion/styled';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <LayoutWrapper>
      <NavBar />
      <Outlet />
    </LayoutWrapper>
  );
};

export default Layout;

const LayoutWrapper = styled.div`
  min-height: 700px;
  max-width: 360px;
  width: 100%;
  margin: 0 auto;
  margin-top: 30px;
  background-color: #f8f8f8;
  border-radius: 15px;
  border: 1px solid #e8e2e2;
  box-shadow: 5px 2px #e8e2e2;
`;
