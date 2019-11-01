<template>
  <v-app>
    <v-app-bar height="60" flat color="rgba(199, 0, 255, 0.3)" app>
      <v-toolbar-title>
        <span class="font-weight-light headline text-uppercase">PROJECT</span>
        <span class="headline ml-1">MANAGER</span>
        <sup class="ml-1 grey--text caption">v0.5a</sup>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn @click="dialog = dialog ? false : true">Zaloguj się!</v-btn>
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

    <LoginDialog />
  </v-app>
</template>

<script>
import LoginDialog from "@/components/LoginDialog";
import { mapGetters, mapActions } from "vuex";

// import { db } from "@/fb";

export default {
  name: "App",
  components: {
    LoginDialog
  },
  data: () => ({
    dialog: false,
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
