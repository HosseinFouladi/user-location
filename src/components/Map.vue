<script setup lang="ts">
import * as L from 'leaflet';
import { onMounted, ref } from 'vue';
const props=defineProps({
  lat:{type:String,default:'46.05'},
  long:{type:String,default:"11.05"},
  street:{type:String},
  city:{type:String}
})
const map=ref()
onMounted(()=>{
  map.value = L.map("mapContainer").setView([+props.lat,+props.long], 2);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map.value);

    //add marker to current loacation of user in map with user and street info
    L.marker([+props.lat,+props.long]).addTo(map.value)
    .bindPopup(`${props.city},${props.street}`)
    .openPopup();
})
</script>

<template>
  <div class="mapContainer" id="mapContainer" style="height:600px; width:600px">

</div>
</template>



<style scoped>

</style>