import { lazy, Suspense, Fragment } from "react";

import { BrowserRouter,Route, Navigate, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import PrivateRouter from "./PrivateRouter";
import ProfilePage from "../pages/ProfilePage";
import PostDetail from "../pages/PostDetail";
import CustomPostPage from "../pages/CustomPostPage";
import Navbar from "../components/navbar/Navbar";

export const MainRouter = () => {
  const isLoggedIn = false;

  return (
    <BrowserRouter>
      <Suspense fallback="">
        <Navbar />
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/" element={<HomePage/>}  />
            <Route element={<PrivateRouter/>}>
                <Route  path="/detail/:slug" element={<PostDetail/>} />
                <Route  path="/profile" element={<ProfilePage/>} />
                <Route  path="/create" element={<CustomPostPage/>} />
                <Route  path="/edit/:slug" element={<CustomPostPage/>} />
            </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};