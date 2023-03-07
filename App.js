import React from "react";
import { LogBox } from "react-native";
import {
  NativeBaseProvider,
  extendTheme,
  Button,
  CircleIcon,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/core";
import AppLoading from "expo-app-loading";
import { useFonts } from "expo-font";
import ConnexionScreen from "./screens/ConnexionScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DogsignScreen from "./screens/DogsignScreen";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import ParametreScreen from "./screens/ParametreScreen";
import ArticleScreen from "./screens/ArticleScreen";
import CoursScreen from "./screens/CoursScreen";
import ArticleNutritionScreen from "./screens/ArticleNutritionScreen";
import ArticleSoinScreen from "./screens/ArticleSoinScreen";
import ArticleJeuxScreen from "./screens/ArticleJeuxScreen";
import CoursAssisScreen from "./screens/CoursAssisScreen";
import DogsignScreen1 from "./screens/DogsignScreen1";

const Stack = createNativeStackNavigator();

const theme = extendTheme({
  components: {
    Input: {
      variants: {
        inscription: ({ colorScheme }) => {
          return {
            bg: "white",
            rounded: "full",
          };
        },
      },
    },

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
    RoyalPurple: "#8660A9",
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
    amber: {
      400: "#d97706",
    },
  },
});

export default function App() {
  LogBox.ignoreLogs(["Setting a timer"]);
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

  // 2. Use at the root of your app
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <Stack.Navigator>
          <Stack.Screen
            options={{ headerShown: false }}
            name="Connexion"
            component={ConnexionScreen}
          />
          <Stack.Screen
            options={{
              title: "Login",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            }}
            name="Login"
            component={LoginScreen}
          />
          <Stack.Screen
            options={{
              title: "Register",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            }}
            name="Register"
            component={RegisterScreen}
          />
          <Stack.Screen
            options={({ navigation: { navigate } }) => ({
              headerRight: () => (
                <CircleIcon onPress={() => navigate("Parametre")} />
              ),
              title: "Accueil",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            })}
            name="Accueil"
            component={HomeScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Inscription-chien"
            component={DogsignScreen}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="Inscription-chien1"
            component={DogsignScreen1}
          />
          <Stack.Screen
            options={{
              title: "Articles",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            }}
            name="Articles"
            component={ArticleScreen}
          />
          <Stack.Screen
            options={({ navigation: { goBack } }) => ({
              headerBackVisible: false,
              headerRight: () => <CircleIcon onPress={() => goBack()} />,
              title: "Articles",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            })}
            name="Article-Nutrition"
            component={ArticleNutritionScreen}
          />
          <Stack.Screen
            options={({ navigation: { goBack } }) => ({
              headerBackVisible: false,
              headerRight: () => <CircleIcon onPress={() => goBack()} />,
              title: "Articles",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            })}
            name="Article-Soin"
            component={ArticleSoinScreen}
          />
          <Stack.Screen
            options={({ navigation: { goBack } }) => ({
              headerBackVisible: false,
              headerRight: () => <CircleIcon onPress={() => goBack()} />,
              title: "Articles",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            })}
            name="Article-Jeux"
            component={ArticleJeuxScreen}
          />
          <Stack.Screen
            options={{
              title: "Mes Cours",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            }}
            name="Cours"
            component={CoursScreen}
          />
          <Stack.Screen
            options={{
              title: "Mes Cours",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            }}
            name="Cours-Assis"
            component={CoursAssisScreen}
          />
          <Stack.Screen
            options={({ navigation: { goBack } }) => ({
              headerBackVisible: false,
              headerRight: () => <CircleIcon onPress={() => goBack()} />,
              title: "Paramètres",
              headerStyle: { backgroundColor: "#FFC929" },
              headerShadowVisible: false,
              headerTintColor: "#FEFAEB",
              headerTitleStyle: { fontWeight: "bold" },
            })}
            name="Parametre"
            component={ParametreScreen}
          />
        </Stack.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}
