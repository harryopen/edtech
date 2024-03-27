import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";
import Courses from "./components/Courses";
import Login from "./Login";
import Contact from "./Contact";
import Math from "./components/Math";
import CourseDetail from "./components/CourseDetail";
import ShopCategory from "./Pages/ShopCategory";
import Shop from "./Pages/Shop";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/maths" element={<ShopCategory category="maths"/>} />
          <Route path="/python" element={<ShopCategory category="Python" />} />
          <Route path="/sql" element={<ShopCategory  category="Sql" />} />
          <Route path="/product" element={<Product/>} >
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
