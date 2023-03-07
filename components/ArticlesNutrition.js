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
    title: "Aliments à éviter 1/2",
    content:
      "Voici une liste non exhaustive d’aliments à éviter de donner à votre chien - 1/2 Avocat : contient un élément toxique appelé persine qui endommage les organes internes des animaux. Aliments avariés : la moisissure des produits avariés contient des toxines comme la pénicilline qui provoque des crises et des tremblements qui peuvent aller jusqu'à plusieurs jours. Faites attention avec votre bac à compost. Ail : l’ail est moins toxique que les oignons. Mais en grande quantité, ils provoquent des intoxications alimentaires. Champignons : les champignons peuvent être empoisonnés et comme pour les humains, ils sont dangereux pour les chien.ne.s. Ils causent des problèmes de foie et des dérèglements neurologiques. Si votre chien.ne a mangé des champignons, contactez votre vétérinaire. Les produits laitiers : comme les hommes, certains chiens sont intolérants au lactose. Les chiens tolèrent mieux les produits laitiers fermentés, car ils contiennent moins de lactose. ",
  },
  {
    title: "Aliments à éviter 2/2",
    content:
      "Voici une liste non exhaustive d’aliments à éviter de donner à votre chien - 1/2 Noix de muscade : aliment hallucinogène quand elle est consommée en très grande quantité. Oignons : les oignons détruisent les globules rouges dans le sang. En très grande quantité, ils deviennent un poison. Les oignons causent des vomissements, des diarrhées, une perte d’appétit, une augmentation du rythme cardiaque et une augmentation de la température corporelle. Os cuits : Les os crus ne sont pas dangereux, ils lavent les dents de votre chien.ne. Cependant, les os cuits deviennent tranchants et cassants. Ils peuvent perforer les parois de l’estomac et des intestins. Pâte à pain : la pâte à pain va lever dans l’estomac de votre chien.ne à cause de sa température corporelle. Pendant que la pâte lève, de l’alcool se produit. Vous pouvez donner du pain à votre chien.ne, une fois que celui-ci est rassis. ",
  },
  {
    title: "Aliments dangereux",
    content:
      "Voici une liste non exhaustive d’aliments à éviter de donner à votre chien - 1/2 Antigel pour voiture : Les chiens et les chats trouvent que l’antigel à très bon goût. Mais il suffit d’une quantité infime pour que votre compagnon soit atteint et il faut au plus vite pour lui sauver la vie. Les premiers symptômes, comme les vomissements, soif et urination excessive, perte d’équilibre et état déprimé, apparaissent dès les 30 premières minutes. 12h plus tard, votre chien ira mieux pendant quelques jours avant que ses reins ne commencent à défaillir. Les vomissements peuvent reprendre mais la soif et l’urination auront disparu. Si les reins ne sont pas remplacés ou sauvés à temps, votre chien risque de perdre la vie Bonbons : ils contiennent du xylitol qui est dangereux pour les animaux de compagnie. Il cause des dommages au foie. Pour certains chiens, ils sont mortels. Chocolat : si vous donnez une trop grande quantité de chocolat à votre chien.ne, iel va devenir excité.e et va devenir hyperactif. De plus, la théobromine contenue dans le chocolat augmente la fréquence cardiaque de votre chien.ne et la rend irrégulière. Le chocolat est un vrai poison pour les chiens. 50g de chocolat peuvent tuer un chien de moins de 6kg. Les symptômes comme l’urination et la soif excessive vont apparaître dans les heures suivant l’ingurgitation et la mort survient dans les 24h. Pêches, Poires, Prunes, Cerises, Abricots et Raisin : les pépins/noyaux des fruits contiennent du glucose cyanogénique qui peut causer un empoisonnement.",
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

export default class ArticlesNutrition extends Component {
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
