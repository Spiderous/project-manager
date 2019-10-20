<template>
  <v-app>
    <v-app-bar height="60" flat color="rgba(199, 0, 255, 0.3)" app>
      <v-toolbar-title>
        <span class="font-weight-light headline text-uppercase">PROJECT</span>
        <span class="headline ml-1">MANAGER</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <LoginPopUp />

      <!-- <v-menu offset-y v-if="logged">
        <template v-slot:activator="{ on }">
          <v-btn depressed v-on="on">
            <span class="headline">MENU</span>
          </v-btn>
        </template>

        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" router :to="item.route">
            <v-icon left class="primary--text">{{ item.icon }}</v-icon>
            <v-list-item-content>
              <v-list-item-title class="body-1">{{item.desc}}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-menu>-->
    </v-app-bar>

    <v-content>
      <v-container class="pa-0 fill-height" fluid>
        <router-view></router-view>
      </v-container>
    </v-content>

    <!-- <v-content>
      <v-container fluid>
        <v-list>
          <v-list-item class="mx-2" v-for="product in getProducts" :key="product.id">
            <v-list-item-content>
              <v-list-item-title>{{ product.name }}</v-list-item-title>
              <v-list-item-subtitle>{{ product.added }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ product.desc }}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-content>-->
  </v-app>
</template>

<script>
import LoginPopUp from "@/components/LoginPopUp";
import { mapGetters, mapActions } from "vuex";

// import { db } from "@/fb";

export default {
  name: "App",
  components: {
    LoginPopUp
  },
  data: () => ({
    logged: false,
    docs: [],
    items: [
      { desc: "Home", route: "/home", icon: "mdi-home" },
      { desc: "About", route: "/about", icon: "mdi-information" }
    ]
  }),
  computed: {
    ...mapGetters(["getProducts"])
  },
  methods: {
    ...mapActions(["fetchProjects"])
  },
  mounted() {
    this.fetchProjects();
  }
};
</script>
