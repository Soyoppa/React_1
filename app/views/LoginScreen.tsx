import React from 'react';
import { View, Image, StyleSheet, ToastAndroid } from 'react-native';
import LoginButton from '../components/LoginButton';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator,StackNavigationProp } from '@react-navigation/stack';

type Props = {
  navigation: StackNavigationProp<any, 'Login'>;
};

const LoginScreen: React.FC<Props> = ({ navigation }) => (
  <View style={styles.container}>
    <Image
        style={styles.image}
        source={require('../assets/logo.png')} />
    <LoginButton title="Login" onPress={() => navigation.navigate('Main')} />
  </View>
);
// function SplashScreen() {
//   const handlePress = () => {
//     ToastAndroid.show('Button Pressed!', ToastAndroid.SHORT);
//   };
//   return (
//     <View style={styles.container}>
      
//       <LoginButton title='Login' onPress={handlePress} />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'cover',
  },
});

export default LoginScreen;