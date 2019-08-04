import React from "react";
import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Text = styled.Text``;

const AuthHome = ({ navigation }) => (
  <View>
    <Text>AuthHome</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Login")}>
      <Text>Go to Login</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
      <Text>Go Signup</Text>
    </TouchableOpacity>
  </View>
);

export default AuthHome;
