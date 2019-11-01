<template>
  <v-dialog v-model="getState" max-width="450">
    <v-card flat>
      <v-card-title>{{ registerSwitch ? "Rejestracja" : "Logowanie" }}</v-card-title>

      <v-card-text>
        <span
          class="font-weight-light"
        >{{ registerSwitch ? "Zarejestruj" : "Zaloguj" }} się, aby korzystać z pełnej oferty!</span>
        <v-form v-model="valid">
          <v-text-field dense append-icon="mdi-account" class="mt-3" outlined label="Email"></v-text-field>
          <v-text-field
            dense
            append-icon="mdi-lock-outline"
            class
            outlined
            label="Hasło"
            :counter="20"
          ></v-text-field>
          <v-text-field
            :disabled="!registerSwitch"
            dense
            append-icon="mdi-lock-outline"
            class
            outlined
            label="Powtórz hasło"
          ></v-text-field>
        </v-form>
      </v-card-text>

      <!-- <v-card-actions> -->
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-btn @click="clicked" :loading="loading" outlined class="animated">
            <span class="title">{{ registerSwitch ? "Zarejestruj" : "Zaloguj się!" }}</span>
          </v-btn>
        </v-row>
        <v-row align="center" justify="center">
          <v-checkbox class="mx-4 font-weight-bold" v-model="registerSwitch" label="Rejestracja"></v-checkbox>
        </v-row>
      </v-container>

      <!-- </v-card-actions> -->
    </v-card>
  </v-dialog>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "login-dialog",
  data: function() {
    return {
      valid: false,
      registerSwitch: false,
      loading: false
    };
  },
  computed: {
    ...mapGetters(["getDialogState"]),
    getState: {
      get: function() {
        return this.getDialogState;
      },
      set: function(newValue) {
        this.switchLoginDialog();
      }
    },
    computedSwitchOption: function() {
      return this.registerSwitch ? "Rejestracja" : "Logowanie";
    }
  },
  methods: {
    ...mapActions(["switchLoginDialog"]),
    clicked() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.switchLoginDialog();
      }, 2000);
    }
  }
};
</script>

<style>
.animated {
  transition: all 1s;
}
</style>