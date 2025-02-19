import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Data from "./data.js";

function App() {
  return (
    
      <BrowserRouter>
      <NavBar/>
      
      <Routes> 
        <Route path="/" element={<ItemListContainer Data={Data}></ItemListContainer>} />
        <Route path="/producto/:id" element={<ProductoDetalle Data={Data}></ProductoDetalle>} />
        <Route path="/category/:categoryId" element={<ItemListContainer Data={Data}></ItemListContainer>} />
        

      </Routes>


      </BrowserRouter>
    
  
  );
}
import ProductoDetalle from "./components/ProductoDetalle";

export default App;


