import React, { useState } from 'react';
import reactDom from 'react-dom';

import useGithub from '../../hooks/useGithub';
import UserRepos from '../UserRepos';
import Loader from '../Loader';

import { Container, ModalContainer, DataUser } from './styles';

export default function Modal({ user, onCloseModal }) {
  const [userRepos, setUserRepos] = useState([]);
  const [isShowRepos, setIsShowRepos] = useState(false);
  const { getUserRepos, isLoading } = useGithub();

  async function handleUserRepos(e) {
    e.preventDefault();
    const repos = await getUserRepos(user.login);
    setUserRepos(repos);
    setIsShowRepos(true);
  }

  function UserModal() {
    return (
      <Container>
        {user && (
          <ModalContainer>
            <button type="button" onClick={onCloseModal}>X</button>
            <DataUser>
              <header>
                <h3>{user.login}</h3>
              </header>
              <a href={user.html_url}>{user.html_url}</a>
              <p><strong>User ID: </strong><span>{user.id}</span></p>
              <p><strong>Since: </strong><span>{user.created_at}</span></p>
            </DataUser>

            {!isLoading
              ? (
                <button
                  className="btn-listRepos"
                  type="button"
                  onClick={(e) => handleUserRepos(e)}
                >
                  Public Repositories
                </button>
              )
              : <Loader />}

            {isShowRepos && <UserRepos repos={userRepos} />}
          </ModalContainer>
        )}
      </Container>
    );
  }

  return reactDom.createPortal(
    <UserModal />,
    document.getElementById('modal-root'),
  );
}
