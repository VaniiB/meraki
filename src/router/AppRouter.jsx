
import { BrowserRouter,Route, Routes } from "react-router-dom";
import { Inicio } from "../pages/inicio";
import { Navbar } from "../componentes/Navbar";




export const AppRouter = () => {
  return (
    <BrowserRouter>
<Navbar/>
      <Routes>
      <Route path="/" element={<Inicio />} />

      </Routes>
      

    </BrowserRouter>
  );

};

export default AppRouter;
