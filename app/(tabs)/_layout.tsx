import { Tabs } from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{tabBarActiveTintColor: 'white',
            headerStyle: {
                backgroundColor: 'red',
            },
            headerShadowVisible: true,
            headerTintColor: '#fff',
            tabBarStyle: {
                backgroundColor: 'blue',
            },
        }}>
            <Tabs.Screen name="index" options={{title: 'Home',
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24}></Ionicons>
                )
            }}></Tabs.Screen>
            <Tabs.Screen name="about" options={{title: 'About',
                tabBarIcon: ({color, focused}) => (
                    <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color={color} size={24}></Ionicons>
                )
            }}></Tabs.Screen>
        </Tabs>
    )
}