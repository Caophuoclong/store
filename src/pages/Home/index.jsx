import React from 'react';
import { useStore } from 'StoreContext';

import SlickCarousel from 'components/SlickCarousel';
import Products from 'components/Products';

const Index = () => {
  const [state, dispatch] = useStore();
  return (
    <main>
      <SlickCarousel items={state.products} />
      <h1 className="textPrimary">Sản phẩm</h1>
      <Products>{state.products}</Products>
    </main>
  );
};

export default Index;
