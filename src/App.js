import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Form from'./Component/Form.js'
import Container from './Component/Container.js'
import About from './/Component/About.js'
import Navbar from './Component/Navber'
import {Routes, Route} from 'react-router-dom'

function App() {
  const myFun=(value)=>{
      console.log('I am in myFun',value);
  }
  return(
    <>
      <Navbar/>
      <Routes>
          <Route path = '/' element = {<Form/>}></Route>
          <Route path='/container' element = {<Container/>}></Route>
          <Route path ='/about' element = {<About/>}></Route>
      </Routes>  
    </>
  );
}
export default App;
