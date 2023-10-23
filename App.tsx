import RootNavigation from "./src/Navigation/RootNavigation";
import { NavigationContainer } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  const [fontsLoaded] = useFonts({
    "font-inter": require("./assets/fonts/font-inter.ttf"),
    "font-raleway": require("./assets/fonts/Raleway-VariableFont_wght.ttf"),
    "font-mooli": require("./assets/fonts/Mooli-Regular.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <GestureHandlerRootView style={{flex:1}}>
        <NavigationContainer onReady={onLayoutRootView}>
          <RootNavigation />
        </NavigationContainer>
      </GestureHandlerRootView>
    </>
  );
}
