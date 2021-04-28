import React from "react";
import { products } from "./products";
import { connect } from "react-redux";


function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Shop = ({ dispatch }) => {

  
  return (
    <section className="container shop">
      <div className="row shop__row">
        {products.map((product, index) => {
          let imageSrc = require("" + product.image);
          return (
            <div key={index} className="col-md-4 shop__row-product">
              <img
                src={imageSrc.default}
                alt=""
                className="shop__row-product-image"
              />
              <h4>{product.title}</h4>
              <h4>{numberWithCommas(product.price)} تومان</h4>
              <button
                onClick={() => {
                  dispatch({
                    type: "addToCart",
                    payload: {
                      id: product.id,
                      title: product.title,
                      count: 1,
                      price: product.price,
                      image: product.image,
                    },
                  });
                }}
              >
                اضافه به سبد خرید
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};

function mapStateToProps(state) {
  const { cartItems, total, count } = state;
  return { cartItems, total, count };
}

export default connect(mapStateToProps)(Shop)
