
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BuyPromoScreen, HomeScreen, LifeEssentialsScreen, ProfileScreen, RewardsScreen } from './Screens';
import { Image } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
const Tab = createBottomTabNavigator(
  
);

function BottomTabNavigator () {
  const inset = useSafeAreaInsets();
    return (
        <Tab.Navigator 
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: 'white', // Background color
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTopWidth:0,
            height: '10%',
            paddingBottom: inset.bottom,
            
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
                  style={{
                    position: 'absolute',
                    bottom: 0, // space from bottombar
                    height: 68,
                    width: 68,
                    borderRadius: 68,
                    justifyContent: 'center',
                    alignItems: 'center',
                    }}
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