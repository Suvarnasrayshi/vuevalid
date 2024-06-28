export const actions = {
  async fetchProducts({ commit }) {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const products = await response.json();
      console.log("product", products);
      commit('SET_PRODUCTS', { products: products });
    } catch (error) {
      console.error('Error fetching productS here:', error);
    }
  },
  async fetchCategories({ commit }) {
    try {
      const response = await fetch('https://fakestoreapi.com/products/categories');
      const categories = await response.json();
      console.log("data:", categories)
      commit('SET_CATEGORIES', { categories: categories });
    }
    catch (error) {
      console.error('Error fetching categories:', error);
    }
  },

  async fetchProductsByCategory({ commit }, category) {
    try {
      const response = await fetch(`https://fakestoreapi.com/products/category/${category}`);
      const products = await response.json();
      console.log("dataof fetch", products)
      commit('SET_PRODUCTS', { products: products });
    }
    catch (error) {
      console.error('Error fetching products:', error);
    }
  },

  async fetchCart({ commit }) {
    // try {
    //   let products=[];
    //   const response = await fetch('https://fakestoreapi.com/carts');
    //   const cart = await response.json();
    //   // console.log("cart action details:", cart);
    //  await Promise.all(cart.map(async (cart) => {
    //     // console.log("cartdata", cart.products)
    //   await Promise.all(cart.products.map(async (products) => {
    //       // console.log("cartdataiddata", products.productId)
    //       const response = await fetch(`https://fakestoreapi.com/products/${products.productId}`)
    //       const productData = await response.json()
    //     products.push(productData)
    //     }))
    //   }))
    //   commit('SET_CART', { cart: products });
    // } catch (error) {
    //   console.error('error in fetching of the cart details', error)
    // }
    try {
      const response = await fetch('https://fakestoreapi.com/carts');
      const cart = await response.json();
     
      let products = [];
      await Promise.all(cart.map(async (cart) => {
        await Promise.all(cart.products.map(async (product) => {
          const response = await fetch(`https://fakestoreapi.com/products/${product.productId}`);
          const productData = await response.json();
          products.push(productData);
        }));
      }));
     
      commit('SET_CART', { cart: products });
    } catch (error) {
      console.error('Error fetching cart details', error);
    }
  }

}

