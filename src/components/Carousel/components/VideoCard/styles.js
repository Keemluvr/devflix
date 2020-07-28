import styled from "styled-components";

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity 0.3s;
  &:after {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0px;
    bottom: 0px;
    top: 0px;
    right: 0px;
    opacity: 0;
    background: rgba(0, 0, 0, 0.5);
    margin: auto;
    transition: opacity 0.3s ease 0s;
  }
  &:hover,
  &:focus {
    &:after {
      opacity: 1;
    }
    h2 {
      opacity: 1;
    }
  }

  &:not(:first-child) {
    margin-left: 20px;
  }
`;

export const VideoCardTitle = styled.h2`
  position: relative;
  transition: opacity 0.3s ease 0s;
  z-index: 20;
  opacity: 0;
`;
