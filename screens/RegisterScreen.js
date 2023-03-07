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
} from "native-base";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { getDatabase, ref, set } from "firebase/database";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Asset } from "expo-asset";

const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [username, setUsername] = useState("");

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        navigation.replace("Accueil");
      }
    });

    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    if (password == confPassword) {
      auth;
      createUserWithEmailAndPassword(auth, email.trim(), password.trim())
        .then((userCredentials) => {
          const user = userCredentials.user;
          console.log("Registered with:", user.email);
          const db = getDatabase();
          const userId = auth.currentUser.uid;
          set(ref(db, "users/userID/" + userId), {
            name: username.trim(),
            email: email.trim(),
          });
        })
        .catch((error) => alert(error.message));
    } else {
      alert("Les mots de passe ne correspondent pas");
    }
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
    <Center flex={1} bg="sunglow">
      <KeyboardAwareScrollView
        enableOnAndroid
        extraHeight={100}
        extraScrollHeight={10}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        flex={1}
      >
        <Center pt={70} w={400}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <VStack
              w="90%"
              bg="white:alpha.60"
              space={3}
              px={10}
              py={7}
              flex={1}
              borderRadius="xl"
            >
              <Text
                color="darkPurple"
                fontSize="lg"
                fontFamily="QuicksandSemiBold"
              >
                Nom d'utilisateur
              </Text>
              <Input
                value={username}
                onChangeText={(text) => setUsername(text)}
                variant="inscription"
                placeholder="exemple"
              />
              <Text
                color="darkPurple"
                fontSize="lg"
                fontFamily="QuicksandSemiBold"
              >
                Adresse mail
              </Text>
              <Input
                value={email}
                onChangeText={(text) => setEmail(text)}
                variant="inscription"
                placeholder="exemple@gmail.com"
              />
              <Text
                color="darkPurple"
                fontSize="lg"
                fontFamily="QuicksandSemiBold"
              >
                Mot de passe
              </Text>
              <Input
                value={password}
                onChangeText={(text) => setPassword(text)}
                variant="inscription"
                placeholder="Mot de passe"
              />
              <Text
                color="darkPurple"
                fontSize="lg"
                fontFamily="QuicksandSemiBold"
              >
                Confirmer le mot de passe
              </Text>
              <Input
                value={confPassword}
                onChangeText={(text) => setConfPassword(text)}
                variant="inscription"
                placeholder="Confirmer le mot de passe"
              />
              <Button
                onPress={handleSignUp}
                alignSelf="center"
                w={120}
                size="md"
                colorScheme="red"
                _text={{
                  fontSize: "lg",
                  fontFamily: "BalooBold",
                }}
                variant="rounded"
              >
                Valider
              </Button>
              <Link alignSelf="center">Mot de passe oublié ?</Link>
            </VStack>
          </TouchableWithoutFeedback>
        </Center>
      </KeyboardAwareScrollView>
    </Center>
  );
};

export default RegisterScreen;
