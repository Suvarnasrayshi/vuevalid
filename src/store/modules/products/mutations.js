export const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products.products;
    console.log(state.products);
  },

  SET_CATEGORIES(state, categories) {
    state.categories = categories.categories;
  },
};