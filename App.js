import React, {useState, useEffect, useRef} from 'react';
import {View, Animated, Text, StyleSheet} from 'react-native';
import globalStyles from './src/styles/globalstyles';

export default function App() {
  const translation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    for (let i = 0; i < 500; i++) {
      setTimeout(() => {
        translation.setValue(i);
      }, i * 5);
    }
  }, []);

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={[styles.text, {fontFamily: 'ComicNeue-Bold'}]}>
        React native world
      </Text>
      <Text style={[styles.text, {fontFamily: 'ComicNeue-BoldItalic'}]}>
        React native world
      </Text>
      <Text style={[styles.text, {fontFamily: 'ComicNeue-Italic'}]}>
        React native world
      </Text>
      <Text style={[styles.text, {fontFamily: 'ComicNeue-Light'}]}>
        React native world
      </Text>
      <Text style={[styles.text, {fontFamily: 'ComicNeue-LightItalic'}]}>
        React native world
      </Text>
      <Text style={[styles.text, {fontFamily: 'ComicNeue-Regular'}]}>
        React native world
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: '#000',
    fontSize: 18,
    marginBottom: 12
  },
});
