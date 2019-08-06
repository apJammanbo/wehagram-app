import {
  createMaterialTopTabNavigator,
  createStackNavigator
} from "react-navigation";
import SelectPhoto from "../screens/Photo/SelectPhoto";
import TakePhoto from "../screens/Photo/TakePhoto";
import UploadPhoto from "../screens/Photo/UploadPhoto";

const PhotoTabsNavigator = createMaterialTopTabNavigator(
  {
    SelectPhoto,
    TakePhoto
  },
  {
    tabBarPosition: "bottom"
  }
);

const PhotoNavigator = createStackNavigator({
  PhotoTabsNavigator,
  UploadPhoto
});

export default PhotoNavigator;
