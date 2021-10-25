/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const GithubContext = createContext();

export default function GithubProvider({ children }) {
  const [allUsers, setAllUsers] = useState();
  const [isLoading, setIsLoading] = useState(false);

  async function getAllUsers(page = 0, qtd = 10) {
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users?per_page=${qtd}&since=${page}`);
    const users = await res.json();
    if (users) { setIsLoading(false); }
    setAllUsers(users);
  }

  async function getDataUser(login) {
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users/${login}`);
    const user = await res.json();
    return user;
  }

  async function getUserRepos(login) {
    setIsLoading(true);
    const res = await fetch(`https://api.github.com/users/${login}/repos`);
    const repos = await res.json();
    if (repos) { setIsLoading(false); }
    return repos;
  }

  useEffect(() => { getAllUsers(); }, []);

  return (
    <GithubContext.Provider value={{
      allUsers,
      getAllUsers,
      getDataUser,
      getUserRepos,
      isLoading,
      setIsLoading,
    }}
    >
      {children}
    </GithubContext.Provider>
  );
}
