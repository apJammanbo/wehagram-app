import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const TakePhoto = ({ navigation }) => (
  <View>
    <TouchableOpacity onPress={() => navigation.navigate("UploadPhoto")}>
      <Text>TakePhoto</Text>
    </TouchableOpacity>
  </View>
);

export default TakePhoto;
