import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Posts from './pages/Posts';
import Users from './pages/Users';
import Todos from './pages/Todos';
import Post from './pages/Post';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route
          path='/posts'
          element={<Posts />}
        />
        <Route
          path='/users'
          element={<Users />}
        />
        <Route
          path='/todos'
          element={<Todos />}
        />
        <Route
          path='/posts/:id'
          element={<Post />}
        />
      </Routes>
    </div>
  );
}

export default App;
