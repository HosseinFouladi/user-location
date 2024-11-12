<script setup lang="ts">
import * as L from 'leaflet';
import { onMounted, ref } from 'vue';

const map=ref()
onMounted(()=>{
  map.value = L.map("mapContainer").setView([46.05, 11.05], 5);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value);
})
</script>

<template>
  <div class="mapContainer" id="mapContainer" style="height:600px; width:800px">

</div>
</template>



<style scoped>

</style>