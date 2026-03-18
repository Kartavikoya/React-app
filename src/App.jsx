import UseStateExamples from './hooks/useState/UseStateExample.jsx'
import Props from './hooks/useState/Props.jsx'
import Obj from './hooks/useState/UpdatingObjects.jsx';
import Brand from './hooks/useState/BrandFilter.jsx';
import Cart from './hooks/useState/AddtoCart.jsx';
import UseRefExamples from './hooks/useRef/UseRefExample.jsx';
import DomManipu from './hooks/useRef/DomManipulationref.jsx';
import UseReducerExamples from './hooks/useReducer/UseReducerExample.jsx';
import UseContext from './hooks/useContext/Exmple.jsx';

function App() {
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
      <UseContext/>
    </>
  );
}

export default App
