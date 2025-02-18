import '../App.css';
import Navbar from '../components/navBar';
import ProductsSearch from './productSearch';

function WomenProducts() {
  return (<>
            <div className="container-fluid bg-white">
              <Navbar></Navbar>
            </div>
            <div className="container bg-white">
              <div className="row">
                <ProductsSearch/>
              </div>
            </div>
          </>);
  }

export default WomenProducts;