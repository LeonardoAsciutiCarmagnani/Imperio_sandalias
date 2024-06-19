// src/Components/Router/Routes.tsx
import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Adm from "../../pages/Adm";
import LoginAdm from "@/pages/LoginAdm";
import ProtectedRoute from "../../Components/ProtectedRoute/ProtectedRoute";

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginAdm />} />
      <Route path="/adm" element={<ProtectedRoute />}>
        <Route path="/adm" element={<Adm />} />
      </Route>
    </Routes>
  );
}
