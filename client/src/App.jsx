import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';
import RegisterPage from './pages/RegisterPage';

function App() {

 /* route to home page with search, user  */
  return (
    
        <Routes>
            <Route path="/" element={<Layout />}></Route>
            <Route index element={<IndexPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage/>} />
          </Routes>
      
  )
}

export default App
