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
  IconButton,
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";
import ArticlesNutrition from "../components/ArticlesNutrition";
import { Entypo } from "@expo/vector-icons";

const ArticleSoinScreen = () => {
  const navigation = useNavigation();

  const back = () => {
    navigation.goBack();
  };

  const [Items, setItems] = useState([
    {
      titre: "Mon compte",
      color: "black",
      onItemPress: () => navigation.replace("Accueil"),
    },
    {
      titre: "Ajouter un chien",
      color: "black",
      onItemPress: "onPress={() => push('')}",
    },
    { titre: "Aide", color: "black", onItemPress: "onPress={() => push('')}" },
    {
      titre: "À propos",
      color: "black",
      onItemPress: "onPress={() => push('')}",
    },
    {
      titre: "Déconnexion",
      color: "red.500",
      onItemPress: () =>
        auth
          .signOut()
          .then(() => {
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: "Connexion",
                },
              ],
            });
          })
          .catch((error) => alert(error.message)),
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
      <HStack>
        <Link onPress={back} alignItems="baseline">
          <Entypo as={Entypo} name="chevron-left" size={20}></Entypo>
          <Text bold underline>
            Retour
          </Text>
        </Link>
      </HStack>
      <ArticlesNutrition />
    </Box>
  );
};

export default ArticleSoinScreen;
