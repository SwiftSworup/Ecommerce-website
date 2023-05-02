import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Home from "./components/Home";

import ProductDetails from  './components/product/ProductDetails';

function App() {
  return (
    <Router>
      <div className = "App">
        <Header />
        <div className='container container-fluid'>
        <Routes>
          <Route path="/" element={<Home />} exact /> 
          <Route path="/search/:keyword" element={<Home />} exact /> 
          <Route path="/product/:id" element={<ProductDetails/>} />
        </Routes>
        <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
