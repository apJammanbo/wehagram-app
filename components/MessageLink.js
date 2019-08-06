import React from "react";
import styled from "styled-components/native";
import { withNavigation } from "react-navigation";

const Cotainer = styled.TouchableOpacity``;
const Text = styled.Text``;

const MessageLink = withNavigation(({ navigation }) => (
  <Cotainer onPress={() => navigation.navigate("MessageNavigator")}>
    <Text>Messages</Text>
  </Cotainer>
));

export default MessageLink;
