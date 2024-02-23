import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  Pressable,
  RefreshControl,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import globalStyles from '../../styles/globalstyles';
import stories from '../../assets/data/stories.json';
import {HOME_HEADER_CONFIG, POST_ACTION_CONFIG} from '../../configs';
import ProfileAvatar from '@app/components/ProfileAvatar';
import images from '@app/assets/images';
import Stories from './components/Stories';

const Home = ({navigation}) => {
  const [refreshing, setRefreshing] = React.useState(false);
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const postArr = stories.map(item => {
      return {...item, likeStatus: false};
    });
    setPostData(postArr);
  }, []);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  const handlePostAction = (type, id) => {
    switch (type) {
      case 0:
        return onLike(id);
      case 1:
        return onComment(id);
    }
  };

  const onLike = id => {
    let postArr = [...postData];
    postArr = postArr.map(item => {
      if (item.id === id) {
        return {...item, likeStatus: !item.likeStatus};
      }
      return {...item};
    });
    setPostData(postArr);
  };

  const onComment = id => {
  };

  const header = () => (
    <View style={styles.headerContainer}>
      <Pressable>
        <Text style={styles.headerText}>Instagram</Text>
      </Pressable>
      <View style={globalStyles.row}>
        {HOME_HEADER_CONFIG.map(item => (
          <Pressable key={item.id} onPress={() => navigation.push(item.name)}>
            <Image style={styles.icon} source={item.icon} />
          </Pressable>
        ))}
      </View>
    </View>
  );

  const renderStories = ({item}) => (
    <TouchableOpacity>
      <Image style={styles.story} source={{uri: item.image}} />
    </TouchableOpacity>
  );

  const headerComponent = () => (
    <View style={{marginBottom: 30}}>
      {header()}
      <Stories data={stories} />
    </View>
  );

  const renderImages = item => (
    <View style={styles.post}>
      <View
        style={[
          globalStyles.row,
          {justifyContent: 'center', paddingHorizontal: 12},
        ]}>
        <View style={globalStyles.row}>
          <ProfileAvatar source={item.image} size={45} />
          <View style={styles.postHeaderContainer}>
            <Text style={globalStyles.title}>{item.name}</Text>
            <Text style={globalStyles.descText}>Sponsored</Text>
          </View>
          <View style={globalStyles.row}>
            <Pressable style={globalStyles.followBtn}>
              <Text style={globalStyles.btnTextSM}>Follow</Text>
            </Pressable>
            <Pressable style={{marginLeft: 12}}>
              <Image style={globalStyles.icon} source={images.more_icon} />
            </Pressable>
          </View>
        </View>
      </View>
      <Image style={styles.postImage} source={{uri: item.url[0]}} />
      <View style={[globalStyles.row, styles.postActionContainer]}>
        <View style={globalStyles.row}>
          {POST_ACTION_CONFIG.map(option => (
            <Pressable
              key={option.id}
              style={{marginRight: 20}}
              onDou
              onPress={() => handlePostAction(option.id, item.id)}>
              {item.likeStatus && option.id === 0 ? (
                <Image
                  style={{width: 22, height: 22}}
                  source={images.heart_filled}
                />
              ) : (
                <Image style={globalStyles.icon} source={option.source} />
              )}
            </Pressable>
          ))}
        </View>
        <Pressable>
          <Image style={globalStyles.icon} source={images.bookmark_icon} />
        </Pressable>
      </View>
    </View>
  );

  const renderPosts = ({item}) => {
    switch (item.type) {
      case 'image':
        return renderImages(item);
    }
  };

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={postData}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListHeaderComponent={headerComponent}
        keyExtractor={item => item.id}
        renderItem={renderPosts}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    ...globalStyles.row,
    justifyContent: 'space-between',
    padding: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
    marginLeft: 24,
  },
  headerText: {
    fontSize: 26,
    color: '#fff',
    fontFamily: 'Pacifico-Regular',
  },
  postHeader: {
    ...globalStyles.row,
    justifyContent: 'space-between',
  },
  post: {
    marginBottom: 30,
    height: 500,
    width: '100%',
  },
  postHeaderContainer: {
    justifyContent: 'space-between',
    flex: 1,
    marginHorizontal: 10,
  },
  postActionContainer: {
    justifyContent: 'space-between',
    paddingHorizontal: 12,
    marginTop: 6,
  },
  postImage: {
    width: 'auto',
    height: 'auto',
    flex: 1,
    marginVertical: 8,
  },
});

export default Home;
