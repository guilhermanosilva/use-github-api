import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalContainer = styled.div`
  background-color: #2d333b;
  border-radius: 0.5rem;
  max-height: 80vh;
  min-width: 50vw;
  overflow-y: auto;
  padding: 2rem 1rem;
  position: relative;

  button {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;
    background-color: transparent;
    border: none;
    font-size: 1.125rem;
    color: #777777;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      color: #999999;
    }
  }

  .btn-listRepos {
    border: 1px solid #555555;
    border-radius: 1rem;
    background-color: #1c2128;
    font-size: 0.875rem;
    font-weight: 600;
    margin-bottom: 1rem;
    margin-top: 1rem;
    position: static;
    padding: 0.5rem 1rem;

    &:hover {
      background-color: #2d333b;
    }

    &:active {
      color: #1c2128;
      background-color: cornflowerblue;
    }
  }

::-webkit-scrollbar {
  width: 0.5rem;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 0.25rem rgba(0,0,0,0.5);
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb {
  background: #555555;
  border-radius: 0.5rem;
}

::-webkit-scrollbar-thumb:hover {
  background: cornflowerblue;
}
`;

export const DataUser = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 0.875rem;
  background-color: #1c2128;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-bottom: 1rem;

  header {
    h3 {
      border-bottom: 1px solid #666666;
      color: #999999;
      font-size: 1.5rem;
      padding-bottom: 0.25rem;
    }
  }

  a {
      font-weight: 600;
      font-size: 0.875rem;
      color: #777;
      margin: 1rem 0;
      transition: all 0.2s ease-in-out;

      &:hover {
        color: #999;
        cursor: pointer;
      }
    }

  p {
    margin-bottom: 0.5rem;

    strong {
      text-transform: uppercase;
      font-weight: 600;
      margin-right: 0.5rem;
    }

    span {
      color: cornflowerblue;
    }

  }
`;
