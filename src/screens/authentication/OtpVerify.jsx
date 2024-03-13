import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image, TextInput } from "react-native";
import { Button, Headline ,IconButton,MD3Colors } from "react-native-paper";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import {LightTheme} from '../../themes/LightTheme'

export default function OtpVerify({ navigation }) {
  return (
    <SafeAreaView style={styles.parentContainer}>
  <View style={{position:'absolute',top:70,left:20}}>
  <FontAwesome
                  name={"chevron-left"}
                  color={LightTheme.buttonColor}
                  size={18}
                  onPress={()=>navigation.navigate("OtpSenderPage")}
                />
  </View>
      <View style={styles.container}>
     
        <View style={styles.imgBlock}>
        <Image source={require("../../assets/otp.png")} />
        </View>
        <Headline style={styles.headline}>OTP</Headline>
        <Text style={styles.text}>Please enter the OTP sent to your mobile number</Text>
      </View>
      <View style={styles.secondBlock}>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} secureTextEntry keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.input} secureTextEntry keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.input} secureTextEntry keyboardType="numeric" maxLength={1} />
          <TextInput style={styles.input} secureTextEntry keyboardType="numeric" maxLength={1} />
        </View>
        <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("HomePage")}>
          Verify OTP
        </Button>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    backgroundColor:LightTheme.light.parentColor,
  },
  container: {
    alignItems: "center",
    marginTop: 120,
  marginBottom:80,
  },
  imgBlock: {
    marginBottom: 10,
    paddingLeft:20,
  },
  headline: {
    textAlign: "center",
    color: LightTheme.light.TextColor,
   
    fontFamily:'Poppins-bold',
  },
  text: {
    color: LightTheme.light.TextColor,
    textAlign: "center",
    fontFamily:'Poppins-medium',
  },
  secondBlock: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    padding: 20,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
  },
  input: {
    backgroundColor: LightTheme.light.ChildBlockColor,
    textAlign: "center",
    flex: 1,
    padding: 10,
    borderBottomWidth: 2,
    borderColor: '#034694',
    margin:10, 
    
  },
  button: {
    backgroundColor:LightTheme.light.buttonColor,
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-end",
    margin: 20,
    width:'100%',
    alignSelf:'center'
  },
});
