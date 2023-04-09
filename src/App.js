import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import {Home,Account,SignIn,SignUp,PageNotFound} from './pages'
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
            <Route path='/login' element={<SignIn/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='*' element={<PageNotFound/>}/>
          </Routes>
        </Router>
     </AuthContextProvider>
    </div>
  );
}

export default App;
