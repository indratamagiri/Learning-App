import React from 'react'
import {Container} from '../../Components'
import Header from './Header'
import GoodCourse from './GoodCourse'
import FanCourse from './FanCourse'
import GoodPartner from './GoodPartner'

const Dasboard = ({navigation}) => {
  return (
    <Container scroll>
      <Header
        itemCategory={[
          {icon: 'target', text: 'Strategy'},
          {icon: 'volume-2', text: 'Motivation'},
          {icon: 'users', text: 'Coaching'},
        ]}
      />

      <GoodCourse navigation={navigation} />

      <FanCourse />

      <GoodPartner />
    </Container>
  )
}

export default Dasboard
