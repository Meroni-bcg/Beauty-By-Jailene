import './App.css'
import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import Layout from './Layout.jsx';

function App() {


  return (
    /* route to home page with search, user  */
    <Routes>
      <Route path="/" element={<Layout />}>
      </Route>
      <Route index element={<IndexPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
   
  )
}

export default App
