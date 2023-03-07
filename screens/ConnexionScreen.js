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
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { useNavigation } from "@react-navigation/core";

const ConnexionScreen = () => {
  const navigation = useNavigation();

  let [fontsLoaded] = useFonts({
    Baloo: require("../assets/fonts/Baloo/Baloo2-Regular.ttf"),
    BalooBold: require("../assets/fonts/Baloo/Baloo2-Bold.ttf"),
    Quicksand: require("../assets/fonts/Quicksand/Quicksand-Regular.ttf"),
    QuicksandBold: require("../assets/fonts/Quicksand/Quicksand-Bold.ttf"),
    QuicksandSemiBold: require("../assets/fonts/Quicksand/Quicksand-SemiBold.ttf"),
    Raleway: require("../assets/fonts/Raleway/Raleway-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const Inscription = () => {
    navigation.push("Register");
  };

  const Connexion = () => {
    navigation.push("Login");
  };

  // 2. Use at the root of your app
  return (
    <Center flex={1} bg="sunglow">
      <VStack alignItems="center">
        <Image
          // borderColor="white"
          // borderWidth={2}
          alt="logo Paw"
          source={require("../assets/png/logo-paw.png")}
          size={170}
          resizeMode={"contain"}
        ></Image>
        <Text
          mb={100}
          color="white"
          fontSize="5xl"
          style={{ fontFamily: "QuicksandBold" }}
        >
          PAW
        </Text>
        <Button
          onPress={Connexion}
          mb={8}
          px={10}
          py={2.5}
          colorScheme="red"
          _text={{
            fontSize: "xl",
            fontFamily: "BalooBold",
          }}
          variant="rounded"
        >
          Connexion
        </Button>
        <Button
          onPress={Inscription}
          px={10}
          py={2.5}
          colorScheme="red"
          _text={{
            fontSize: "xl",
            fontFamily: "BalooBold",
          }}
          variant="rounded"
        >
          Inscription
        </Button>
      </VStack>
    </Center>
  );
};

export default ConnexionScreen;
