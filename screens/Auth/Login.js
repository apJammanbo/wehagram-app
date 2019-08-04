import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";
import { useAuthContext } from "../../AuthContext";
import { TouchableOpacity } from "react-native";

const View = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

const Login = () => {
  const { logIn } = useAuthContext();
  return (
    <View>
      <TouchableOpacity onPress={logIn}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
