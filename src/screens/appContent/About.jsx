import { View, Text, ScrollView } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Appbar, Menu } from "react-native-paper";
import { LightTheme } from "../../themes/LightTheme";

export default function About({ navigation }) {
  return (
    <ScrollView style={{ backgroundColor: "#EFFBFF" }}>
      <Appbar.Header>
        <FontAwesome
          name={"chevron-left"}
          color={LightTheme.light.HeaderText}
          size={20}
          style={{ marginRight: 20, marginLeft: 10 }}
          onPress={() => navigation.navigate("profilePage")}
        />
        <Appbar.Content
          title="About Us"
          titleStyle={{
            color: LightTheme.light.HeaderText,
            fontFamily: LightTheme.light.fontRegular,
            fontSize: 18,
          }}
        />
      </Appbar.Header>

      <Text style={{margin:15,fontFamily:LightTheme.light.fontRegular}}>
        Hospital information software that is state-of-the-art, productive, and
        economical offers data that is targeted, useful, and insightful. is a
        one-stop shop that offers patients cutting-edge services and can be
        customized and implemented into any hospital or healthcare facility.
        Having been in the healthcare sector for over ten years, we are fully
        aware of the obligations placed on us. A team of highly skilled
        professionals developed our healthcare software, and we are aware of the
        various requirements that each client has. Our specialty is
        customization and integration, and we can assist you in that area as
        well.
      </Text>
    </ScrollView>
  );
}
