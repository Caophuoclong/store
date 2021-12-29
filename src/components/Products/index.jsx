import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { FaCartPlus, FaCartArrowDown } from 'react-icons/fa';
import { toast } from 'react-toastify';

import styles from './Product.module.css';
import { useStore, actions } from 'StoreContext';
const Index = ({ children }, ref) => {
  const [state, dispatch] = useStore();
  const productList = clsx(styles.productList);
  const product = clsx(styles.product);
  const image = clsx(styles.image);
  const title = clsx(styles.title, 'truncate');
  const price = clsx(styles.price);
  const btnFn = clsx(styles.btnFn);
  const btn = clsx(styles.btn);
  const btnTitle = clsx(styles.btnTitle);
  const handleAddToCart = (item) => {
    dispatch(actions.addToCart(item));
    toast.success('🦄 Wow so easy!');
  };
  const handleBuyNow = (id) => {};
  return (
    <ul ref={ref} className={productList}>
      {children.map((item, index) => (
        <li key={index} className={product} title={item.title}>
          <div className={btnFn}>
            <button className={btn}>
              <FaCartArrowDown size="1.5rem" />
              <span
                className={btnTitle}
                onClick={() => {
                  handleBuyNow(item);
                }}
              >
                Buy now!
              </span>
            </button>
            <button className={btn}>
              <FaCartPlus size="1.5rem" />
              <span
                className={btnTitle}
                onClick={() => {
                  handleAddToCart(item);
                }}
              >
                Add to cart!
              </span>
            </button>
          </div>
          <img src={item.image} className={image} alt={item.description} />
          <span className={title} title={item.title}>
            {item.title}
          </span>
          <span className={price}>{item.price}$</span>
        </li>
      ))}
    </ul>
  );
};

export default forwardRef(Index);
