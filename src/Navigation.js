import React, {useEffect, useState} from 'react';
import {
  Link,
} from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { connect } from "react-redux";

const Navigation = ({ count }) => {

  useEffect(() => {
    if(count > 0){
      document.querySelector("a[data-text] span").innerHTML = count;
      document.querySelector("a[data-text] span").classList.add("showCount");
    }else{
      document.querySelector("a[data-text] span").innerHTML = count;
      document.querySelector("a[data-text] span").classList.remove("showCount");
    }
    
  }, [count]);

  return (
    <div className="navigation">
      <nav className="navigation__nav">
        <ul className="navigation__nav-list">
          <li className="navigation__nav-list-item">
            <Link to="/">فروشگاه</Link>
          </li>
          <li className="navigation__nav-list-item">
            <Link to="/cart" data-text="0">
              {" "}
              <FaShoppingCart />{" "}
              <span>3</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

function mapStateToProps(state) {
  const { count } = state;
  return { count };
}

export default connect(mapStateToProps)(Navigation)
