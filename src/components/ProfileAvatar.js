import {Image, TouchableOpacity} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

const ProfileAvatar = ({source, onPress, size, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={style}>
      <Image
        style={{width: size, height: size, borderRadius: size / 2}}
        source={{uri: source}}
      />
    </TouchableOpacity>
  );
};

ProfileAvatar.defaultProps = {
  size: 80,
};

ProfileAvatar.propTypes = {
  size: PropTypes.number,
  source: PropTypes.string.isRequired,
  onPress: PropTypes.func,
};

export default ProfileAvatar;
