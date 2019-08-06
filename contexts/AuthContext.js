import React, { createContext, useState, useEffect, useContext } from "react";
import { AppLoading } from "expo";
import { AsyncStorage } from "react-native";

/**
 * AsyncStorage에 값을 설정한다.
 */
const setItemAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
  } catch (error) {
    console.log(error);
  }
};

/**
 * AuthContext
 */
const AuthContext = createContext();

const useAuthContext = () => {
  return useContext(AuthContext);
};

/**
 * AuthProvider
 */
const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  /**
   * Login
   */
  const logIn = async () => {
    await setItemAsyncStorage("isLoggedIn", "true");
    setIsLoggedIn(true);
  };

  /**
   * Logout
   */
  const logOut = async () => {
    setItemAsyncStorage("isLoggedIn", "false");
    setIsLoggedIn(false);
  };

  /**
   *
   */
  const checkIsLogin = async () => {
    const isLogin = await AsyncStorage.getItem("isLoggedIn");
    if (isLogin === "true") {
      await logIn();
    } else {
      await logOut();
    }
  };

  useEffect(() => {
    checkIsLogin();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut }}>
      {isLoggedIn !== null ? children : <AppLoading />}
    </AuthContext.Provider>
  );
};

export { AuthProvider, useAuthContext };
