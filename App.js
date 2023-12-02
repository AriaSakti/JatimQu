import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react' 
import { Discover, Home, Profile } from './src/screens'
import { Home3, SearchNormal1, User } from 'iconsax-react-native'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {
          paddingBottom: 10,
          paddingTop: 10,
          height: 64,
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: '#000',
      }}>
        <Tab.Screen options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <Home3 variant={focused ? 'Bold' : 'Linear'} color={color} size={size} />
            )
          }
        }} name='Home' component={Home} />
        <Tab.Screen options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <SearchNormal1 variant={focused ? 'Bold' : 'Linear'} color={color} size={size} />
            )
          }
        }} name='Discover' component={Discover} />
        <Tab.Screen options={{
          tabBarIcon: ({ focused, color, size }) => {
            return (
              <User variant={focused ? 'Bold' : 'Linear'} color={color} size={size} />
            )
          }
        }} name='Profile' component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}