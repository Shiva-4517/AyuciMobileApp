import { View, Text, ScrollView, StyleSheet } from "react-native";
import React, { useState } from "react";
import { Alert, Modal, Pressable,TouchableOpacity } from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import { LightTheme } from './themes/LightTheme';
import { LightTheme } from "../../themes/LightTheme";
import {
  Portal,
  Button,
  PaperProvider,
  Appbar,
  TextInput,
} from "react-native-paper";

export default function BookAppointment({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);

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
          title="Book Appointment"
          titleStyle={{
            color: LightTheme.light.HeaderText,
            fontFamily: LightTheme.light.fontRegular,
            fontSize: 18,
          }}
        />
      </Appbar.Header>
      <ScrollView style={{ backgroundColor: "#EFFBFF" }}>
      <View>
        <Text
          style={{
            marginTop: 20,
            marginLeft: 20,
            fontFamily: LightTheme.light.fontRegular,
            height: "500",
          }}
        >
          Please select the Date for Appointment
        </Text>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert("Modal has been closed.");
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View>
                  <Text style={{ marginBottom: 5 ,fontFamily:LightTheme.light.fontRegular}}> Name</Text>
                  <TextInput
                    style={{ width: 250, height: 40, marginBottom: 10,backgroundColor:LightTheme.light.ChildBlockColor }}
                  />
                  <Text style={{ marginBottom: 5, marginTop: 10,fontFamily:LightTheme.light.fontRegular }}>
                    PhoneNumber
                  </Text>
                  <TextInput style={{ width: 250, height: 40,backgroundColor:LightTheme.light.ChildBlockColor }} />
                  <Button
                    style={{
                      padding: 10,
                      backgroundColor: LightTheme.light.buttonColor,
                      marginTop: 30,
                      borderRadius: 10,
                    }}
                  >
                     <Text style={{ color: "white",textAlign:'center',fontFamily:LightTheme.light.fontRegular }}>Submit</Text>
                  </Button>
                </View>

                <Pressable
                  style={[styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <FontAwesome name={"close"} size={20} />
                </Pressable>
              </View>
            </View>
          </Modal>

          {/* <Button
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            Show Modal
          </Button> */}
          <TouchableOpacity
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={{ color: "white",textAlign:'center' ,fontFamily:LightTheme.light.fontRegular}}>Book Appointment</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 10,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 100,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    height: 550,
    width: 320,

    // shadowOffset: {
    //   width: 0,
    //   height: 2,
    // },
    shadowOpacity: 1,
    shadowRadius: 10,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    height:40,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: LightTheme.light.buttonColor,
  },
  buttonClose: {
    backgroundColor: "white",
    position: "absolute",
    top: 20,
    right: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});
