import { StyleSheet, FlatList, View } from "react-native";
import React from "react";
import ContactItem from "./ContactItem";

const contacts = [
  {
    id: 1,
    name: "Starred",
  },
  {
    id: 2,
    name: "Mike Hannigan",
    image:
      "https://img.freepik.com/photos-gratuite/gros-plan-homme-souriant-prenant-selfie_23-2149155156.jpg?w=2000",
  },
  {
    id: 3,
    name: "Monica Geller",
    image:
      "https://media.gettyimages.com/id/1337642191/fr/photo/jeune-femme-souriante-et-confiante-ayant-une-conf%C3%A9rence-en-ligne-depuis-son-bureau-%C3%A0-domicile.jpg?s=612x612&w=gi&k=20&c=c-LPW-bqSjSYYwn6LJiYbDGKv29gi9eTsOt-A6S_lxE=",
  },
  {
    id: 4,
    name: "Ross Geller",
    image:
      "https://img.freepik.com/photos-gratuite/smiley-homme-prenant-selfie-exterieur-coup-moyen_23-2149556990.jpg",
  },
  {
    id: 5,
    name: "Dua Lipa",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/240869308-353027939848691-7860055300173171509-n-1632865819.jpg?crop=1xw:0.75xh;center,top&resize=1200:*",
  },
];

const ContactsMenu = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        renderItem={({ item }) => (
          <ContactItem
            name={item.name}
            image={item.image}
            key={item.id}
            onPress={() => console.log(item.name)}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default ContactsMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
