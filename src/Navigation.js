import React from "react";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = styled.nav`
  position: fixed;
  top: 0;
  height: 7rem;
  width: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 2rem;
  background: rgba(0, 0, 0, 0.2);
  z-index: 3;

  button {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.3);
    font-size: 1.6rem;
    margin: 0 2rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 10px;
    padding: 0 1rem;
    user-select: none;

    &:hover {
      color: #667eea;
      border-color: #667eea;
    }
  }

  @media screen and (min-width: 900px) {
    height: 5rem;
    flex-direction: row;
    justify-content: flex-end;
  }
`;

const Navigation = ({ handleReset, dates, filterDate, filterDateHandler }) => {
  return (
    <Navbar>
      <Logo handleReset={handleReset} />
      <button onClick={filterDateHandler}>{`On Air 
      ${filterDate === dates.today ? "Today" : "Tomorrow"}`}</button>
    </Navbar>
  );
};

export default Navigation;