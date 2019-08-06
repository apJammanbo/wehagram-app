import { createStackNavigator, createAppContainer } from "react-navigation";
import TabNavigator from "./TabNavigator";
import PhotoNavigator from "./PhotoNavigator";
import MessageNavigator from "./MessageNavigator";

const MainNavigator = createStackNavigator(
  {
    TabNavigator,
    PhotoNavigator,
    MessageNavigator
  },
  {
    headerMode: "none",
    mode: "modal"
  }
);

const MainContainer = createAppContainer(MainNavigator);
export default MainContainer;
