import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 7rem;
  padding-top: 5rem;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: linear-gradient(to right bottom, #434343 0%, black 100%);

  @media screen and (min-width: 900px) {
    height: 5rem;
  }
`;