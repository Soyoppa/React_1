import React from 'react';
import { SafeAreaView, StyleSheet, Text,ToastAndroid,GestureResponderEvent} from 'react-native';
import LoginButton from './react/components/LoginButton.tsx';
import { Colors } from 'react-native/Libraries/NewAppScreen';

function App () : React.JSX.Element {
  const handlePress = () => {
    ToastAndroid.show('Button Pressed!', ToastAndroid.SHORT);
  };
  return (
    <SafeAreaView style={styles.container}>
      <LoginButton title='Login' onPress={handlePress} />
    </SafeAreaView>
  )
};

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
})