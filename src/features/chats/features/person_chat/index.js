import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React from 'react';
import globalStyles from '@app/styles/globalstyles';
import images from '@app/assets/images';
import ProfileAvatar from '@app/components/ProfileAvatar';
import {PERSON_CHAT_CONFIG} from '@app/configs';

const PersonChat = ({navigation, route}) => {
  const {data} = route.params;
  const header = () => (
    <View style={styles.headerContainer}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image style={globalStyles.headerIcon} source={images.back_icon} />
      </Pressable>
      <ProfileAvatar source={data.url} size={40} style={{marginLeft: 16}} />
      <View style={{marginHorizontal: 12, flex: 1}}>
        <Text numberOfLines={1} style={styles.generalText}>
          {data?.name}
        </Text>
        <Text
          numberOfLines={1}
          style={{fontSize: 15, color: '#fff', opacity: 0.8}}>
          {data?.company?.name}
        </Text>
      </View>

      {PERSON_CHAT_CONFIG.map(option => (
        <Pressable key={option.id}>
          <Image style={globalStyles.headerIconRight} source={option.source} />
        </Pressable>
      ))}
    </View>
  );
  return <View style={globalStyles.container}>{header()}</View>;
};

const styles = StyleSheet.create({
  headerContainer: {
    ...globalStyles.row,
    height: 70,
    paddingHorizontal: 10,
  },
  generalText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
});

export default PersonChat;
