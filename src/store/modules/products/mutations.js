export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products.products;
    console.log(state.products);
  },

  SET_CATEGORIES(state, categories) {
    state.categories = categories.categories;
  },

  SET_CART: (state, cart) => {
    state.cart = cart.cart; 
    console.log("Fetched Cart Items:", cart.cart); 
    console.log("State Cart:", state.cart); 
  },
};