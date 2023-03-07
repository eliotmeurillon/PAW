import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/core";
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Stagger,
  Text,
  useDisclose,
} from "native-base";

const MenuP = (props) => {
  const navigation = useNavigation();

  const Accueil = () => {
    navigation.replace("Accueil");
  };

  const Cours = () => {
    navigation.replace("Cours");
  };

  const Article = () => {
    navigation.replace("Articles");
  };

  const { isOpen, onToggle } = useDisclose();
  return (
    <Box position="absolute" bottom={-30} left={-30}>
      <Box alignItems="flex-start" left={8} minH="220">
        <Stagger
          visible={isOpen}
          initial={{
            opacity: 0,
            scale: 0,
            translateY: 34,
          }}
          animate={{
            translateY: 0,
            scale: 1,
            opacity: 1,
            transition: {
              type: "spring",
              mass: 0.8,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
          exit={{
            translateY: 34,
            scale: 0.5,
            opacity: 0,
            transition: {
              duration: 100,
              stagger: {
                offset: 30,
                reverse: true,
              },
            },
          }}
        >
          <HStack alignItems="baseline">
            <IconButton
              onPress={Accueil}
              mb="4"
              variant="solid"
              bg="indigo.500"
              colorScheme="indigo"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="location-pin"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            />
            <Text pl={2}>Accueil</Text>
          </HStack>
          <HStack alignItems="baseline">
            <IconButton
              onPress={Cours}
              mb="4"
              variant="solid"
              bg="yellow.400"
              colorScheme="yellow"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="6"
                  name="microphone"
                  color="warmGray.50"
                />
              }
            />
            <Text pl={2}>Mes Cours</Text>
          </HStack>
          <HStack alignItems="baseline">
            <IconButton
              onPress={Article}
              mb="4"
              variant="solid"
              bg="red.400"
              colorScheme="red"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialCommunityIcons}
                  _dark={{
                    color: "warmGray.50",
                  }}
                  size="6"
                  name="video"
                  color="warmGray.50"
                />
              }
            />
            <Text pl={2}>Articles</Text>
          </HStack>
          <HStack alignItems="baseline">
            <IconButton
              onPress={Article}
              mb="4"
              variant="solid"
              bg="teal.500"
              colorScheme="teal"
              borderRadius="full"
              icon={
                <Icon
                  as={MaterialIcons}
                  size="6"
                  name="photo-library"
                  _dark={{
                    color: "warmGray.50",
                  }}
                  color="warmGray.50"
                />
              }
            />
            <Text pl={2}>PaWorld</Text>
          </HStack>
        </Stagger>
      </Box>
      <HStack alignItems="center">
        <IconButton
          px={10}
          py={10}
          variant="solid"
          borderRadius="full"
          onPress={onToggle}
          bg="darkPurple"
          icon={
            <Icon
              as={MaterialCommunityIcons}
              size="6"
              name="menu"
              color="warmGray.50"
              _dark={{
                color: "warmGray.50",
              }}
            />
          }
        />
      </HStack>
    </Box>
  );
};

export default MenuP;
