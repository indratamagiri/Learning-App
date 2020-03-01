const type = {
  base: 'Avenir-Book',
  bold: 'Avenir-Black',
  emphasis: 'HelveticaNeue-Italic',
}

const fontFamily = {
  base: 'Roboto-Regular',
  bold: 'Roboto-Bold',
}

const size = {
  h1: 38,
  h2: 34,
  h3: 30,
  h4: 26,
  h5: 20,
  h6: 19,
  input: 18,
  regular: 17,
  medium: 14,
  small: 12,
  tiny: 8.5,
}

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  titleNormal: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  button: {
    fontFamily: fontFamily.bold,
    fontSize: size.medium,
    textAlign: 'center',
  },
  small: {
    fontFamily: type.base,
    fontSize: size.small,
  },
  tiny: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
}

export default {
  type,
  size,
  style,
}
