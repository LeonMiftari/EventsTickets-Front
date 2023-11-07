import "../src/Styles/main.scss";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Contact from './pages/Contact';
import Products from './pages/Products';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
              <Route  index element={<Home/>}/>
              <Route  path="products" element={<Products/>}/>
              <Route  path="contact" element={<Contact/>}/>
              <Route  path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
   </BrowserRouter>

  );
}


export default App;
