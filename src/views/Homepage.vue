<template>
  <v-container id="homepage" class="fill-height" fluid>
    <v-container id="content" class="fill-height" fluid>
      <div>
        <h1 class="display-4 white--text pa-2">Stwórz własny projekt.</h1>
        <h2
          class="float-md-right float-sm-left display-1 font-weight-light pa-1 grey--text"
        >Szybko i skutecznie.</h2>
      </div>

      <v-btn @click="switchLoginDialog">Zaloguj się!</v-btn>
    </v-container>
  </v-container>
  <!---->
</template>

<script>
import LoginDialog from "@/components/LoginDialog";
import { mapActions } from "vuex";

export default {
  name: "homepage",
  components: {
    LoginDialog
  },
  data: function() {
    return {
      dialog: false
    };
  },
  methods: {
    ...mapActions(["switchLoginDialog"])
  }
};
</script>

<style>
#homepage {
  position: relative;
  background: url("https://images.pexels.com/photos/159657/paint-notebook-brush-pencil-159657.jpeg");
  background-size: cover;
}

#homepage::after {
  position: absolute;
  z-index: 0;
  content: "";
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;

  background: rgba(0, 0, 0, 0.5);
}

#content {
  position: relative;
  z-index: 1;
}
</style>