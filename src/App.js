import Header from './components/Header';
import ListAllUsers from './components/ListAllUsers';
import GlobalStyle from './GlobalStyle';
import GithubProvider from './providers/GithubProvider';

function App() {
  return (
    <GithubProvider>
      <GlobalStyle />
      <main>
        <Header />
        <ListAllUsers />
      </main>
    </GithubProvider>
  );
}

export default App;
