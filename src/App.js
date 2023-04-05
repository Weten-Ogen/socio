import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import {Home,Account} from './pages'
import {NavBar} from './components'

function App() {
  return (
    <div className=''>
      <Router>
        <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/account' element={<Account/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
