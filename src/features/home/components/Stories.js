import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {getStories} from '@app/queries';

const Stories = ({data}) => {
  const [stories, setStories] = useState([]);
  useEffect(() => {
    getStories().then(res => {
      setStories(res);
    });
  }, []);
  const renderStories = ({item}) => (
    <TouchableOpacity>
      <Image style={styles.story} source={{uri: item.image}} />
    </TouchableOpacity>
  );
  return (
    <View>
      <FlatList
        data={stories}
        horizontal={true}
        contentContainerStyle={{paddingLeft: 12}}
        keyExtractor={(item, index) => String(index)}
        renderItem={renderStories}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  story: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 12,
  },
});

export default Stories;
