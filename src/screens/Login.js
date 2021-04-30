import React, { useRef, useState } from "react";
import styled from "styled-components/native";
import { Button } from "react-native";
import { Image, Input } from "../components";
import { images } from "../utils/images";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
`;

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const passwordRef = useRef();
  /*
   * useRef 를 이용해 이메일을 입력받는 Input 컴포넌트에서 키보드의 next 버튼을 클릭하면 비밀번호를 입력하는 Input 컴포넌트로 포커스가 이동
   * 이메일을 입력하는 Input 컴포넌트의 onSubmitEditing 함수를 passwordRef 를 이용해서 비밀번호를 입력하는 Input 컴포넌트로 포커스가 이동하도록 함.
   *
   * Input 컴포넌트에 전달된 ref 를 이용해 TextInput 컴포넌트의 ref 로 지정해야 한다
   * 하지만 ref 는 key 처럼 리액트에서 특별히 관리되기 때문에 자식 컴포넌트의 props 로 전달되지 않는다.
   * 이런 상황에서 forwardRef 함수를 이용하면 ref 를 전달받을 수 있다.
   *
   * 리액트 네이티브에서 제공하는 기능으로 다른 영역을 터치했을 때 키보드를 감추는 기능을 만들기 위해서는
   * TouchableWithoutFeedback 컴포넌트와 keyboard API 를 이용한다.
   * TouchableWithoutFeedback 컴포넌트는 클릭에 대해 상호 작용은 하지만 스타일 속성이 없고 반드시 하나의 자식 컴포넌트를 가져야 하는 특징이 있다.
   * keyboard API 는 리액트 네이티브에서 제공하는 키보드 관련 API 로 키보드 상태에 따른 이벤트 등록에 많이 사용되며,
   * keyboard API 에서 제공하는 dismiss 함수는 활성화된 키보드를 닫는 기능이다.
   *
   * TouchableWithoutFeedback 컴포넌트와 keyboard API 를 이용해서 만든 화면은 입력도중 다른 영역을 터치할 경우 키보드가 사라지는 것을 볼수 있다.
   * 하지만 위치에 따라 키보드가 Input 컴포넌트를 가리는 문제는 해결하지 못한다.
   *
   * react-native-keyboard-aware-scroll-view 라이브러리를 이용하면 이런 고민을 쉽게 해결할 수 있다.
   * react-native-keyboard-aware-scroll-view 라이브러리는 포커스가 있는 TextInput 컴포넌트의 위치로 자동 스크롤되는 기능 등 Input 컴포넌트에 필요한 기능등을 제공한다.
   *
   */
  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flex: 1 }}
      extraScrollHeight={20} // 원하는 위치로 스크롤되도록 설정
    >
      <Container>
        <Image url={images.logo} imageStyle={{ borderRadius: 8 }} />
        <Input
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          onSubmitEditing={() => passwordRef.current.focus()}
          placeholder="Email"
          returnKeyType="next"
        />
        <Input
          ref={passwordRef}
          label="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          onSubmitEditing={() => {}}
          placeholder="Password"
          returnKeyType="done"
          isPassword
        />
        <Button title="Signup" onPress={() => navigation.navigate("Signup")} />
      </Container>
    </KeyboardAwareScrollView>
  );
};

export default Login;
