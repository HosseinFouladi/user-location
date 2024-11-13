<template>
  <div class="flex justify-center items-center min-h-screen w-full">
    <div v-if="isLoading" class="">...isLoading</div>
    <div v-else-if="errMsg" class="">{{ errMsg }}</div>
    <div v-else class="overflow-auto">
      <Map
        :long="user.address.geo.lng"
        :lat="user.address.geo.lat"
        :city="user.address.city"
        :street="user.address.street"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { User, useUserDetails } from "@/utilities";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import Map from "@/components/Map.vue";
import { useUserStore } from "@/stores/user";

const { id } = useRoute().params;
const {users}=useUserStore()
const user = ref<User>();
const isLoading = ref(true);
const errMsg = ref("");

onMounted(async () => {
  try {
    user.value = (await useUserDetails(+id)).data;
  } catch (err) {
    user.value=users.find((item)=>item.id===+id)//if user not found in api we fetch from store
    if(!user)
    errMsg.value = "something went wrong.plz try again";
  } finally {
    isLoading.value = false;
  }
});
</script>

<style scoped></style>
