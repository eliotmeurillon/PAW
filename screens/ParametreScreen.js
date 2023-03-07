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
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { auth } from "../firebase";

const ParametreScreen = () => {
  const navigation = useNavigation();

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
      <FlatList
        keyExtractor={(item, index) => index.toString()}
        data={Items}
        renderItem={({ item }) => (
          <Box
            borderBottomWidth="1"
            _dark={{
              borderColor: "gray.600",
            }}
            borderColor="coolGray.200"
            pl="4"
            pr="5"
            py="4"
          >
            <VStack>
              <Link onPress={item.onItemPress}>
                <Text fontSize="md" fontFamily="Raleway" color={item.color}>
                  {item.titre}
                </Text>
              </Link>
            </VStack>
          </Box>
        )}
      />
    </Box>
  );
};

export default ParametreScreen;
