import UseStateExamples from './hooks/useState/UseStateExample.jsx'
import Props from './hooks/useState/Props.jsx'
import Obj from './hooks/useState/UpdatingObjects.jsx';
import Brand from './hooks/useState/BrandFilter.jsx';
import Cart from './hooks/useState/AddtoCart.jsx';

function App() {
  return (
    <>
      {/* show examples and props component */}
      <UseStateExamples />
      <Props />
      <Obj/>
      <Brand/>
      <Cart/>
    </>
  );
}

export default App
