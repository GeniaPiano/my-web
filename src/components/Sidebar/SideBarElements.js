import styled from 'styled-components';
import {FaTimes} from 'react-icons/fa';
import {Link as LinkScroll} from 'react-scroll';

export const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  left:0;
  transition: 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen? '100%' : '0' )};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;

  &:hover {
    color: #b697fa;
  }

  &:active {
    color: #4f12d3;
  }
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline:none;


`;

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
  
  @media screen and (max-width: 480px){
    grid-template-rows: repeat(6, 60px);
  }
  
`;

export const SidebarLink = styled(LinkScroll)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color:#fff;
    cursor: pointer;  
    &:hover {
      color: #8d3eda;
      transition: 0.2s ease-in-out;
    }
`;

export const SidebarBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;


export const SidebarBtn  = styled(LinkScroll)`
  border-radius: 50px;
  //background: #9451d5;
  background-image: linear-gradient(to right, #a28ad9, #6b36da);
  //-webkit-background-clip: text;
  //-webkit-text-fill-color: transparent;
  white-space: nowrap;
  padding: 16px 64px;
  color: #010606;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.2s ease-in-out;
    opacity: 0.8;
    color: #fff;
  }
`;





