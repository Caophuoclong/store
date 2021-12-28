import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';

import { useStore } from 'StoreContext';
const Index = () => {
  const [state, dispatch] = useStore();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {!state.isTop && (
        <button onClick={scrollToTop} className="toTop">
          <BsFillArrowUpCircleFill size="3rem" fill="#ffb123" />
        </button>
      )}
    </>
  );
};

export default Index;
