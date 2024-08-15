import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

//components
import { NavBar } from './components/NavBar'
//pages
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'

function App() {

  return (
      <div className='App'>
        <BrowserRouter>
        <NavBar></NavBar>
          <Routes>
            <Route path='/' element={<Home></Home>} />
            <Route path='/user/login' element={<Login></Login>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  )
}

export default App
