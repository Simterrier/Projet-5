import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import FicheLogement from "../pages/FicheLogement";
import APropos from "../pages/APropos";
import NotFound from "../pages/NotFound";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Layout principal avec header/footer */}
        <Route element={<MainLayout />}>
          {/* Page d'accueil */}
          <Route index element={<Home />} />

          {/* Page À propos */}
          <Route path="a-propos" element={<APropos />} />

          {/* Page Fiche Logement avec paramètre :id */}
          <Route path="logement/:id" element={<FicheLogement />} />

          {/* Page 404 pour toute autre route */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}