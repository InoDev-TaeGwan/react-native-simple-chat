import React from "react";
import styled from "styled-components/native";
import { Button, Text } from "react-native";

const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.background};
`;

const ChannelCreation = ({ navigation }) => {
  return (
    <Container>
      <Text style={{ fontSize: 24 }}>channel Creation</Text>
      <Button title="channel" onPress={() => navigation.navigate("channel")} />
    </Container>
  );
};

export default ChannelCreation;
