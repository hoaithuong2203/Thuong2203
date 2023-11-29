import * as React from 'react'
import TinhToanScreen from'../Screens/TinhToanScreen'
import User from'../Screens/User'
import HealthyDiet from'../Screens/HealthyDiet'
import ReminderScreen from'../Screens/ReminderScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {fontSizes, colors} from '../constants'
import Icon from 'react-native-vector-icons/FontAwesome5'
import 'react-native-gesture-handler'
import { View } from 'react-native'
const Tab = createBottomTabNavigator()

const screenOptions = ({route}) => ({
    headerShown: false,
    tabBarActiveTintColor: 'white',
    tabBarInactiveTintColor: colors.inactive,    
    tabBarActiveBackgroundColor: colors.primary,
    tabBarInactiveBackgroundColor: colors.primary,
    
    tabBarBackground: () => (
        <View style={{backgroundColor: colors.primary, flex: 1,}}></View>
    ),
    tabBarIcon: ({focused, color, size}) => {
        let iconName;
        switch(route.name) {
            case "Người dùng":
                iconName = "user";
                break;
            case "Tính toán":
                iconName = "accusoft";
                break;
            case "Chế độ":
                iconName = "cogs";
                break;
            case "Nhắc nhở":
                iconName = "comment-dots";
                break;
            default:
                iconName = "question"; // Hoặc bất kỳ biểu tượng mặc định nào bạn chọn
        }
        
        return <Icon 
            style={{
                paddingTop: 5
            }}
            name={iconName}
            size={20} 
            color={focused ? 'white' : colors.inactive} 
        />;
    },
});

function Home(props) {
    return (
        <Tab.Navigator screenOptions={screenOptions}>
            <Tab.Screen 
            name={"Người dùng"} 
            component={User}
            options={{
                tabBarLabel: 'Người dùng',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    paddingBottom:5
                }
            }}
        />
        <Tab.Screen 
            name={"Tính toán"} 
            component={TinhToanScreen}
            options={{
                tabBarLabel: 'Tính toán',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    paddingBottom:5
                }
            }}
        />
        <Tab.Screen 
            name={"Chế độ"} 
            component={HealthyDiet}
            options={{
                tabBarLabel: 'Chế độ',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    paddingBottom:5
                }
            }}
        />
        <Tab.Screen 
            name={"Nhắc nhở"} 
            component={ReminderScreen}
            options={{
                tabBarLabel: 'Nhắc nhở',
                tabBarLabelStyle: {
                    fontSize: fontSizes.h6,
                    paddingBottom:5
                }
            }}
        />
        
        </Tab.Navigator>
    );
}



export default Home 