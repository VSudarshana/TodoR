import { BrowserRouter, Routes, Link, Route } from 'react-router-dom';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Landing from './pages/Landing';
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([
    {
      username: "sudar",
      password: "123456"
    },
    {
      username: "prabha",
      password: "123789"
    },
  ]);

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
        <Route path='/signup' element={<SignUp users={users} setUsers={setUsers} />}></Route>
        <Route path='/landing' element={<Landing />}></Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
