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
  Avatar,
  Badge,
  Stagger,
  useDisclose,
  IconButton,
  Icon,
  Card,
} from "native-base";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import { Keyboard, Platform } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/core";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import {
  getDatabase,
  onValue,
  ref as refd,
  set,
  update,
} from "firebase/database";
import { auth } from "../firebase";
import * as ImagePicker from "expo-image-picker";
import MenuP from "../menu";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { ProgressChart } from "react-native-chart-kit";
import { Asset } from "expo-asset";
import { updateProfile } from "firebase/auth";

const HomeScreen = () => {
  const [image, setImage] = useState(null);
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let photoURL = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(photoURL);

    if (!photoURL.cancelled) {
      // setPhotoURL(photoURL.uri);
      // setImage(result.uri);
      const storageRef = ref(storage, "appimages/" + Username);

      const img = await fetch(photoURL.uri);
      const bytes = await img.blob();

      // const photoURL = await getDownloadURL(storageRef);

      await uploadBytes(storageRef, bytes);
      await update(ref(db, "users/userID/" + userId), {
        photoURL: { bytes },
      });
    }
  };

  const navigation = useNavigation();

  const [Username, setUsername] = useState("");
  const db = getDatabase();

  const storage = getStorage();

  const userId = auth.currentUser.uid;

  const imageURI = Asset.fromModule(require("../assets/png/anonyme.png")).uri;

  const [photoURL, setPhotoURL] = useState(imageURI);

  useEffect(() => {
    const Ref = refd(db, "users/userID/" + userId + "/dogname");
    onValue(Ref, (snapshot) => {
      if (!snapshot.exists()) {
        navigation.replace("Inscription-chien");
        const userData = snapshot.val();
        console.log("exists!", userData);
      }
    });
    if (userId?.photoURL) {
      console.log(photoURL);
      setPhotoURL(userId.photoURL);
    }
    const usernameRef = refd(db, "users/userID/" + userId + "/name");
    onValue(usernameRef, (snapshot) => {
      const data = snapshot.val();
      setUsername(data);
    });
  }, [userId]);

  const datachart = {
    assis: [0.8],
    couché: [0.5],
  };

  const Cours = (props) => {
    const pourcentage = Math.round(props.value * 100) + "%";
    return (
      <Center
        _text={{
          color: "black",
          fontSize: "md",
        }}
        position="absolute"
        bottom="0"
        top="0"
        right="0"
        left="0"
      >
        {pourcentage}
      </Center>
    );
  };

  const chartConfig = {
    backgroundGradientFrom: "#ffffff",
    backgroundGradientTo: "#ffffff",
    color: (opacity = 1) => `rgba(255, 62, 65, ${opacity})`,
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
    <Center flex={1} bg="white">
      <VStack>
        <Text>bonjour {Username} !</Text>
        <IconButton
          colorScheme="red"
          onPress={pickImage}
          mb={-10}
          mr={-1}
          zIndex={1}
          alignSelf="flex-end"
          variant="solid"
          borderRadius="full"
          _icon={{
            color: "white",
            as: MaterialCommunityIcons,
            name: "pencil",
            size: "sm",
          }}
        />
        <Avatar bg="black" size={130} source={{ uri: photoURL }}></Avatar>
      </VStack>
      <HStack space={20}>
        <VStack alignItems="center">
          <IconButton
            icon={
              <Icon as={MaterialCommunityIcons} name="chart-timeline-variant" />
            }
          ></IconButton>
          <Text>Carnet de santé</Text>
        </VStack>
        <VStack alignItems="center">
          <IconButton
            icon={<Icon as={MaterialCommunityIcons} name="email-outline" />}
          ></IconButton>
          <Text>Messages</Text>
        </VStack>
      </HStack>
      <HStack>
        <VStack>
          <Center>
            <Center>
              <ProgressChart
                data={datachart.assis}
                width={100}
                height={100}
                strokeWidth={10}
                radius={30}
                chartConfig={chartConfig}
                hideLegend={true}
              />
              <Cours value={datachart.assis} />
            </Center>
            <Text>Assis</Text>
          </Center>
        </VStack>
        <VStack>
          <Center>
            <Center>
              <ProgressChart
                data={datachart.couché}
                width={100}
                height={100}
                strokeWidth={10}
                radius={30}
                chartConfig={chartConfig}
                hideLegend={true}
              />
              <Cours value={datachart.couché} />
            </Center>
            <Text>Couché</Text>
          </Center>
        </VStack>
      </HStack>
      <MenuP />
    </Center>
  );
};

export default HomeScreen;
