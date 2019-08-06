import React from "react";
import { useAuthContext } from "../contexts/AuthContext";
import AuthContainer from "../navigations/AuthContainer";
import MainContainer from "../navigations/MainContainer";

const NavController = () => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? <MainContainer /> : <AuthContainer />;
};

export default NavController;
