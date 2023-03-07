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
    title: "Quel shampooing choisir ?",
    content:
      "Vous ne savez pas quel shampooing vous devez utiliser pour votre chien ? Si vous ne connaissez pas le type de peau de votre chien, il est préférable de le demander directement à votre vétérinaire. Votre chien peut avoir deux types de peau : soit grasse soit sèche. Si votre chien a une peau grasse, cela est dû au fait qu’il produit une quantité de sébum importante. Ce film joue un rôle important dans la protection extérieure de votre chien.ne. Il vaut mieux opter pour un shampoing à effet astringent. Dans le cas où votre chien.ne à la peau sèche, il est conseillé d’utiliser un shampooing contenant une huile végétale pour hydrater la peau. Le choix du shampooing doit être fait en fonction de la spécificité de la peau et de ses poils (s'il a des poils longs ou courts). Il existe aussi des shampooings pour chien en fonction des différents problèmes de peau ou poil qui existent (anti-démangeaison, anti perte de poil, anti-puces, ...).",
  },
  {
    title: "Mon chien a des tiques",
    content:
      "Comment traiter les tiques de votre chien ? Les tiques sont présentes tout au long de l’année, mais la période qui présente le plus de risque est au printemps et en automne. Les tiques peuvent provoquer plusieurs maladies : Maladie de lyme est une maladie qui peut toucher les hommes comme les chiens et dont il n'existe pas encore de vaccin La piroplasmose est une maladie qui fait perdre les globules rouges de votre chien. Elle peut provoquer la mort de votre chien en quelques jours si elle n’est pas traitée . L’ehrlichiose est une maladie du même style que la piroplasmose, mais en plus dangereuse puisqu’elle provoque la mort de votre chien encore plus rapidement. Pour protéger votre chien des tiques, il y a plusieurs traitements qui sont efficaces : le spray, le collier , le shampoing , la pipette Si votre chien possède un ou plusieurs tiques, il faut l'enlever le plus rapidement possible avec un crochet à tique que vous pouvez obtenir chez votre vétérinaire , c’est l'outil le mieux adapté. Pour trouver les tiques sur votre chien, il faut bien regarder sur sa tête car c’est l’endroit ou elle se trouve le plus souvent. ",
  },
  {
    title: "Quand aller chez le vétérinaire ?",
    content:
      "A quelle fréquence faut-il aller chez le vétérinaire ? La fréquence de visite chez le vétérinaire varie en fonction de l'âge de votre chien.ne, des maladies qu’iel rencontre et de l'environnement dans lequel iel vit. Pour les chiots de moins de 1 an, il faut y aller tous les mois jusqu’à ses 1 an. Pour les chiens de plus de 1 an, il faut au moins y aller 1 fois par an afin d'effectuer les rappels des vaccins. Si votre chien vit avec un jeune enfant, il est préférable de s'y rendre 2 fois par an. Si votre chien change de comportement ou si il mange moins, il ne faut surtout pas hésiter et directement aller chez le vétérinaire. Les fréquences de visite chez le vétérinaire sont différentes en fonction de chaque chien.ne mais en cas de problème votre vétérinaire vous informera sur le nombre de visites à effectuer. ",
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

export default class ArticlesSoin extends Component {
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
