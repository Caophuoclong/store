import React from 'react';
import { CgSearch } from 'react-icons/cg';
const Index = () => {
  return (
    <div className="searchContainer">
      <input type="text" className="search" />
      <button className="searchIcon">
        <CgSearch size="3rem" />
      </button>
    </div>
  );
};

export default Index;
