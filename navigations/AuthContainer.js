import { createStackNavigator, createAppContainer } from "react-navigation";
import Signup from "../screens/Auth/Signup";
import Login from "../screens/Auth/Login";
import Confirm from "../screens/Auth/Confirm";
import AuthHome from "../screens/Auth/AuthHome";

const AuthNavigator = createStackNavigator(
  {
    AuthHome,
    Signup,
    Login,
    Confirm
  },
  {
    headerMode: "none"
  }
);

const AuthContainer = createAppContainer(AuthNavigator);
export default AuthContainer;
