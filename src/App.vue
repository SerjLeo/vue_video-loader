<template>
    <v-app dark>
      <VideoLoader></VideoLoader>
    </v-app>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import VideoLoader from "@/components/VideoLoader.vue";

@Component({
  components: {
    VideoLoader
  }
})
export default class App extends Vue {

};
</script>
