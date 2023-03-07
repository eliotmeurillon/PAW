import React, { useEffect, useState } from "react";
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
  Icon,
  IconButton,
} from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getDatabase, ref, set, update } from "firebase/database";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Asset } from "expo-asset";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const DogsignScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [dogusername, setDogUsername] = useState("");

  const navigation = useNavigation();

  const handleDogSignUp = () => {
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    update(ref(db, "users/userID/" + userId), {
      dogname: dogusername.trim(),
    });
    navigation.push("Inscription-chien1");
  };

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
    <Center flex={1} bg="red.500">
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={100}
        extraScrollHeight={10}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <Center pt={250} w={400}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <VStack>
              <Center>
                <Text
                  color="white"
                  fontSize="32"
                  fontFamily="QuicksandSemiBold"
                >
                  Bienvenue sur Paw !
                </Text>
                <Text textAlign="center" color="white" fontSize="lg" pt={100}>
                  Pour commencer, saisissez le nom {"\n"} de votre chien :
                </Text>
                <Input
                  mt={4}
                  px={100}
                  value={dogusername}
                  onChangeText={(text) => setDogUsername(text)}
                  variant="inscription"
                  placeholder="Sally"
                />
                <IconButton
                  onPress={handleDogSignUp}
                  mt={4}
                  px={5}
                  colorScheme="yellow"
                  variant="solid"
                  borderRadius="full"
                  icon={<Icon as={AntDesign} name="arrowright" size="sm" />}
                />
              </Center>
            </VStack>
          </TouchableWithoutFeedback>
        </Center>
      </KeyboardAwareScrollView>
    </Center>
  );
};

export default DogsignScreen;
