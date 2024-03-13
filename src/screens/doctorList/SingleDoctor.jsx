import { View, Text, ScrollView,Image } from "react-native";
import React from "react";
import { Searchbar, Divider, Card, Button, Avatar,Appbar } from "react-native-paper";
import { useState } from "react";

import {LightTheme} from '../../themes/LightTheme'

import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function SingleDoctor({navigation}) {
  const [searchQuery, setSearchQuery] = useState("");
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
          title="  Doctors of Skin care"
          titleStyle={{
            color: LightTheme.light.HeaderText,
            fontFamily:LightTheme.light.fontRegular, 
            fontSize: 18,
          }}
        />
      
      </Appbar.Header>
       <ScrollView style={{backgroundColor:'#EFFBFF'}}>
      <View style={{ margin: 15 }}>
        

        <Searchbar
          placeholder="Search by Doctor Name or Specialization"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        />
        <Divider style={{ marginTop: 20 }} />

        <Card style={{ marginTop: 20, backgroundColor: "white" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop:20,
              marginRight:20
            }}
          >
            <Card.Content>
              <Text
                variant="titleLarge"
                style={{ color: LightTheme.light.cardText,    fontFamily:LightTheme.light.fontRegular }}
              >
                Hospital Name:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color: LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular}}
              >
                Address:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color:LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular}}
              >
                Phone Number:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color:LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular}}
              >
                Specializations:
              </Text>
            </Card.Content>

            <View>
            <Image source={require("../../assets/gamer.png")} />
            </View>
          </View>

          <Card.Actions>
            <Button
              mode="contained"
              style={{
                width: "100%",
                marginTop: 20,
                marginBottom: 10,
                backgroundColor: LightTheme.light.buttonColor,
                borderRadius: 10,
                
              }}
              onPress={()=>navigation.navigate("bookAppointment")}
            >
              Book An Appointment
            </Button>
          </Card.Actions>
        </Card>
        <Text style={{marginTop:20,marginLeft:10,fontFamily:LightTheme.light.fontBold,color:LightTheme.light.HeaderText}} onPress={()=>navigation.navigate("myAppointments")}>View Appointments</Text>
      </View>
    </ScrollView>
    </>
  );
}
