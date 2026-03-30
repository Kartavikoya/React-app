import '../../App.css';
import { Navbar } from '../../components/Navbar';
import { Products } from '../../components/Products';
import products from '../../db/Product';

function Exmp(){
    return(
        <>
            <div className='app'>
                <Navbar className ="app"/>
                <h1 className='app'>Products</h1>
                <div className='flex gap-16px app'>
                    {
                        products?.length > 0 && products.map(products=>(
                            <Products key={products.id} product={products}/>
                        ))
                    }
                </div>
            </div>

        </>
    )
}


export default function E1() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      {/* <h1>Use Context</h1> */}
      <Exmp />
    </div>
  );
}