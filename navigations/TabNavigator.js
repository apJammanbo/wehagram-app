import React from "react";
import {
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";
import { View } from "react-native";
import Home from "../screens/Tabs/Home";
import Search from "../screens/Tabs/Search";
import Notification from "../screens/Tabs/Notification";
import Profile from "../screens/Tabs/Profile";
import MessageLink from "../components/MessageLink";

const stackFactory = (initialRoute, customConfig) =>
  createStackNavigator({
    initialRoute: {
      screen: initialRoute,
      navigationOptions: { ...customConfig }
    }
  });

const TabNavigator = createBottomTabNavigator({
  Home: {
    screen: stackFactory(Home, {
      title: "Home",
      headerRight: <MessageLink />
    })
  },
  Search: {
    screen: stackFactory(Search, { title: "Search" })
  },
  Add: {
    screen: View,
    navigationOptions: {
      tabBarOnPress: ({ navigation }) => navigation.navigate("PhotoNavigation")
    }
  },
  Notification: {
    screen: stackFactory(Notification, { title: "Notification" })
  },
  Profile: {
    screen: stackFactory(Profile, { title: "Profile" })
  }
});

export default TabNavigator;
