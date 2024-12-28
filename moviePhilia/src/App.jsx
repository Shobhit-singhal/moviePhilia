import './App.css'
import{Routes,Route} from "react-router";
import Home from './pages/Home';
import Search from './pages/Search';
import Specific from './pages/Specific';
import Navbar from './Components/Navbar';
import Movie from './pages/Movie';

function App() {

  return (
    <div className='w-full'>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/trending' element={<Search/>} />
        <Route path='/:movie' element={<Movie/>} />
        <Route path='/search/:id' element={<Specific/>} />
      </Routes>

    </div>
  )
}

export default App
