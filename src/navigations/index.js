import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";

const Navigation = () => {
  // NavigationContainer 컴포넌트르 사용하고 자식 컴포넌트로 AuthStack 내비게이션을 사용
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default Navigation;
