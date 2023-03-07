import React, { Component } from "react";
import {
  Switch,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import * as Animatable from "react-native-animatable";
import Collapsible from "react-native-collapsible";
import Accordion from "react-native-collapsible/Accordion";
import { HStack, Link } from "native-base";

const BACON_IPSUM =
  "Bacon ipsum dolor amet chuck turducken landjaeger tongue spare ribs. Picanha beef prosciutto meatball turkey shoulder shank salami cupim doner jowl pork belly cow. Chicken shankle rump swine tail frankfurter meatloaf ground round flank ham hock tongue shank andouille boudin brisket. ";

const CONTENT = [
  {
    title: "Les jeux pour un jeune chiot",
    content:
      "Votre chiot est encore tout petit et vous ne savez pas quel jeu opter pour lui ? 1- Le jeu de la corde Ce jeu est parfait pour les chiots puisque lorsqu’ils sont petit.e.s, ils mâchent naturellement toutes sortes d’objets qu’il trouve. Pour éviter cela, faites le jouer avec une corde et vous pouvez même en profiter pour continuer son éducation en lui apprenant à lâcher la corde lorsque vous lui demanderez. 2- Le jeu du lancé Le lancé de balles est sûrement le jeu le plus connu. Mais pour vos chiots, il ne faut pas forcément commencer avec une balle, mais avec un objet adapté à votre chiot. Il faut y aller petit à petit et ne pas envoyer l’objet trop loin au début (pas plus de 4 mètres). Ce jeu peut aussi, vous aider à apprendre à votre chiot à répondre aux ordres 'Vas cherché' et 'Lâche'. (Vous trouverez aussi des cours pour lui enseigner à respecter ses ordres.). 3- Les jeux d'intelligences À défaut d’opter pour des jeux qui dépensent physiquement votre petit compagnon. Vous pouvez aussi lui apprendre à réfléchir en cachant des friandises sous des gobelets ou une serviette. Les exercices peuvent varier ! ",
  },
  {
    title: "Fréquence de sortie",
    content:
      "Combien de fois par jour devez-vous sortir votre chien ? Il faut régulièrement sortir son/sa chien.ne afin qu’il puisse se dépenser, mais aussi pour faire ses besoins. Dans l’idéal, il est conseillé de faire 4 sorties par jour : matin , midi, après-midi, soir . Les 4 ballades peuvent varier en fonction de vos disponibilités. La durée d’une sortie doit être au minimum à 20 minutes, mais cette durée change en fonction de l'âge de votre chiot. Pour savoir combien de temps le sortir il y a une technique très simple : Il faut convertir en minutes l'âge de votre chiot en semaine, par exemple si votre chiot à 15 semaines, il faut effectuer à votre chiot une promenade d'environ 15 minutes. Vous devez tout de même faire attention à la condition physique de votre chiot et s’assurer qu’il ne se fatigue pas trop vite au cours de votre balade. Si c’est le cas songé à établir des balades plus courtes. Si le chien associe le fait de faire ses besoins à la fin de la promenade, il risque de se retenir pour faire durer la balade le plus longtemps possible, ce qui n'est pas bon pour sa santé ! une promenade de 1 à 2 heures : une à deux fois par semaine, pour permettre au chien de se dépenser. ",
  },
  {
    title: "Une bonne promenade",
    content:
      "Le saviez-vous ? Dans certaines villes de France, des arrêtés municipaux existent exigeant la marche en laisse sous peine d’une amende de 1re classe (jusqu’à 33 €). Vivre en ville ne dispense pas de balades dans les rues urbaines. Vous pouvez emmener votre chien dans un parc accessible aux chien.ne.s. N’oubliez pas de prendre un sac à crottes jetables pour ramasser ses défécations. Profitez du week-end et de votre temps libre, pour emmener votre chien pour une promenade de quelques heures à la campagne, à la forêt ou à la plage. Attention ! La laisse peut-être obligatoire même à la campagne. Veillez à ce que votre compagnon ne détruise pas les champs et les plantations. Votre chien n’apprécie pas le changement des habitudes. Lors de son apprentissage, dès les premières promenades, apprenez-lui à respecter sa place. Votre chien ne doit pas se sentir en position de supériorité et il ne doit pas guider la promenade. Votre compagnon doit comprendre et réagir à vos déplacements. Si vous vous arrêtez, lui aussi doit s'arrêter. Il doit marcher à côté de vous. Gardez des récompenses avec vous et n’hésitez pas à lui en donner au cours de la promenade. Les chances que votre chien apprenne plus vite augmentent considérablement. ",
  },
];

const SELECTORS = [
  {
    title: "First",
    value: 0,
  },
  {
    title: "Third",
    value: 2,
  },
  {
    title: "None",
  },
];

export default class ArticlesJeux extends Component {
  state = {
    activeSections: [],
    collapsed: true,
    multipleSelect: false,
  };

  toggleExpanded = () => {
    this.setState({ collapsed: !this.state.collapsed });
  };

  setSections = (sections) => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };

  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section.title}</Text>
      </Animatable.View>
    );
  };

  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[
          styles.content,
          isActive ? styles.activecontent : styles.inactivecontent,
        ]}
        transition="backgroundColor"
      >
        <Animatable.Text>{section.content}</Animatable.Text>
      </Animatable.View>
    );
  }

  render() {
    const { multipleSelect, activeSections } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{ paddingTop: 5 }}>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 15,
  },
  title: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "300",
  },
  header: {
    borderRadius: 15,
    backgroundColor: "#F5FCFF",
    padding: 20,
    marginTop: 20,
  },
  headerText: {
    color: "white",
    textAlign: "left",
    fontFamily: "QuicksandBold",
    fontSize: 16,
  },
  content: {
    // marginTop: -10,
    // top: -20,
    padding: 20,
    backgroundColor: "white",
    overflow: "hidden",
  },
  active: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FF3E41",
  },
  inactive: {
    backgroundColor: "#FF3E41",
  },
  activecontent: {
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    backgroundColor: "#f0f0f0",
  },
  inactivecontent: {
    backgroundColor: "#FF3E41",
  },
  selectors: {
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
  selector: {
    backgroundColor: "#F5FCFF",
    padding: 10,
  },
  activeSelector: {
    fontWeight: "bold",
  },
  selectTitle: {
    fontSize: 14,
    fontWeight: "500",
    padding: 10,
  },
  multipleToggle: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 30,
    alignItems: "center",
  },
  multipleToggle__title: {
    fontSize: 16,
    marginRight: 8,
  },
});
