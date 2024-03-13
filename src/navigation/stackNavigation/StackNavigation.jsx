import { createStackNavigator } from '@react-navigation/stack';
import OtpVerify from '../../screens/authentication/OtpVerify';
import OtpSender from '../../screens/authentication//OtpSender';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../../screens/mainStack/Home'
import SingleDoctor from '../../screens/doctorList/SingleDoctor'
import BookAppointment from '../../screens/appointMent/BookAppointment'
import Profile from '../../screens/user/Profile'
import About from '../../screens/appContent/About'
import Terms from '../../screens/appContent/Terms'
import Privacy from '../../screens/appContent/Privacy'
import Appointments from '../../screens/user/Appointments'



const Stack = createStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='OtpSenderPage'>
        <Stack.Screen name="OtpSenderPage" component={OtpSender}  options={{headerShown:false}}/>
        <Stack.Screen name="OtpVerifyPage" component={OtpVerify} options={{headerShown:false}} />
        <Stack.Screen name="HomePage" component={Home} options={{headerShown:false}} />
        <Stack.Screen name="DoctorPage" component={SingleDoctor} options={{headerShown:false}} />
        <Stack.Screen name="bookAppointment" component={BookAppointment} options={{headerShown:false}} />
        <Stack.Screen name="profilePage" component={Profile} options={{headerShown:false}} />
        <Stack.Screen name="aboutPage" component={About} options={{headerShown:false}} />
        <Stack.Screen name="termsPage" component={Terms} options={{headerShown:false}} />
        <Stack.Screen name="privacyPage" component={Privacy} options={{headerShown:false}} />
        <Stack.Screen name="myAppointments" component={Appointments} options={{headerShown:false}} />
      </Stack.Navigator>
      </NavigationContainer>
  )
}