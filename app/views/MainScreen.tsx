import React from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import Ionicons from '@expo/vector-icons';
import BottomTabNavigator from './BottomTabNavigation';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';




function MainScreen() {

  return(
      <View style={styles.container}>
        <BottomTabNavigator/>
      </View>
  )
}


const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});



export default MainScreen;
