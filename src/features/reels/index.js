import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  Pressable,
  Dimensions,
} from 'react-native';
import React, {useRef} from 'react';
import globalStyles from '@app/styles/globalstyles';
import reels from '@app/assets/data/reels.json';
import Video from 'react-native-video';
import {REEL_ACTION_CONFIG} from '@app/configs';
import ProfileAvatar from '@app/components/ProfileAvatar';

const {width, height} = Dimensions.get('window');

const Reels = () => {
  const video = useRef();

  const onBuffer = () => {};

  const onVideoError = () => {};

  const getItemLayout = (a, b) => {
    console.log(a, b);
  };

  const renderReels = ({item}) => (
    <Pressable style={{width, height: height - 55, backgroundColor: '#000'}}>
      <Video
        ref={ref => {
          video.current = ref;
        }}
        repeat={true}
        source={{uri: item.url}} // Can be a URL or a local file.
        style={StyleSheet.absoluteFillObject}
        muted={true}
        playWhenInactive={true}
        resizeMode="cover"
      />
      <View style={{position: 'absolute', right: 14, bottom: 10}}>
        {REEL_ACTION_CONFIG.map(reel => (
          <Pressable key={reel.id} style={{marginVertical: 14}}>
            <Image style={styles.icon} source={reel.source} />
            {reel?.quantity && <Text style={styles.text}>{reel.quantity}</Text>}
          </Pressable>
        ))}
      </View>

      <View style={{position: 'absolute', left: 10, bottom: 10}}>
        <View style={globalStyles.row}>
          <ProfileAvatar
            source="https://www.infinitysoftsystems.com/wp-content/uploads/2021/01/3024061-scaled.jpg"
            size={44}
            style={{marginRight: 10}}
          />
          <Text style={globalStyles.title}>{item.name}</Text>
          <Pressable style={styles.followBtn}>
            <Text style={globalStyles.followText}>Follow</Text>
          </Pressable>
        </View>
        <Text style={styles.desc}>{item.desc}</Text>
        <View style={styles.audioContainer}>
          <Text style={styles.audioText}>{item.audio}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reels}
        keyExtractor={item => item.id}
        decelerationRate={'fast'}
        renderItem={renderReels}
        pagingEnabled={true}
        snapToAlignment={'start'}
        initialScrollIndex={0}
        disableIntervalMomentum
        showsVerticalScrollIndicator={false}
        // getItemLayout={(data, index) => getItemLayout(data, index)}
        // initialScrollIndex={0}
        onMomentumScrollEnd={event => {
          const index = Math.floor(
            Math.floor(event.nativeEvent.contentOffset.y) /
              Math.floor(event.nativeEvent.layoutMeasurement.height),
          );
          console.log(index);
          // work with: index
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  text: {
    color: '#fff',
    marginTop: 6,
  },
  followBtn: {
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
    marginLeft: 10,
  },
  desc: {
    fontSize: 16,
    color: '#fff',
    marginVertical: 12,
  },
  audioContainer: {
    backgroundColor: 'grey',
    paddingVertical: 3,
    paddingHorizontal: 10,
    borderRadius: 12,
    opacity: 0.8,
    width: 80,
  },
  audioText: {
    fontSize: 14,
    color: '#fff',
  },
});
export default Reels;
