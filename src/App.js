import './app.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Register from './pages/Register';

function App() {
  // const Navigate = useNavigate()
  const user = true;
  return (
    <BrowserRouter>
    <div className="app">
    <Navbar user={user}/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={user ? <Navigate to='/' replace={true}/> : <Login/>}/>
      <Route path='/post/:id' element={user ? <Post/> : <Navigate to='/login' replace={true}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
