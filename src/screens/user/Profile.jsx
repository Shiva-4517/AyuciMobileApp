import { View, Text, Image,StyleSheet,ScrollView } from "react-native";
import React from "react";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { Appbar, Menu } from "react-native-paper";
import { LightTheme } from "../../themes/LightTheme";

export default function Profile({ navigation }) {
  return (
    <>
      <Appbar.Header>
        <FontAwesome
          name={"chevron-left"}
          color={LightTheme.light.HeaderText}
          size={20}
          style={{ marginRight: 20, marginLeft: 10 }}
          onPress={() => navigation.navigate("HomePage")}
        />
        <Appbar.Content
          title="My Profile"
          titleStyle={{
            color:LightTheme.light.HeaderText,
            fontFamily: LightTheme.light.fontRegular,
            fontSize: 18,
          }}
        />
      </Appbar.Header>

      <View style={{ backgroundColor: "white", height: "100%" }}>
        <View
          style={{
            backgroundColor: LightTheme.light.buttonColor,
            height: 170,
          }}
        ></View>
        <View
          style={{
            borderColor: "white",
            backgroundColor: "white",
            borderWidth: 2,
            width: 145,
            height: 145,
            borderRadius: 80,
            alignSelf: "center",
            padding: 6,
            top: -80,
          }}
        >
          <Image source={require("../../assets/man.png")} />
        </View>

        <View style={{ marginLeft: 30 }}>
          <Text
            style={{ fontFamily: LightTheme.light.fontRegular, fontSize: 18 }}
          >
            Name:Abc
          </Text>
          <Text
            style={{ fontFamily: LightTheme.light.fontRegular, fontSize: 18 }}
          >
            Email:Abvc@gmail.com
          </Text>
        </View>

        <View style={{ alignItems:'left',justifyContent:'space-evenly',marginLeft:30,position:'absolute',bottom:180}}>
          <Text style={style.LinksText} onPress={()=>navigation.navigate("aboutPage")}>About</Text>
          <Text style={style.LinksText} onPress={()=>navigation.navigate("termsPage")}>Terms & Conditions</Text>
          <Text style={style.LinksText} onPress={()=>navigation.navigate("privacyPage")}>Privacy Policy</Text>
        
       
          
        </View>
      </View>
    </>
  );
}


const style  = StyleSheet.create({
  LinksText:{
    fontSize:15,
    fontFamily:LightTheme.light.fontBold,
    color:LightTheme.light.HeaderText,
    
  }
})