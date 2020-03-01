import React from 'react'
import {Text, View, StyleSheet, TouchableOpacity, ToastAndroid} from 'react-native'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Container, TextInput, Button, IconBox} from '../../Components'
import LoginActions from '../../Redux/LoginRedux'
import {Logo, facebook, google} from '../../Images'
import metric from '../../Themes/Metrics'
import colors from '../../Themes/Colors'

const styles = StyleSheet.create({
  containerLogo: {
    marginTop: 48,
    alignItems: 'center',
  },
  logoText: {
    fontSize: 16,
  },
  container: {
    marginHorizontal: metric.doubleBaseMargin,
  },
  form: {
    marginTop: metric.doubleSection,
  },
  forgetPassword: {
    color: colors.red_light,
  },
  buttonLogin: {
    marginTop: metric.doubleBaseMargin,
  },
  textMid: {
    textAlign: 'center',
    marginTop: metric.smallMargin,
  },
  facebook: {backgroundColor: colors.facebook},
  icon: {
    marginTop: metric.doubleBaseMargin,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  google: {
    backgroundColor: colors.snow,
  },
  register: {
    marginTop: metric.doubleBaseMargin,
    alignContent: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  textRegis: {
    color: colors.red_light,
  },
})

const Login = ({navigation, loginRequest, data}) => {
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [secureTextEntry, setSecureTextEntry] = React.useState(true)

  const onLogin = () => {
    if (username.length === 0 || password.length === 0) {
      ToastAndroid.show('masukan username dan passoword', ToastAndroid.LONG)
    } else {
      loginRequest({username, password})
    }
  }

  return (
    <Container scroll style={styles.container}>
      <View style={styles.containerLogo}>
        <Logo width={220} height={120} />

        <Text style={styles.logoText}>Masuk Sekarang</Text>
      </View>

      <View style={styles.form}>
        <TextInput
          onChangeText={text => setUsername(text)}
          placeholder="Email"
          customLabel="Email"
        />
        <TextInput
          onChangeText={text => setPassword(text)}
          placeholder="Password"
          customLabel="Password"
          password
          secureTextPress={() => {
            setSecureTextEntry(!secureTextEntry)
          }}
          secureTextEntry={secureTextEntry}
        />
      </View>

      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.forgetPassword}>Lupa Kata Sandi ?</Text>
      </TouchableOpacity>

      <Button onPress={onLogin} isFetching={data.fetching} containerStyle={styles.buttonLogin}>
        Masuk
      </Button>

      <Text style={styles.textMid}>Atau Masuk Dengan</Text>

      <View style={styles.icon}>
        <TouchableOpacity style={{marginRight: metric.baseMargin}}>
          <IconBox styleContainer={styles.facebook} Image={facebook} />
        </TouchableOpacity>

        <TouchableOpacity style={{marginLeft: metric.baseMargin}}>
          <IconBox styleContainer={styles.google} Image={google} />
        </TouchableOpacity>
      </View>

      <View style={styles.register}>
        <Text style={{color: colors.black_dark}}>Belum punya akun ? </Text>
        <TouchableOpacity>
          <Text style={styles.textRegis}>Daftar</Text>
        </TouchableOpacity>
      </View>
    </Container>
  )
}

const mapStateToProps = state => ({
  data: state.login,
})

const mapDispatchToProps = dispatch => {
  return bindActionCreators(LoginActions, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
