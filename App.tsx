import Home from './Screens/Home';
import Dangnhap from './Screens/Dangnhap';
import Dangky from './Screens/Dangky';
import Quenmatkhau from './Screens/Quenmatkhau';
import Quenmatkhau1 from './Screens/Quenmatkhau1';
import Datlaimatkhau from './Screens/Datlaimatkhau';
import BmiScreen from './Screens/BmiScreen';
import ThinMenuScreen from './Screens/ThinMenuScreen'
import FitMenuScreen from './Screens/FitMenuScreen'
import UnderFatMenuScreen from './Screens/UnderFatMenuScreen'
import FatMenuScreen from './Screens/FatMenuScreen'
import User from './Screens/User';
import ReminderScreen from './Screens/ReminderScreen';
import HealthyDiet from './Screens/HealthyDiet';
import TinhToanScreen from './Screens/TinhToanScreen';
import KcalScreen from './Screens/KcalScreen';
import BodyScreen from './Screens/BodyScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="User" component={User} />
        <Stack.Screen name="Dangnhap" component={Dangnhap} />
        <Stack.Screen name="Dangky" component={Dangky} />
        <Stack.Screen name="Quenmatkhau" component={Quenmatkhau} />
        <Stack.Screen name="Quenmatkhau1" component={Quenmatkhau1} />
        <Stack.Screen name="Datlaimatkhau" component={Datlaimatkhau} />
        <Stack.Screen name="HealthyDiet" component={HealthyDiet} />
        <Stack.Screen name="TinhToanScreen" component={TinhToanScreen} />
        <Stack.Screen name="KcalScreen" component={KcalScreen} />
        <Stack.Screen name="BodyScreen" component={BodyScreen} />
        <Stack.Screen name="ThinMenuScreen" component={ThinMenuScreen} options={{headerShown:false}} />
        <Stack.Screen name="FitMenuScreen" component={FitMenuScreen} options={{headerShown:false}} />
        <Stack.Screen name="UnderFatMenuScreen" component={UnderFatMenuScreen} options={{headerShown:false}} />
        <Stack.Screen name="FatMenuScreen" component={FatMenuScreen} options={{headerShown:false}} />
        
        <Stack.Screen name="BmiScreen" component={BmiScreen} />
        <Stack.Screen name="ReminderScreen" component={ReminderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

