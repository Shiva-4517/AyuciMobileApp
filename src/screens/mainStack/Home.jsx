import { View, Text, StyleSheet, ScrollView ,Image} from "react-native";
import { NavigationContainer,useNavigation,DrawerActions } from "@react-navigation/native";
import React from "react";
import {
  Searchbar,
  Divider,
  Card,
  Button,
  Avatar,
  Icon,
  MD3Colors,
} from "react-native-paper";
import { useState } from "react";
import SelectDropdown from "react-native-select-dropdown";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {LightTheme} from '../../themes/LightTheme'


export default function HomePage({ navigation }) {
  const [searchQuery, setSearchQuery] = useState("");
  const countries = ["Egypt", "Canada", "Australia", "Ireland"];

  return (
    <ScrollView style={{ backgroundColor: "#EFFBFF" }}>
      <View style={{ marginTop: 70, margin: 15 }}>
        
        <View style={{alignItems:'center',justifyContent:'space-between',flexDirection:'row'}}>
        <SelectDropdown
            data={countries}
            // defaultValueByIndex={1}
            // defaultValue={'England'}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={"Select country"}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdown2BtnStyle}
            buttonTextStyle={styles.dropdown2BtnTxtStyle}
            renderDropdownIcon={(isOpened) => {
              return (
                <FontAwesome
                  name={isOpened ? "chevron-up" : "chevron-down"}
                  color={ LightTheme.light.HeaderText}
                  size={18}
                />
              );
            }}
            dropdownIconPosition={"right"}
            dropdownStyle={styles.dropdown2DropdownStyle}
            rowStyle={styles.dropdown2RowStyle}
            rowTextStyle={styles.dropdown2RowTxtStyle}
          />
          <View>
        <Text style={{fontWeight:'700',color:LightTheme.light.HeaderText}}onPress={()=>navigation.navigate('profilePage')}>View Profile</Text>
          </View>

        </View>
      
          

         

        

        <Searchbar
          placeholder="Search"
          onChangeText={setSearchQuery}
          value={searchQuery}
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            paddingHorizontal: 10,
          }}
        />
        <Divider style={{ marginTop: 20 }} />

        <View
          style={{
            marginTop: 20,
            flex: 1,
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: "row",
            margin: 10,
          }}
        >
          <Text style={{ color: LightTheme.light.HeaderText, fontFamily: LightTheme.light.fontBold}}>
            Types of Surgeries
          </Text>
          <Text style={{ color:  LightTheme.light.HeaderText, fontFamily: LightTheme.light.fontBold }}>
            View All
          </Text>
        </View>

        <View
          style={{
            borderColor: "lightgray",
            borderWidth: 2,
            margin: 10,
            height: "auto",
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
            padding: 5,
            top: 10,
            backgroundColor: "white",
          }}
        >
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                height: 60,
                backgroundColor: "#F5F5F5",
                width: 60,
                borderRadius: 50,
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <FontAwesome name="mobile" size={40} />
            </View>
            <View>
              <Text
                style={{
                  position: "relative",
                  bottom: 10,
                  textAlign: "center",
                  fontFamily: LightTheme.light.fontThin
                }}
              >
                hello
              </Text>
            </View>
          </View>
        </View>

        <View>
          <Text
            style={{
              color: LightTheme.light.HeaderText,
              marginTop: 20,
              fontFamily: LightTheme.light.fontBold
            }}
          >
            Hospitals in Hubli
          </Text>
          <Divider style={{ marginTop: 20 }} />
          <View>
            <Card style={{ marginTop: 20, backgroundColor: "white" }}>
              <Card.Content>
                <Text
                  variant="titleLarge"
                  style={{ color:LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular }}
                >
                  Hospital Name:
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{ color: LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular  }}
                >
                  Address:
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{ color: LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular }}
                >
                  Phone Number:
                </Text>
                <Text
                  variant="bodyMedium"
                  style={{ color: LightTheme.light.cardText, fontFamily:LightTheme.light.fontRegular  }}
                >
                  Specializations:
                </Text>
              </Card.Content>

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
                  onPress={() => navigation.navigate("DoctorPage")}
                >
                  View Doctors
                </Button>
              </Card.Actions>
            </Card>
          
          
          
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dropdown2BtnStyle: {
    width: "50%",
    height: 35,
    backgroundColor: "white",
    borderRadius: 8,
    marginBottom: 10,
  },
  dropdown2BtnTxtStyle: {
    color: LightTheme.light.HeaderText,
    textAlign: "left",
    fontWeight: "bold",
  },
  dropdown2DropdownStyle: {
    backgroundColor: "white",
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  dropdown2RowStyle: {
    backgroundColor: "white",
    borderBottomColor: "#C5C5C5",
  },
  dropdown2RowTxtStyle: {
    color: "darkblue",
    textAlign: "left",
    fontWeight: "bold",
  },
});
