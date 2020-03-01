import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import Video from 'react-native-video'
import MediaControls, {PLAYER_STATES} from '@freakycoder/react-native-media-controls'
import colors from '../../Themes/Colors'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  toolbar: {
    marginTop: 30,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 5,
  },
  mediaPlayer: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'black',
  },
})

const Main = props => {
  let videoPlayer
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [isLoading, setIsLoading] = React.useState(true)
  const [paused, setPaused] = React.useState(true)
  const [playerState, setPlayerState] = React.useState(PLAYER_STATES.PAUSED)

  const onSeek = seek => {
    videoPlayer.seek(seek)
  }

  const onPaused = param => {
    setPaused(!paused)
    setPlayerState(param)
  }

  const onReplay = () => {
    setPlayerState(PLAYER_STATES.PLAYING)
    setPaused(false)
    videoPlayer.seek(0)
  }

  const onProgress = data => {
    // Video Player will continue progress even if the video already ended
    if (!isLoading && playerState !== PLAYER_STATES.ENDED) {
      setCurrentTime(data.currentTime)
    }
  }

  const onLoad = data => {
    setDuration(data.duration)
    setIsLoading(false)
  }

  const onBuffer = data => {
    console.tron.log(data, 'd')
  }

  const onLoadStart = data => {
    setIsLoading(true)
  }

  const onEnd = () => {
    setPlayerState(PLAYER_STATES.ENDED)
  }

  const onError = () => alert('Oh! ', error)

  const exitFullScreen = () => {
    props.setFullScreen(false)
  }

  const enterFullScreen = () => {
    props.setFullScreen(true)
  }

  const onFullScreen = () => {
    if (props.fullScreen) {
      return exitFullScreen()
    }
    return enterFullScreen()
  }

  const renderToolbar = () => (
    <View style={styles.toolbar}>
      <Text>I'm a custom toolbar </Text>
    </View>
  )

  const onSeeking = temp => {
    setCurrentTime(temp)
  }

  return (
    <View style={styles.container}>
      <Video
        volume={2.0}
        resizeMode={props.fullScreen ? 'contain' : 'cover'}
        onEnd={onEnd}
        onLoad={onLoad}
        paused={paused}
        style={styles.mediaPlayer}
        onProgress={onProgress}
        onLoadStart={onLoadStart}
        ref={ref => {
          videoPlayer = ref
        }}
        onBuffer={onBuffer}
        fullscreenOrientation="all"
        source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      />
      <MediaControls
        mainColor="orange"
        onSeek={onSeek}
        onReplay={onReplay}
        onPaused={onPaused}
        onSeeking={onSeeking}
        duration={duration}
        isLoading={isLoading}
        onFullScreen={onFullScreen}
        progress={currentTime}
        playerState={playerState}
        playButtonBackgroundColor={colors.black_dark}
      />
    </View>
  )
}

export default Main
