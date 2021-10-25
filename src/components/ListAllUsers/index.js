import { useEffect, useState } from 'react';

import Modal from '../Modal';
import Loader from '../Loader';
import useGithub from '../../hooks/useGithub';

import { List, ListContainer, ButtonContainer } from './styles';

export default function ListAllUsers() {
  const [page, setPage] = useState(10);
  const [allUserData, setAllUserData] = useState('');
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isInitialLoader, setInitialLoader] = useState(true);

  const {
    allUsers,
    getAllUsers,
    getDataUser,
    isLoading,
    setIsLoading,
  } = useGithub();

  async function handleUser(e, user) {
    e.preventDefault();

    const userData = await getDataUser(user.login);
    setIsOpenModal(true);
    setIsLoading(false);
    setAllUserData(userData);
  }

  function handleCloseModal() {
    setIsOpenModal(false);
  }

  function handleNextUsers() {
    setIsLoading(true);
    setPage(page + 10);
    getAllUsers(page);
  }

  useEffect(() => {
    if (allUsers) {
      setInitialLoader(false);
    }
  }, [allUsers]);

  return (
    <ListContainer>
      {isInitialLoader ? <Loader /> : (
        <>
          <List>
            {allUsers?.length > 0 && allUsers.map((user) => (
              <a href="/" onClick={(e) => handleUser(e, user)} key={user.id}>
                <li>
                  <span>Id: {user.id}</span> | <span>{user.login}</span>
                </li>
              </a>
            ))}
          </List>
          <ButtonContainer>
            {!isLoading ? <button type="button" onClick={(e) => handleNextUsers(e)}>Next</button> : <Loader />}
          </ButtonContainer>
        </>
      )}
      {isOpenModal && <Modal user={allUserData} onCloseModal={handleCloseModal} /> }
    </ListContainer>
  );
}
