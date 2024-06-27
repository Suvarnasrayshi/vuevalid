export const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      console.log("product",products);
      commit('SET_PRODUCTS', {products:products});
    } catch (error) {
      console.error('Error fetching productS here:', error);
    }
  },
async fetchCategories({ commit }) {
  try{
  const response = await fetch('https://fakestoreapi.com/products/categories');
  const categories = await response.json();
  console.log("data:",categories)
  commit('SET_CATEGORIES', {categories:categories});
  }
  catch (error) {
    console.error('Error fetching:', error);
  }
},

async fetchProductsByCategory({ commit }, category) {
  try{
  const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
  const products = await response.json();
  console.log("dataof fetch",products)
  commit('SET_PRODUCTS', {products:products});
  }
  catch (error) {
    console.error('Error fetching:', error);
  }
},


}

