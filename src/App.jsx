
import { Routes, Route } from 'react-router-dom';

import Root from './routes/root';

import Home from './pages/Home'

import ErrorPage from './routes/ErrorPage';

function App() {


  return (
    <Routes>
      <Route path="/" element={<Root/>}>
        <Route index element={<Home/>}/>


        <Route path="*" element={<ErrorPage/>}/>
      </Route>
    </Routes>
  )
}

export default App
