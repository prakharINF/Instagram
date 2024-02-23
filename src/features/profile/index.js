import {View, Text, StyleSheet, Pressable, Image} from 'react-native';
import React, {useEffect} from 'react';
import globalStyles from '@app/styles/globalstyles';
import ProfileAvatar from '@app/components/ProfileAvatar';
import images from '@app/assets/images';

const data = [
  {id: 0, title: 'posts', quantity: 0},
  {id: 1, title: 'followers', quantity: '2.6K'},
  {id: 2, title: 'following', quantity: 290},
];

const headerOptions = [images.add_icon, images.menu_icon];
const Profile = () => {
  const header = () => (
    <View style={styles.header}>
      <Text style={styles.headerText}>_prakhar_5002</Text>
      <View style={globalStyles.row}>
        {headerOptions.map(option => (
          <Pressable style={{marginLeft: 20}}>
            <Image
              style={{width: 26, height: 26, tintColor: '#fff'}}
              source={option}
            />
          </Pressable>
        ))}
      </View>
    </View>
  );

  return (
    <View style={globalStyles.container}>
      {header()}
      <View style={[globalStyles.row, {justifyContent: 'space-evenly'}]}>
        <ProfileAvatar source="https://pbs.twimg.com/profile_images/1443884062528065536/011zseV4_400x400.jpg" />
        {data.map(item => (
          <View style={{alignItems: 'center'}}>
            <Text style={styles.quantity}>{item.quantity}</Text>
            <Text style={styles.quantityTitle}>{item.title}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quantity: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  quantityTitle: {
    fontSize: 16,
    color: '#fff',
  },
  header: {
    height: 70,
    paddingHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontWeight: '700',
  },
});

export default Profile;
