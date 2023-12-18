
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Error from './Pages/Error';
import Home from './Pages/Home';
import User from './Pages/User';
import Add from './Pages/Add';
import Edit from './Pages/Edit';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <h1> users applicattion</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path='/add' element={<Add/>}/>
        <Route path='/edit/:id' element={<Edit/>}/> 
        <Route path='/*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
