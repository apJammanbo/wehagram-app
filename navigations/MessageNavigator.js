import { createStackNavigator } from "react-navigation";
import Messages from "../screens/Messages/Messages";
import Message from "../screens/Messages/Message";

const MessageNavigator = createStackNavigator({
  Messages,
  Message
});

export default MessageNavigator;
