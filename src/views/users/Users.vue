<script setup lang="ts">
import { User, useUserList } from "@/utilities";
import { onMounted, ref } from "vue";
import UserTable from "./components/UserTable.vue";

const users = ref<Array<User>>();
const isLoading = ref(true);
const errorMsg = ref("");

//get user list from api in initial render
onMounted(async () => {
  const data = await useUserList();
  isLoading.value = false;

  data.status === 200
    ? (users.value = data.data)
    : (errorMsg.value = "something went wrong plz try again");
});
</script>

<template>
  <div class="flex justify-center items-center min-h-screen w-full">
    <h1 v-if="isLoading">...is loading</h1>
  <p v-else-if="errorMsg" class="text-danger-500 text-xl">{{ errorMsg }}</p>
    <table
    className="border-2 border-black p-16 w-4/5 shadow rounded-2xl overflow-hidden"
  >
    <thead>
      <tr>
        <th className="p-3">نام</th>
        <th>ایمیل</th>
        <th>latitude</th>
        <th>longitude</th>
        <th>جزییات</th>
      </tr>
    </thead>
    <tbody>
    <UserTable
      v-for="user in users"
      :key="user.id"
      :name="user.name"
      :email="user.email"
      :lat="user.address.geo.lat"
      :long="user.address.geo.lng"
      :id="user.id"
    />
  </tbody>
  </table>
  </div>

</template>

<style scoped></style>
