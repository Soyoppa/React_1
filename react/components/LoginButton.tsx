
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ToastAndroid } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import CustomButtonProps from '../types/CustomButtonProps';

function LoginButton({ title, style, textStyle }: CustomButtonProps) {
  const handlePress = () => {
    ToastAndroid.show('Button Pressed!', ToastAndroid.SHORT);
  };

  return (
    <TouchableOpacity style={[styles.button, style]} onPress={handlePress}>
      <Text style={[styles.buttonText, textStyle]}>{title}</Text>
    </TouchableOpacity>
  )
}

  

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

export default LoginButton;