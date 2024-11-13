<template>
  <div
    class="flex flex-col mb-8 lg:flex-row flex-wrap gap-4 justify-between items-center border lg:w-4/5 border-gray-200 rounded-lg p-4"
  >
    <div class="flex gap-4 flex-col lg:flex-row">
      <input
        class="p-2 border border-gray-300 rounded-lg"
        type="text"
        placeholder="name"
        v-model="userInfo.name"
      />
      <input
        class="p-2 border border-gray-300 rounded-lg"
        type="email"
        placeholder="email"
        v-model="userInfo.email"

      />
      <input
        class="p-2 border border-gray-300 rounded-lg"
        type="number"
        placeholder="latitude"
        v-model="userInfo.latitude"

      />
      <input
        class="p-2 border border-gray-300 rounded-lg"
        type="number"
        placeholder="longitude"
        v-model="userInfo.longitude"

      />
    </div>
    <button
      class="rounded-xl px-4 py-2 bg-green-600 text-white"
      @click="submitUser"
    >
      ثبت کاربر
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["userFormInfo"]);

const userInfo = ref({
  name: "",
  email: "",
  latitude: 0,
  longitude: 0,
});

//pass form input data to parent component
const submitUser = () => {
    emit('userFormInfo',userInfo.value)
};
</script>

<style scoped></style>
