import {View, Text, Pressable} from 'react-native';
import React from 'react';

const TextButton = ({text}) => {
  return (
    <Pressable>
      <Text style={{fontSize: 16, color: '#0096FF'}}>{text}</Text>
    </Pressable>
  );
};

export default TextButton;
