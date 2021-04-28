
export function reducer(state, action) {
  if (action.type === "increase") {
    if (action.payload) {
      function increaseCount(productId) {
        return state.cartItems.map((item) => {
          if (item.id === productId) {
            return { ...item, count: item.count + 1 };
          } else {
            return item;
          }
        });
      }
      return {
        ...state,
        cartItems: increaseCount(action.payload),
      };
    }
  }

  if (action.type === "decrease") {
    if (action.payload) {
      function decreaseCount(productId) {
        return state.cartItems.filter(item =>{
          if (item.id === productId && item.count <= 1) {
            return item.id !== productId;
          } else {
            return item;
          }
        }).map((item) => {
          if (item.id === productId) {
              return { ...item, count: item.count - 1 };
          } else {
            return item;
          }
        });
      }
      return {
        ...state,
        cartItems: decreaseCount(action.payload),
      };
    }
  }

  if (action.type === "sums") {
    return {
      ...state,
      count: action.payload.count,
      total: action.payload.total,
    };
  }
  
  if (action.type === "addToCart") {
      const findMatch = state.cartItems.find(item =>{
        return item.id == action.payload.id;
      })
      if (!findMatch) {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
          count: state.count + 1,
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems],
        };
      }
  }

  return state;
}
