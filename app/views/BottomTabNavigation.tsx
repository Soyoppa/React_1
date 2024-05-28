
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BuyPromoScreen, HomeScreen, LifeEssentialsScreen, ProfileScreen, RewardsScreen } from './Screens';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator(
  
);

function BottomTabNavigator () {
    return (
        <Tab.Navigator 
        screenOptions={{
          headerShown: false,
        tabBarStyle: {
          backgroundColor: 'white', // Background color
          borderRadius: 0, // Rounded corners
          borderWidth: 0, // Border width
          borderColor: 'white', // Border color
          position: 'absolute', // This makes the tab bar float above the scree
          elevation: 0, // This is for Android, it removes the shadow from the tab bar
          shadowOpacity: 0, // Remove shadow on iOS
          bottom: 0, // Position from the bottom of the screen
          left: 0, // Position from the left of the screen
          right: 0,
          paddingTop: 5,
          borderTopWidth:0,
          height: 60,
          paddingBottom:5// Position from the right of the screen
        },
        }}>
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
          <Tab.Screen
            name="Essentials"
            component={LifeEssentialsScreen}
            options={{
              title: 'Essentials',
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={focused ? require('../assets/logo.png') : require('../assets/logo.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Rewards"
            component={RewardsScreen}
            options={{
              title: 'Rewards',
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={focused ? require('../assets/rewards.png') : require('../assets/unrewards.png')}
                  />
                );
              },
            }}
          />
          <Tab.Screen
            name="Profile"
            component={ProfileScreen}
            options={{
              title: 'Profile',
              tabBarIcon: ({ size, focused, color }) => {
                return (
                  <Image
                    style={{ width: size, height: size }}
                    source={focused ? require('../assets/profile.png') : require('../assets/unprofile.png')}
                  />
                );
              },
            }}
          />
        </Tab.Navigator>
      );
}

export default BottomTabNavigator;