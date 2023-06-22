import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Hotels from './pages/Hotels/Hotels'
import SingleHotel from './pages/SingleHotel/SingleHotel'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Hotels' element={<Hotels />} />
          <Route path='/Hotels/:id' element={<SingleHotel />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App