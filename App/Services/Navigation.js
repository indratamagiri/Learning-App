import {NavigationActions, StackActions} from 'react-navigation'

export function navigate(routeName, params = {}) {
  return NavigationActions.navigate({routeName, params})
}
export function reset(routeName, params = {}) {
  return StackActions.reset({
    index: 0,
    routeName,
    actions: [NavigationActions.navigate({routeName, params})],
  })
}

export function resetToOnBoardingStack() {
  return [
    StackActions.reset({
      index: 0,
      routeName: 'OnBoardingStack',
      actions: [NavigationActions.navigate({routeName: 'OnBoardingStack'})],
    }),
  ]
}

export function navigateBack() {
  return NavigationActions.back()
}

export function popToTop() {
  return StackActions.popToTop()
}
