import './app.css';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import { BrowserRouter,Routes,Route,Navigate} from 'react-router-dom';
import Home from './pages/Home';
import Post from './pages/Post';
import Register from './pages/Register';
import Reset from './pages/Reset';
import { useEffect, useState } from 'react';

function App() {
  // const Navigate = useNavigate()
  const [user,setUser] = useState(null);

  useEffect(()=>{
    const getUser = () =>{
      fetch("http://localhost:5000/auth/login/success",{
        method:"GET",
        credentials:"include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials":true,
        },
      }).then((response)=>{
        if(response.status === 200) return response.json();
        throw new Error ("authentication has failed!")
      }).then(resObject=>{
        setUser(resObject.user);
      }).catch((err)=>{
        console.log(err);
      });
    }
    getUser();
  },[]);
  console.log(user)
  return (
    <BrowserRouter>
    <div className="app">
    <Navbar user={user}/>
    <Routes>
      <Route path='/register' element={<Register/>}/>
      <Route path='/recovery' element={<Reset/>}/>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={user ? <Navigate to='/' replace={true}/> : <Login/>}/>
      <Route path='/post/:id' element={user ? <Post/> : <Navigate to='/login' replace={true}/>}/>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
