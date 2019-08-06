import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Asset } from "expo-asset";
import { Text, AsyncStorage, TouchableOpacity } from "react-native";
import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo-hooks";
import { apolloClientOptions } from "./apollo";
import { ThemeProvider } from "styled-components";
import styles from "./styles";
import NavController from "./components/NavController";
import { AuthProvider } from "./contexts/AuthContext";

// #region Functions

/**
 * Client를 생성한다.
 */
const createClient = async () => {
  const cache = new InMemoryCache();
  await persistCache({
    cache,
    storage: AsyncStorage
  });
  const client = new ApolloClient({
    cache,
    ...apolloClientOptions
  });
  return client;
};

/**
 * 필요한 Asset를 로딩한다.
 */
const loadAssets = async () => {
  await Font.loadAsync({ ...Ionicons.font });
  await Asset.loadAsync([require("./assets/logo.png")]);
};

//#endregion

/**
 * App
 */
const App = () => {
  const [client, setClient] = useState(null);

  useEffect(() => {
    preLoad();
  }, []);

  const preLoad = async () => {
    try {
      await loadAssets();
      const client = await createClient();
      setClient(client);
    } catch (error) {
      console.log(error);
    }
  };

  return client ? (
    <ApolloProvider client={client}>
      <ThemeProvider theme={styles}>
        <AuthProvider>
          <NavController />
        </AuthProvider>
      </ThemeProvider>
    </ApolloProvider>
  ) : (
    <AppLoading />
  );
};

export default App;
