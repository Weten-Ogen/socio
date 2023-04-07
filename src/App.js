import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import {Home,Account,SignIn,SignUp} from './pages'
import {NavBar} from './components'
import { AuthContextProvider } from './context/AuthContext';


function App() {
  return (
    <div className=''>
     <AuthContextProvider>
        <Router>
          <NavBar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/account' element={<Account/>}/>
            <Route path='/sign_in' element={<SignIn/>}/>
            <Route path='/sign_up' element={<SignUp/>}/>
          </Routes>
        </Router>
     </AuthContextProvider>
    </div>
  );
}

export default App;
