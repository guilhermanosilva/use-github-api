import styled from 'styled-components';

export const ListContainer = styled.section`
  border: 1px solid #2d333b;
  border-radius: 0.5rem;
  padding: 1rem 0;
  min-width: 10rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 2rem;
  margin-top: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: 1px solid #555555;
    border-radius: 1rem;
    background-color: #2d333b;
    color: #cccccc;
    font-size: 0.875rem;
    font-weight: 600;
    margin: 1rem;
    width: 100%;
    padding: 0.5rem 2rem;

    display: flex;
    align-items: space-around;
    justify-content: space-around;
    transition: all 0.2s ease-in-out;

    span {
      display: inline-block;
    }

    &:hover {
      cursor: pointer;
      background-color: #555555;
    }

    &:active {
      color: #1c2128;
      background-color: cornflowerblue;
    }
  }
`;

export const List = styled.ul`
  a{
    border-radius: 0.5rem;
    display: block;
    margin: 0 0.5rem;
    padding: 0.5rem;
    transition: all 0.1s ease-in-out;

    &:hover {
      background-color: #2d333b;
    }

    &:active {
      filter: brightness(1.2);
    }

    span:nth-child(1) {
      display: inline-block;
      font-weight: 600;
      font-size: 0.875rem;
      min-width: 2.5rem;
      text-transform: uppercase;
    }

    span:nth-child(2) {
      color: cornflowerblue;
    }
  }
`;
