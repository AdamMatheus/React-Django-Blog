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
          <Route path="/login" component={LoginPage} exact />
          <Route path="/register" component={RegisterPage} exact />
          <Route path="/" component={HomePage} exact />
          <PrivateRouter exact path="/detail/:slug" component={PostDetail} />
          <PrivateRouter exact path="/profile" component={ProfilePage} />
          <PrivateRouter exact path="/create" component={CustomPostPage} />
          <PrivateRouter exact path="/edit/:slug" component={CustomPostPage} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};