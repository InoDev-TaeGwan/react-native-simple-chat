import React, { useState } from "react";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./theme";
import { Image, StatusBar } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import Navigation from "./navigations";
import { images } from "./utils/images";

/*
 * 프로젝트에서 사용할 이미지와 폰트를 미리 불러와서 사용할 수 있도록 cacheImages 와 cacheFonts 함수를 작성하고 이를 이용해 _loadAssets 함수를 구성
 * 이미지나 폰트를 미리 불렁면 애플리케이션을 사용하는 환경에 따라 이미지나 폰트가 느리게 적용되는 문제를 개선할 수 있다.
 *
 * 애플리케이션은 미리 불러와야 하는 항목들을 모두 불러오고 화면이 렌더링되도록 AppLoading 콤포넌트의 startAsync 에 _loadAssets 함수를 지정하고,
 * 완료되었을 때 isReady 상태를 변경해서 화면이 렌더링되도록 만들었음.
 *
 * */

const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};

const cacheFonts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

const App = () => {
  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([
      require("../assets/splash.png"),
      ...Object.values(images),
    ]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return isReady ? (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="dark-content" />
      <Navigation />
    </ThemeProvider>
  ) : (
    <AppLoading
      startAsync={_loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;
