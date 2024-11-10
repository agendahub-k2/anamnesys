import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Img from '../Assets/logo.png';

const NavbarContainer = styled.div`
  width: 100%;
  height: 80px;
  z-index: 20;
  background: #fff;

  @media (max-width: 768px) {
    height: 60px;
  }
`;

const NavbarWrap = styled.div`
  width: 1200px;
  height: 100%;
  margin: 0 auto;
  z-index: 20;
  display: flex;
  position: relative;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1200px) {
    width: 100%;
    padding: 0 20px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Logo = styled.div`
  width: 128px;
  height: auto;

  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }

  @media (max-width: 768px) {
    width: 100px;
  }
`;

const Nav = styled.nav`
  flex: 1;
  position: relative;
  padding-left: 50px;

  @media (max-width: 768px) {
    padding-left: 0;
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    font-size: 14px;
  }
`;

const NavLink = styled(Link)`
  color: #000;
  padding: 0 15px;
  font-size: 16px;
  line-height: 80px;
  font-weight: 700;
  text-decoration: none;

  @media (max-width: 768px) {
    font-size: 14px;
    line-height: 60px;
    padding: 0 8px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: space-between;
    margin-top: 10px;
  }
`;

const Button = styled.div<{ primary?: boolean }>`
  width: 110px;
  color: ${({ primary }) => (primary ? '#037cff' : '#fff')};
  cursor: pointer;
  height: 36px;
  font-size: 16px;
  box-sizing: border-box;
  background: ${({ primary }) => (primary ? '#fff' : '#007cff')};
  text-align: center;
  line-height: 36px;
  border-radius: 21px;

  @media (max-width: 768px) {
    width: 100px;
    font-size: 14px;
    height: 30px;
    line-height: 30px;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarWrap>
        <Logo>
          <img src={Img} alt="Logo" />
        </Logo>
        <Nav>
          <NavLink to='/'>HOME</NavLink>
          <NavLink to='/'>GUIA</NavLink>
          <NavLink to='/'>PREÇOS</NavLink>
          <NavLink to='/'>SOBRE</NavLink>
          <NavLink to='/'>MODELOS</NavLink>
          <NavLink to='/'>AJUDA</NavLink>
        </Nav>
        <ButtonContainer>
          <Button primary>SIGN UP</Button>
          <Button>LOG IN</Button>
        </ButtonContainer>
      </NavbarWrap>
    </NavbarContainer>
  );
};

export default Navbar;
