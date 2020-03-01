import React from 'react'
import {Text, TouchableOpacity, StyleSheet} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Container, Swiper} from '../../Components'
import {intro, intro2} from '../../Images'
import StartPageActions from '../../Redux/StartPageRedux'

const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    alignItems: 'flex-end',
    marginRight: 30,
  },
})

const data = [
  {
    title: 'dummy text of',
    text:
      "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: intro,
  },
  {
    title: 'Keanggotaan',
    text:
      "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: intro2,
  },
  {
    title: 'Video Kursus',
    text:
      "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
    image: intro,
  },
]

const Introduction = ({navigation, startPageRequest}) => {
  return (
    <Container>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          navigation.navigate('LoginScreen')
          startPageRequest()
        }}>
        <Text>Skip</Text>
      </TouchableOpacity>
      <Swiper loop data={data} />
    </Container>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators(StartPageActions, dispatch)
}

export default connect(
  null,
  mapDispatchToProps
)(Introduction)
