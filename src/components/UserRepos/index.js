import ReposList from './styles';

/* eslint-disable react/prop-types */
export default function UserRepos({ repos: userRepos }) {
  return (
    <ReposList>
      {
        userRepos?.length > 0 && userRepos.map((repo) => (
          <li key={repo.id}>
            <p>Repo ID: {repo.id}</p>
            <p>Repo Name: {repo.name}</p>
            <p>Repo URL: <a href={repo.html_url}>{repo.html_url}</a></p>
          </li>
        ))
      }
    </ReposList>
  );
}
