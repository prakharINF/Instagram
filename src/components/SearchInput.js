import {Text, StyleSheet, Image, Pressable} from 'react-native';
import React from 'react';
import images from '@app/assets/images';

const SearchInput = ({onPress, style}) => {
  return (
    <Pressable style={[styles.container, style]} onPress={onPress}>
      <Image style={styles.icon} source={images.search_icon} />
      <Text style={styles.searchText}>Search</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(69, 69, 69)',
    height: 40,
    borderRadius: 8,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 22,
    height: 22,
    tintColor: 'grey',
  },
  searchText: {
    marginLeft: 16,
    color: 'grey',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default SearchInput;
