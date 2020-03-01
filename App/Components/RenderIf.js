export default (RenderIf = props => {
  const {condition, children} = props
  if (condition) {
    return children
  }
  return null
})
