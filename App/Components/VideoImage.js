import React from 'react'
import {ImageBackground, View, StyleSheet, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    height: 160,
    alignContent: 'center',
    justifyContent: 'center',
  },
  play: {
    alignItems: 'center',
  },
})

const VideoImage = ({url, style, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <ImageBackground source={url} style={[style, styles.backgroundImage]}>
        <View style={styles.play}>
          <Icon name="play" size={50} />
        </View>
      </ImageBackground>
    </TouchableOpacity>
  )
}

export default VideoImage
