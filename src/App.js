import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import Catalog from './pages/Catalog/Catalog';
import Home from './pages/Home/Home';
import './scss/style.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route path="" element={<Home/>}/>
          <Route path="catalog" element={<Catalog/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
