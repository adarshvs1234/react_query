import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { Homepage } from './components/Home.page';
import { RQSuperHeroesPage } from './components/RQSuperHeroesPage';
import { SuperHeroesPage } from './components/SuperHeroes.page';
import './App.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'


const queryClient =  new QueryClient()
function App() {
  return (
<QueryClientProvider client={queryClient}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/super-heroes'>Traditional Super Heroes</Link>
            </li>
            <li>
              <Link to='/rq-super-heroes'>RQ Super Heroes</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/super-heroes' element={<SuperHeroesPage />} />
          <Route path='/rq-super-heroes' element={<RQSuperHeroesPage />} />
          <Route path='/' element={<Homepage />} />
        </Routes>
      </div>
    </Router>
    </QueryClientProvider>
  );
}

export default App;
