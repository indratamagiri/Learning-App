import React from 'react'
import {StyleSheet, View, ScrollView, ViewPropTypes, SafeAreaView, Platform} from 'react-native'
import PropTypes from 'prop-types'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

function Container({children, style, disabled, scroll}) {
  if (scroll) {
    return (
      <ScrollView style={[styles.container, style]} pointerEvents={disabled ? 'none' : 'auto'}>
        {children}
      </ScrollView>
    )
  }
  return Platform.OS === 'ios' ? (
    <SafeAreaView style={[styles.container, style]} pointerEvents={disabled ? 'none' : 'auto'}>
      {children}
    </SafeAreaView>
  ) : (
    <View style={[styles.container, style]} pointerEvents={disabled ? 'none' : 'auto'}>
      {children}
    </View>
  )
}

Container.defaultProps = {
  scroll: false,
  disabled: false,
  style: {},
}

Container.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  style: ViewPropTypes.style,
  disabled: PropTypes.bool,
  scroll: PropTypes.bool,
}

export default Container
