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
import CartPage from "../pages/CartPage";
import FavPages from "../pages/FavPages";
import PrivateRoutes from "../components/PrivateRoutes";

const RoutesViews = () => {
  return (
    <>
    <NavbarC />
    <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={
          <PrivateRoutes role="user">
            <UserPage />
          </PrivateRoutes>
        } />
        <Route path="/admin" element={
          <PrivateRoutes role="admin">
            <AdminPage />
          </PrivateRoutes>
        } />
        <Route path="/admin-users" element={
          <PrivateRoutes role="admin">
            <AdminUsersPage />
          </PrivateRoutes>
        } />
        <Route path="/admin-products" element={
          <PrivateRoutes>
            <AdminProductsPage />
          </PrivateRoutes>
        } />
        <Route path="/fav" element={
          <PrivateRoutes role="user">
            <FavPages />
          </PrivateRoutes>
        } />
        <Route path="/cart" element={
          <PrivateRoutes role="user">
            <CartPage />
          </PrivateRoutes>
        } />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="*" element={<ErrorPage />} />
    </Routes>
    <FooterC />
    </>

  );
};

export default RoutesViews;