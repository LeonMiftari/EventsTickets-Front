import "../src/Styles/main.scss";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Events from './pages/Events';
import EventDetails from './pages/EventDetails';
import BuyForm from './pages/BuyForm';
import Transactions from './pages/Transactions';

import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return (
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
              <Route  index element={<Home/>}/>
              <Route  path="events" element={<Events/>}/>
              <Route  path="transactions" element={<Transactions/>}/>

              <Route path="/event" element={<EventDetails />} />
              <Route path="/buyform" element={<BuyForm />}/>
              <Route  path="*" element={<NotFound/>}/>
        </Route>
      </Routes>
   </BrowserRouter>

  );
}


export default App;
