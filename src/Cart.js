import { useEffect } from "react";
import { connect } from "react-redux";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function Cart({ cartItems, total, count, dispatch }) {

  useEffect(() => {
    const calc = cartItems.reduce(
      (sum, item) => {
        let total = sum.total + item.price * item.count;
        let count = sum.count + item.count;
        return { total, count };
      },
      { total: 0, count: 0 }
    );
    dispatch({ type: "sums", payload: calc });
  }, [cartItems]);

  return (
    <section className="App">
      <div className="container cart">
        <div className="row cart__head">
          <h1 className="col-sm-12">سبد خرید</h1>
          <aside className="col-sm-12 cart__head-sum">
            <div className="cart__head-sum-count">
              <h3>تعداد:</h3>
              <h3>{count}</h3>
            </div>
            <div className="cart__head-sum-total">
              <h3>جمع کل:</h3>
              <h3> {numberWithCommas(total)} تومان</h3>
            </div>
          </aside>
        </div>
        <div className="row cart__body">
          <ul className="cart__body-list">
            {cartItems.length !== 0 ? (
              cartItems.map((product, index) => {
                let imageSrc = require("" + product.image);
                return (
                  <li className="cart__body-list-item" key={index}>
                    <div className="cart__body-list-item-info">
                      <h2>{product.title}</h2>
                      <h3> {numberWithCommas(product.price)} تومان</h3>
                      <img src={imageSrc.default} alt="" />
                    </div>
                    <div className="cart__body-list-item-qty">
                      <button
                        onClick={() =>
                          dispatch({ type: "increase", payload: product.id })
                        }
                      >
                        +
                      </button>
                      <h3>{product.count}</h3>
                      <button
                        onClick={() =>
                          dispatch({ type: "decrease", payload: product.id })
                        }
                      >
                        -
                      </button>
                    </div>
                  </li>
                );
              })
            ) : (
              <h1 className="emptyCart">سبد خرید خالی است.</h1>
            )}
            {}
          </ul>
        </div>
      </div>
    </section>
  );
}

function mapStateToProps(state) {
  const { cartItems, total, count } = state;
  return { cartItems, total, count };
}

export default connect(mapStateToProps)(Cart);
