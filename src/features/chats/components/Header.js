import {View, Text, Pressable, Image, StyleSheet} from 'react-native';
import React from 'react';
import globalStyles from '@app/styles/globalstyles';
import images from '@app/assets/images';
import {useNavigation} from '@react-navigation/native';

const Header = ({headerRightComponent}) => {
  const navigation = useNavigation();
  return (
    <View style={[globalStyles.row, {padding: 10, height: 65}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image style={globalStyles.headerIcon} source={images.back_icon} />
      </Pressable>
      <Text numberOfLines={1} style={styles.username}>
        _prakhar_5002
      </Text>
      {headerRightComponent()}
    </View>
  );
};

const styles = StyleSheet.create({});

export default Header;
