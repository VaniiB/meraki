
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/inicio";
import { Navbar } from "../componentes/Navbar";
import Footer from "../componentes/Footer";




export const AppRouter = () => {
  return (
    <BrowserRouter>
<Navbar/>
      <Routes>
      <Route path="/" element={<Inicio />} />

      </Routes>
      
<Footer/>
    </BrowserRouter>
  );

};

export default AppRouter;
