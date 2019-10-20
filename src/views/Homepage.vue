<template>
  <v-container id="homepage" class="fill-height" fluid>
    <v-container id="content" class="fill-height" fluid>
      <div>
        <div class="display-4 yellow black--text pa-2">Stwórz własny projekt.</div>
        <span
          class="float-right display-1 font-weight-light yellow pa-1 black--text"
        >Szybko i skutecznie.</span>
      </div>
    </v-container>
  </v-container>
  <!---->
</template>

<script>
export default {
  name: "homepage"
};
</script>

<style>
div {
  /* height: 100%; */
  /* background-color: red; */
}
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