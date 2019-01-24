import { connect } from 'react-redux'
import Container from './Container'

function mapStateToProps (state) {
  return { ...state }
}
function mapDispatchToProps (dispatch) {
  return {
  }
}

const App = connect(mapStateToProps, mapDispatchToProps)(Container)
export default App
