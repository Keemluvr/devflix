import styled from 'styled-components';
import { IoIosArrowDroprightCircle, IoIosArrowDropleftCircle } from "react-icons/io";

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 35px;
  line-height: 1;
  margin-bottom: 16px;
  display: inline-block;
  padding: 20px;
  background: red;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ExtraLink = styled.a`
  margin-left: 16px;
  text-decoration: none;
  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: .5;
  }
  @media (max-width: 800px) {
    display: block;
    margin-bottom: 16px;
    margin-left: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 32px;
  list-style: none;
  display: flex;
  overflow-x: hidden;
  flex-direction: row;
  scroll-behavior: smooth;
  
  li {
    margin-right: 16px;
  }
`;

export const ButtonScrollToRight = styled(IoIosArrowDroprightCircle)`
  position: absolute;
  margin: 90px 0;
  right: 20px;
  font-size: 40px;
  color: var(--white);
  transition: opacity 0.3s ease 0s;
  opacity: .8;
  z-index: 30;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }
`;

export const ButtonScrollToLeft = styled(IoIosArrowDropleftCircle)`
  position: absolute;
  margin: 90px 0;
  left: 6vw;
  font-size: 40px;
  color: var(--white);
  transition: opacity 0.3s ease 0s;
  opacity: .8;
  z-index: 30;

  &:hover {
    opacity: 1;
    cursor: pointer;
  }

  &:disabled {
    opacity: .5;
  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
