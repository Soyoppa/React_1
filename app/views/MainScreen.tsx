import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function BuyPromoScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Buy Promo!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function MainScreen() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: 'Home',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={focused ? require('../assets/home.png') : require('../assets/unhome.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Buy Promo"
        component={BuyPromoScreen}
        options={{
          title: 'Buy Promo',
          tabBarIcon: ({ size, focused, color }) => {
            return (
              <Image
                style={{ width: size, height: size }}
                source={focused ? require('../assets/phone.png') : require('../assets/unphone.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default MainScreen;