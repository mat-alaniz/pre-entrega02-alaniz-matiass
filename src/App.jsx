import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Data from "./data.js";
import ProductoDetalle from "./components/ProductoDetalle";
import { CartProvider } from "./components/useContext/cartContext.jsx";
import Carrito from "./components/cart/Carrito.jsx";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
      <NavBar/>
      
      <Routes> 
        <Route path="/" element={<ItemListContainer Data={Data}></ItemListContainer>} />
        <Route path="/producto/:id" element={<ProductoDetalle Data={Data}></ProductoDetalle>} />
        <Route path="/category/:categoryId" element={<ItemListContainer Data={Data}></ItemListContainer>} />
        <Route path="/cart" element={<Carrito></Carrito>} />

      </Routes>
      </BrowserRouter>
    </CartProvider>

    
  
  );
}


export default App;


