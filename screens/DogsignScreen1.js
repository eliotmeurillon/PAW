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
import {
  getDatabase,
  onValue,
  ref,
  ref as refd,
  set,
  update,
} from "firebase/database";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { Asset } from "expo-asset";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import DateTimePicker from "@react-native-community/datetimepicker";

const DogsignScreen1 = () => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  const PawDatePicker = (props) => {
    return (
      <View>
        <View>
          <Button
            borderRadius="full"
            onPress={showDatepicker}
            title="Show date picker!"
          >
            JJ/MM/YY
          </Button>
        </View>
        <View>
          <Button
            mt={2}
            borderRadius="full"
            onPress={showTimepicker}
            title="Show time picker!"
          >
            HH/MM
          </Button>
        </View>
        <Text color="white">Séléctionné: {date.toLocaleString()}</Text>
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode={mode}
            is24Hour={true}
            onChange={onChange}
          />
        )}
      </View>
    );
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [dogusername, setDogUsername] = useState("");

  const navigation = useNavigation();

  const handleDogSignUp = () => {
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    update(ref(db, "users/userID/" + userId), {
      dogbirth: date.toLocaleString(),
    });
  };

  useEffect(() => {
    const db = getDatabase();
    const userId = auth.currentUser.uid;
    const usernameRef = refd(db, "users/userID/" + userId + "/dogname");
    onValue(usernameRef, (snapshot) => {
      const data = snapshot.val();
      setDogUsername(data);
    });
  }, []);

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
        <Center pt={350} w={400}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <VStack>
              <Center>
                <Text color="white" fontSize="xl" fontFamily="QuicksandBold">
                  Quel est l'âge de {dogusername} ?
                </Text>
                <Text textAlign="center" color="white" fontSize="md" pt={50}>
                  Saisissez sa date de naissance :
                </Text>
                <PawDatePicker></PawDatePicker>
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

export default DogsignScreen1;
