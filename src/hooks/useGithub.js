import { useContext } from 'react';
import { GithubContext } from '../providers/GithubProvider';

export default function useGithub() {
  const {
    allUsers,
    getAllUsers,
    getDataUser,
    getUserRepos,
    isLoading,
    setIsLoading,
  } = useContext(GithubContext);

  return {
    allUsers,
    getAllUsers,
    getDataUser,
    getUserRepos,
    isLoading,
    setIsLoading,
  };
}
