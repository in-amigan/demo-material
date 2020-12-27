import './App.css'
import SideMenu from './Components/SideMenu'
import Header from './Components/Header'
import { CssBaseline } from '@material-ui/core'


function App() {
  return (
    <>
      <SideMenu/>
      <Header/>
      <div>
        <h1>Hello World</h1>
      </div>
      <CssBaseline/>
    </>
  )
}

export default App;
