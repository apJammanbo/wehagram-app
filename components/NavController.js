import React from "react";
import { useAuthContext } from "../AuthContext";
import AuthNavigation from "../navigations/AuthNavigation";
import MainNavigation from "../navigations/MainNavigation";

const NavController = () => {
  const { isLoggedIn } = useAuthContext();
  return isLoggedIn ? <MainNavigation /> : <AuthNavigation />;
};

export default NavController;
