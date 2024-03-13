import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { Appbar } from 'react-native-paper';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {
    
    Card,
    Button,
  
  } from "react-native-paper";
  import {LightTheme} from '../../themes/LightTheme'
  
export default function Appointments({navigation}) {

  return (
    <ScrollView style={{ backgroundColor: "#EFFBFF" }}>
      <Appbar.Header >
      <FontAwesome
                  name={"chevron-left"}
                  color={LightTheme.light.HeaderText}
                  size={20}
                  style={{marginRight:20,marginLeft:10}}
                  onPress={()=>navigation.navigate("DoctorPage")}
                />
      <Appbar.Content title="My Appointments"  titleStyle={{ color: LightTheme.light.HeaderText, fontFamily: LightTheme.light.fontRegular,fontSize:18 }}/>
    </Appbar.Header>

      <View style={{ margin: 15 }}>
      <Card style={{ marginTop: 20, backgroundColor: "white" }}>
          <View
            style={{
              alignItems: "center",
              justifyContent: "space-between",
              flexDirection: "row",
              marginTop:15,
              marginRight:20,
              marginBottom:15,
            }}
          >
            <Card.Content>
              <Text
                variant="titleLarge"
                style={{ color: LightTheme.light.HeaderText,   fontFamily:LightTheme.light.fontRegular}}
              >
                Patient Name:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color: LightTheme.light.HeaderText,fontFamily:LightTheme.light.fontRegular }}
              >
                Doctor Name:
              </Text>
              <Text
                variant="bodyMedium"
                style={{color: LightTheme.light.HeaderText,  fontFamily:LightTheme.light.fontRegular }}
              >
                Hospital:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color: LightTheme.light.HeaderText, fontFamily:LightTheme.light.fontRegular}}
              >
                Phone Number:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color: LightTheme.light.HeaderText, fontFamily:LightTheme.light.fontRegular}}
              >
                Date:
              </Text>
              <Text
                variant="bodyMedium"
                style={{ color: LightTheme.light.HeaderText, fontFamily:LightTheme.light.fontRegular}}
              >
                Time:
              </Text>
              <Text
                variant="bodyMedium"
                style={{color: LightTheme.light.HeaderText, fontFamily:LightTheme.light.fontRegular}}
              >
                Slot Number:
              </Text>
            </Card.Content>

           
          </View>

          
        </Card>
      </View>
    </ScrollView>
  )
}