import { useEffect, useState } from 'react';
import { Items } from './components/Items';
import { useProducts } from './hooks/useProducts';

function App() {
  const products = useProducts();
  const threasholdItems = 8;
  const [noOfProducts, setNoOfProducts] = useState(threasholdItems);
  const showMore = () => {
    if (noOfProducts <= products.length) {
      setNoOfProducts(noOfProducts + threasholdItems);
    }
  };
  return (
    <div className='container'>
      <header className='app-header'>
        <h1>AKSHAY ARTHAM's Solution</h1>
      </header>
      <section>
        <Items items={products.slice(0, noOfProducts)} />
        {noOfProducts < products.length ? (
          <div className='actions'>
            <button className='primary' onClick={showMore}>
              Show More
            </button>
          </div>
        ) : null}
      </section>
    </div>
  );
}

export default App;
