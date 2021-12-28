import React, { useEffect } from 'react';
import { CgShoppingCart } from 'react-icons/cg';
import clsx from 'clsx';

import { useStore, actions } from 'StoreContext';

const Index = ({ moveable }) => {
  const [state, dispatch] = useStore();
  const cartBtn = clsx('cartBtn', {
    cartMove: moveable,
  });
  useEffect(() => {
    dispatch(actions.setTotal(state.inCart.length));
  }, [state.inCart]);
  return (
    <div className={cartBtn}>
      <CgShoppingCart size="3rem" />
      <span className="quantity">{state.total}</span>
    </div>
  );
};

export default Index;
