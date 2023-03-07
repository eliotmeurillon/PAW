import React from "react";
// 1. import `NativeBaseProvider` component
import {
  NativeBaseProvider,
  Text,
  Box,
  HStack,
  VStack,
  Pressable,
  Image,
  Center,
  extendTheme,
  Button,
  Container,
  Spacer,
  Input,
  Link,
  View,
  KeyboardAvoidingView,
  ScrollView,
} from "native-base";
import MenuPaw from "./menu";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native-web";

export default function App() {
  let [fontsLoaded] = useFonts({
    Baloo: require("./assets/fonts/Baloo/Baloo2-Regular.ttf"),
    BalooBold: require("./assets/fonts/Baloo/Baloo2-Bold.ttf"),
    Quicksand: require("./assets/fonts/Quicksand/Quicksand-Regular.ttf"),
    QuicksandBold: require("./assets/fonts/Quicksand/Quicksand-Bold.ttf"),
    QuicksandSemiBold: require("./assets/fonts/Quicksand/Quicksand-SemiBold.ttf"),
    Raleway: require("./assets/fonts/Raleway/Raleway-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const theme = extendTheme({
    components: {
      Button: {
        variants: {
          rounded: ({ colorScheme }) => {
            return {
              bg: `${colorScheme}.500`,
              rounded: "full",
            };
          },
        },
      },
    },
    colors: {
      darkPurple: "#22162B",
      sunglow: "#FFC929",
      primary: {
        50: "#E3F2F9",
        100: "#C5E4F3",
        200: "#A2D4EC",
        300: "#7AC1E4",
        400: "#47A9DA",
        500: "#0088CC",
        600: "#007AB8",
        700: "#006BA1",
        800: "#005885",
        900: "#003F5E",
      },
      // Redefinig only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
    },
  });
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider theme={theme}>
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={10}
        extraScrollHeight={10}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <Center py={24} bg="sunglow">
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <VStack
              w="90%"
              bg="white:alpha.60"
              space={3}
              px={10}
              py={5}
              flex={1}
            >
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
              <Input placeholder="Email" />
              <Input placeholder="Username" />
              <Input placeholder="Password" />
              <Input placeholder="Confirm Password" />
              <Input placeholder="Email" />
              <Input placeholder="Username" />
            </VStack>
          </TouchableWithoutFeedback>
        </Center>
      </KeyboardAwareScrollView>
    </NativeBaseProvider>
  );
}
