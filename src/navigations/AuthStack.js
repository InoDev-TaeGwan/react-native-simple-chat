import React, { useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ThemeContext } from "styled-components/native";
import { Login, SignUp } from "../screens";

const Stack = createStackNavigator();

const AuthStack = () => {
  const theme = useContext(ThemeContext);
  /*
   * 스타일 컴포넌트에서 제공하는 ThemeContext 와 useContext Hook 함수를 이용해 theme 를 받아옴.
   * 내비게이션 화면의 배경색을 theme 에 정의된 배경색으로 설정
   * 헤더의 타이틀 위치를 안드로이드와 ios 에서 동일한 위치에 렌더링하기 위해 headerTitleAlign 의 값을 center 로 설정
   * */
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenoptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundColor },
      }}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
