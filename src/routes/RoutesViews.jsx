import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/ErrorPage";
import NavbarC from "../components/NavbarC";
import FooterC from "../components/FooterC";
import RegisterPage from "../pages/RegisterPage";
import ProductPage from "../pages/ProductPage";
import LoginPage from "../pages/LoginPage";
import UserPage from "../pages/UserPage";
import AdminPage from "../pages/AdminPage";
import AdminUsersPage from "../pages/AdminUsersPage";
import AdminProductsPage from "../pages/AdminProductsPage";

const RoutesViews = () => {
  return (
    <>
    <NavbarC />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/admin-users" element={<AdminUsersPage />} />
        <Route path="/admin-products" element={<AdminProductsPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    <FooterC />
    </>

  );
};

export default RoutesViews;