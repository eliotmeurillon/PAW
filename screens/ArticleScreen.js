import React, { useState } from "react";
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
  FlatList,
  Alert,
  AspectRatio,
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import MenuP from "../menu";

const ArticleScreen = () => {
  const navigation = useNavigation();

  const [Items, setItems] = useState([
    {
      titre: "Nutrition",
      src: require("../assets/jpg/nutrition.png"),
      onItemPress: () => navigation.push("Article-Nutrition"),
    },
    {
      titre: "Soin",
      src: require("../assets/png/articles/soin.png"),
      onItemPress: () => navigation.push("Article-Soin"),
    },
    {
      titre: "Jeux",
      src: require("../assets//png/articles/jeux.png"),
      onItemPress: () => navigation.push("Article-Jeux"),
    },
    {
      titre: "Comportement",
      src: require("../assets/png/articles/comportement.png"),
    },
    {
      titre: "Divers",
      src: require("../assets/png/articles/divers.png"),
    },
  ]);

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

  // 2. Use at the root of your app
  return (
    <Box flex={1} bg="white">
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Items}
        renderItem={({ item }) => (
          <Center py={2}>
            <Link onPress={item.onItemPress}>
              <Box rounded="lg" overflow="hidden">
                <Image w={380} height={120} source={item.src} alt="image" />
                <Center
                  _text={{
                    color: "warmGray.50",
                    fontWeight: "700",
                    fontSize: "lg",
                  }}
                  position="absolute"
                  bottom="0"
                  top="0"
                  right="0"
                  left="0"
                  px="3"
                  py="1.5"
                >
                  {item.titre}
                </Center>
              </Box>
            </Link>
          </Center>
        )}
      />
      <MenuP />
    </Box>
  );
};

export default ArticleScreen;
