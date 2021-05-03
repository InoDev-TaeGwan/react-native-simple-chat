import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
// import AuthStack from "./AuthStack";
import { Spinner } from "../components";
import { ProgressContext } from "../contexts";
import MainStack from "./MainStack";

const Navigation = () => {
  // Spinner 컴포넌트가 ProgressContext 의 inProgress 상태에 따라 렌더링되도록 함.
  const { inProgress } = useContext(ProgressContext);
  // NavigationContainer 컴포넌트르 사용하고 자식 컴포넌트로 AuthStack 내비게이션을 사용
  return (
    <NavigationContainer>
      {/*<AuthStack />*/}
      <MainStack />
      {inProgress && <Spinner />}
    </NavigationContainer>
  );
};

export default Navigation;
