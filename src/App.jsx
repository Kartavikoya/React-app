import UseStateExamples from './hooks/useState/UseStateExample.jsx'
import Props from './hooks/useState/Props.jsx'
import Obj from './hooks/useState/UpdatingObjects.jsx';
import Brand from './hooks/useState/BrandFilter.jsx';
// import Cart from './hooks/useState/AddtoCart.jsx';
import UseRefExamples from './hooks/useRef/UseRefExample.jsx';
import DomManipu from './hooks/useRef/DomManipulationref.jsx';
import UseReducerExamples from './hooks/useReducer/UseReducerExample.jsx';
import UseContext from './hooks/useContext/Exmple.jsx';
// import E1 from './hooks/contextandreducer/FirstExample.jsx';
import Redu1 from './ReduxExample/reduxexmp.jsx';
import { Link, NavLink, Route, Routes } from 'react-router-dom'; 
import {Home} from './pages/Home/index.jsx';
import {Cart} from './pages/Cart/index.jsx';
import {About} from './pages/About/index.jsx';

function App() {
  const getStyles =({isActive}) => {
    return{
      color:isActive ? 'red' : ''
    }
  }
  return (
    <>
      {/* show examples and props component */}
      {/* <UseStateExamples />
      <Props />
      <Obj/>
      <Brand/>
      <Cart/> */}
      {/* <UseRefExamples/>
      <DomManipu/> */}
      {/* <UseReducerExamples/> */}
      {/* <UseContext/> */}
      {/* <E1/> */}
      {/* <Redu1/> */}
      <div className='App'>
        {/* <a href="/">Home</a> */}
        {/* <Link to='/'>Home</Link>||
        <Link to="/cart">Cart</Link>||        
        <Link to="/about">About</Link>|| */}
        <NavLink to ='' style={getStyles}>Home</NavLink>
        <NavLink to ='/cart' style={getStyles}>Cart</NavLink>
        <NavLink to ='/about' style={getStyles}>About</NavLink>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/cart' element ={<Cart/>}/>
          <Route path='/about' element ={<About/>}/>
        </Routes>        

      </div>
    </>
  );
}

export default App
