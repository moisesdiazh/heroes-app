import { Routes, Route, BrowserRouter } from "react-router-dom";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashboardRoutes } from "./DashboardRoutes";

export const AppRouter = () => {
  return (
    //necesitas envolver las rutas en un browserRouter
    <BrowserRouter>
        <Routes>{/*Las rutas */}
            
            <Route path="/login" element={<LoginScreen />} />

            <Route path="/*" element={<DashboardRoutes/>} />
        </Routes>
    </BrowserRouter>
  );
};
