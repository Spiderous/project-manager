import Vue from "vue";
import Vuex from "vuex";

import { db } from "@/fb.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    products: [],
    dialog: false,
    xd: false
  },
  mutations: {
    addProducts: (state, products) => {
      state.products = [...state.products, ...products];
    },
    switchDialog: (state) => {
      state.dialog = !state.dialog;
    }
  },
  actions: {
    fetchProjects: async context => {
      const snapshot = await db.collection('demo_projects').get();

      let products = [];

      snapshot.forEach(doc => {
        const { id } = doc;
        const { name, desc, added } = doc.data();

        products.push({
          id,
          name,
          desc,
          added
        })
      });

      context.commit('addProducts', products);
    },
    switchLoginDialog: (context) => {

      context.commit('switchDialog');
      console.log(context.state.dialog);
    }
  },
  getters: {
    getProducts: state => {
      return state.products.map(product => ({
        ...product,
        added: new Date(product.added.seconds * 1000).toDateString()
      }))
    },
    getDialogState: state => state.dialog,
    test: state => state.xd
  }
});
