import React from "react";
import { View, Text, StyleSheet, SafeAreaView, Image} from "react-native";
import { Button, Headline,TextInput } from "react-native-paper";
import {LightTheme} from '../../themes/LightTheme'





export default function OtpSender({ navigation }) {



  return (
    <SafeAreaView style={styles.parentContainer}>
      <View style={styles.container}>
        <View style={styles.imgBlock}>
          <Image source={require("../../assets/message.png")} />
        </View>
        <Text style={styles.lineText}>Mobile Number</Text>
        
        <Text style={styles.text}>We need to send OTP to authenticate your mobile number</Text>
      </View>
      <View style={styles.secondBlock}>
        <View style={styles.inputContainer}>
          
        <TextInput style={styles.input}  keyboardType="numeric" maxLength={10} label="Phone Number"   />
         
        </View>
        <Button mode="contained" style={styles.button} onPress={() => navigation.navigate("OtpVerifyPage")}>
          Send OTP
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
    paddingLeft:15,
  },
  lineText: {
    textAlign: "center",
    color:LightTheme.light.TextColor,
    fontFamily:LightTheme.light.fontBold,
    fontSize:20,
  },
  text: {
    color:LightTheme.light.TextColor,
    textAlign: "center",
    fontFamily:LightTheme.light.fontRegular,
    padding:5
  },
  secondBlock: {
    flex: 1,
    backgroundColor:LightTheme.light.ChildBlockColor,
    borderTopLeftRadius: 70,
    borderTopRightRadius: 70,
    padding: 20,
    justifyContent: "space-between",
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50,
    fontFamily:'Poppins-bold',
    
    
  },
  input: {
    backgroundColor:LightTheme.light.ChildBlockColor,
    textAlign: "left",
    flex: 1,
    marginHorizontal: 5,
    padding: 5,
    borderBottomWidth: 2,
    borderColor: '#033854',
   
    
   
  },
  button: {
    backgroundColor: LightTheme.light.buttonColor,
    borderRadius: 10,
    padding: 10,
    alignSelf: "flex-end",
    margin: 20,
    width:'100%',
    alignSelf:'center',
  
  },
});
