import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Slider from './Components/Slider';
import Slider1 from './Components/Slider1';
import Slider2 from './Components/Slider2';
import Slider3 from './Components/Slider3';
import Slider5 from './Components/Slider5';
import Map from './Components/Map';
import './App.css';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';





function App() {
  return (
    <div>
      <Router>
        <Header/>

        <Routes>
            <Route path='/' element={<Slider/>}/>
          </Routes>

        <Routes>
            <Route path='/slider1' element={<Slider1/>}/>
          </Routes>
   
          <Routes>
            <Route path='/slider2' element={<Slider2/>}/>
          </Routes>
          <Routes>
            <Route path='/slider3' element={<Slider3/>}/>
          </Routes>
          <Routes>
            <Route path='/slider5' element={<Slider5/>}/>
          </Routes>
          <Routes>
            <Route path='/map' element={<Map/>}/>
          </Routes>
        <Footer/>
     </Router>
    </div>
  );
}

export default App;
