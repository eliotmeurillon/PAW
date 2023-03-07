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
  SectionList,
  Heading,
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import MenuP from "../menu";

const CoursScreen = () => {
  const navigation = useNavigation();

  const data = [
    {
      title: "En cours",
      data: ["Assis", "Couché"],
    },
    {
      title: "À venir",
      data: [
        "Donner la patte",
        "Faire le beau",
        "Tourner sur soi",
        "Va là-bas",
        "On y va",
        "Va chercher",
        "Saute",
      ],
    },
    {
      title: "Terminé",
      data: ["Au pied", "Pas bouger"],
    },
  ];

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
      <SectionList
        sections={data}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Pressable onPress={() => navigation.push("Cours-Assis")}>
            <Center py="4" bg="RoyalPurple">
              {item}
            </Center>
          </Pressable>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Center>
            <Heading fontSize="xl" mt="8" pb="4">
              {title}
            </Heading>
          </Center>
        )}
      />
      <MenuP />
    </Box>
  );
};

export default CoursScreen;
