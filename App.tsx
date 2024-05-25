/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  TouchableOpacity,
  View,
  GestureResponderEvent,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function App () : React.JSX.Element {
  const handlePress = () => {
    alert('Button Pressed!');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>sdasd</Text>
      <LoginButton title='Login' onPress={handlePress} ></LoginButton>
    </SafeAreaView>
  )
};

function LoginButton({ title, style,textStyle }:CustomButtonProps) {
  return (
      <TouchableOpacity style = {[styles.button, style]}>
        <Text style={[styles.buttonText, textStyle]}>{title}</Text>
      </TouchableOpacity>
  )
}

export default App;



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: Colors.black,
    fontSize: 20
  },
  button: {
    backgroundColor:'blue',
    padding:10,
    borderRadius: 5
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  }
})



interface CustomButtonProps {
  title: string;
  onPress: (event: GestureResponderEvent) => void;
  style?: object;
  textStyle?: object;
}


function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

