import Vue from 'vue';
import Vuetify from 'vuetify/lib';
// import { colors } from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi',
  },
  theme: {
    dark: true,
    themes: {
      dark: {
        primary: '#43A047',
        secondary: '#37474F',
        warning: "#FFAB40",
        accent: '#26C6DA',
        error: '#FF1744'
      }
    }
  }
});
