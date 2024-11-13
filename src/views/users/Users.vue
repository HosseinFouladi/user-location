<script setup lang="ts">
import { User, useUserList } from "@/utilities";
import { computed, onMounted, ref } from "vue";
import UserTable from "./components/UserTable.vue";
import FilterForm from "./components/FilterForm.vue";
import { useUserStore } from "@/stores/user";
import { storeToRefs } from "pinia";
import UserForm from "./components/UserForm.vue";

//const users = ref<Array<User>>();
const isLoading = ref(true);
const errorMsg = ref("");

const store = useUserStore();
const { formDatas,users } = storeToRefs(store);
const{setUsers}=store

//get user list from api in initial render
onMounted(async () => {
  if(users.value&&users.value.length>0) {
    isLoading.value=false;
    return
  };
  const data = await useUserList();
  isLoading.value = false;

  data.status === 200
    ? (setUsers(data.data))
    : (errorMsg.value = "something went wrong plz try again");
});

//get searched or sorted user whenever form fields changes
const searchedUsers = computed(() => {
  const searchedValues = users.value.filter((item) =>
    item.name.includes(formDatas.value.name)
  );
  if (formDatas.value.sortingType === "0") return searchedValues;
  else if (formDatas.value.sortingType === "1")
    return searchedValues.sort((a, b) => {
      const nameA = a.name.toUpperCase(); // ignore upper and lowercase
      const nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
  return searchedValues.sort((a, b) => {
    const nameA = a.name.toUpperCase(); // ignore upper and lowercase
    const nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return 1;
    }
    if (nameA > nameB) {
      return -1;
    }

    // names must be equal
    return 0;
  });
});

//submit new user
const storeUser = (info) => {
  setUsers([
    ...users.value,
    {
      id: Math.random() * 1000 + 1,
      name: info.name,
      email: info.email,
      username: "",
      address: {
        street: "",
        suite: "",
        city: "",
        zipcode: "",
        geo: {
          lat: info.latitude,
          lng: info.longitude,
        },
      },
      phone: "",
      website: "",
      company: {
        name: " ",
        catchPhrase: "",
        bs: "",
      },
    },
  ]);
};
</script>

<template>
  <div class="flex justify-center flex-col items-center min-h-screen w-full">
    <h1 v-if="isLoading">...is loading</h1>
    <p v-else-if="errorMsg" class="text-danger-500 text-xl">{{ errorMsg }}</p>
    <div class="w-full flex flex-col justify-center items-center" v-else>
      <UserForm @user-form-info="storeUser" />
      <FilterForm :users="users" />
      <table
        className="border-2 border-gray-300 p-16 md:w-4/5 shadow rounded-2xl overflow-hidden"
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
            v-for="user in users ? searchedUsers : users"
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
  </div>
</template>

<style scoped></style>
