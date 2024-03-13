import * as Font from 'expo-font';



 function loadFonts() {
   Font.loadAsync({
    'Poppins-bold': require('../assets/fonts/Poppins-Bold.ttf'),
    'Poppins-medium': require('../assets/fonts/Poppins-Medium.ttf'),
    'Poppins-thin': require('../assets/fonts/Poppins-Thin.ttf'),
  });
}


  loadFonts();






export const LightTheme = {
  light:{
    parentColor: '#11a99a',
    buttonColor: '#11a99a',
    ChildBlockColor: 'whitesmoke',
    TextColor:'white',
    HeaderText:'#0E5F73',
    cardText:'#0E5F73',
    fontRegular: 'Poppins-medium',
    fontBold: 'Poppins-bold',
    fontThin: 'Poppins-thin',
  },
  dark:{
    parentColor:'black',
  }
 
};
