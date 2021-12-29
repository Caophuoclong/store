import React, { useEffect, useRef, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';

import { useStore } from 'StoreContext';
import Products from 'components/Products';

const Index = ({ children }) => {
  const [state, dispatch] = useStore();
  const [loading, setLoading] = useState(false);
  const loadItem = (prevArray = []) => {
    let newArray = [...prevArray];
    newArray = [...newArray, ...prevArray];
    return newArray;
  };
  const handleLoadMore = () => {
    setLoading(true);
    loadItem(state.products);
    setLoading(false);
  };
  const infiniteRef = useInfiniteScroll({
    loading,
    // This value is set to "true" for this demo only. You will need to
    // get this value from the API when you request your items.
    hasNextPage: true,
    threshold: 400,
    onLoadMore: handleLoadMore,
    scrollContainer: 'window',
  });
  const ref = useRef();
  useEffect(() => {
    console.log(ref);
  }, [ref]);
  let x;
  return (
    <div
    // style="height:700px;overflow:auto;"
    >
      {/* <Products ref={infiniteRef}>{state.products}</Products> */}
      <ul ref={infiniteRef}>
        {state.products.map((item) => (
          <li key={item.key}>
            {item.title}
            <img src={item.image} />
          </li>
        ))}
        {loading && <li>Loading...</li>}
      </ul>
    </div>
  );
};

export default Index;
