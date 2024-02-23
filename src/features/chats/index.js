import {
  View,
  Text,
  Pressable,
  Image,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import globalStyles from '@app/styles/globalstyles';
import images from '@app/assets/images';
import {CHAT_CATEGORY_CONFIG, CHAT_LIST_HEADER_CONFIG} from '@app/configs';
import chats from '@app/assets/data/chats.json';
import ProfileAvatar from '@app/components/ProfileAvatar';
import SearchInput from '@app/components/SearchInput';
import TextButton from '@app/components/TextButton';
import {CHAT_TYPE} from '@app/constants';
import {PERSON_CHAT} from '@app/navigation/screenNames';

const Chats = ({navigation}) => {
  const [chatType, setChatType] = useState(CHAT_TYPE.PRIMARY);
  const header = () => (
    <View style={[globalStyles.row, {padding: 10, height: 65}]}>
      <Pressable onPress={() => navigation.goBack()}>
        <Image style={globalStyles.headerIcon} source={images.back_icon} />
      </Pressable>
      <Text numberOfLines={1} style={styles.username}>
        _prakhar_5002
      </Text>
      {CHAT_LIST_HEADER_CONFIG.map(option => (
        <Pressable key={option.id}>
          <Image style={globalStyles.headerIconRight} source={option.source} />
        </Pressable>
      ))}
    </View>
  );

  const headerComponent = () => (
    <View style={{paddingHorizontal: 10, marginTop: 10}}>
      <View style={globalStyles.row}>
        <SearchInput style={{marginRight: 14}} />
        <TextButton text="Filter" />
      </View>
      <View
        style={{
          justifyContent: 'space-evenly',
          flexDirection: 'row',
          marginVertical: 20,
        }}>
        {CHAT_CATEGORY_CONFIG.map(chat => (
          <Pressable
            key={chat.id}
            style={[
              styles.btn,
              chat.type === chatType && {
                backgroundColor: '#fff',
              },
            ]}>
            <Text
              style={[
                styles.btnText,
                chat.type === chatType && {
                  color: '#000',
                },
              ]}>
              {chat.name}
            </Text>
          </Pressable>
        ))}
      </View>
    </View>
  );

  const renderChats = ({item}) => (
    <TouchableOpacity
      style={[globalStyles.row, styles.chatContainer]}
      onPress={() =>
        navigation.push(PERSON_CHAT, {
          data: item,
        })
      }>
      <ProfileAvatar source={item.url} size={50} />
      <View style={{flex: 1, paddingHorizontal: 12}}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={globalStyles.row}>
          <Text style={[styles.desc, globalStyles.container]}>
            sent a reel by uxStar
          </Text>
          <Text style={styles.desc}>1 day ago</Text>
        </View>
      </View>
      <Image
        style={{width: 30, height: 30, tintColor: 'grey', marginLeft: 12}}
        source={images.camera_icon}
      />
    </TouchableOpacity>
  );

  return (
    <View style={globalStyles.container}>
      {header()}
      <ScrollView>
        {headerComponent()}
        <FlatList
          data={chats}
          keyExtractor={item => item.id}
          renderItem={renderChats}
          scrollEnabled={false}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  username: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
    marginLeft: 24,
    flex: 1,
  },
  chatContainer: {
    marginBottom: 20,
    marginHorizontal: 10,
  },
  name: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
  },
  desc: {
    fontSize: 16,
    color: 'grey',
  },
  btn: {
    backgroundColor: 'rgb(69, 69, 69)',
    paddingHorizontal: 20,
    height: 35,
    borderRadius: 8,
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  btnText: {
    color: '#fff',
    fontSize: 14,
  },
});

export default Chats;
