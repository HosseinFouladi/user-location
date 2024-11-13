<template>
  <div class="flex md:w-4/5 justify-between   py-4 border border-gray-200 rounded-lg px-4 mb-4 ">
    <div class="flex gap-24">
        <div class="relative w-[300px]">
      <input
        type="text"
        placeholder="جستجوبراساس نام"
        v-model="name"
        class="w-full p-2 border border-gray-300 rounded-lg"
      />
      <div
        v-if="checkAutoCompleteOpening"
        class="border absolute top-12 bg-white flex flex-col border-gray-300 w-full rounded-lg overflow-auto"
      >
        <span
          v-for="suggested in autoCompletedusers"
          class="cursor-pointer hover:bg-gray-100  p-2 w-full"
          @click="
            () => {
              name = suggested.name;
            }
          "
          >{{ suggested.name }}</span
        >
      </div>
    </div>
    <div class="flex gap-2 items-center">
        <label for="sort">مرتب سازی بصورت :</label>
        <select class="rounded-lg border border-gray-200 py-1 px-2" id="sort" v-model="sortType">
      <option value="1">صعودی</option>
      <option value="2">نزولی</option>
      <option value="0">هیچکدام</option>

    </select>
    </div>
    </div>
    <button class="rounded-xl px-4 py-2 bg-blue-600 text-white " @click="handleSearch">جستجو و مرتب سازی</button>
  </div>
</template>

<script setup lang="ts">
import type { User } from "@/utilities";
import { computed, ref, watch } from "vue";
import { useUserStore } from "@/stores/user";

type UserProps = {
  users: Array<User>;
};
const props = defineProps<UserProps>();

const {setFormData,formDatas}=useUserStore()
const name = ref(formDatas.name||"");
const sortType = ref<"1" | "2"|"0">(formDatas.sortingType||"0"); //1:asc 2:desc and 0 for default


//suggest user name to user on every input value changes
const autoCompletedusers = computed(() => {
  if (name.value === "") return [];
  return props.users.filter((item) => item.name.includes(name.value));
});

//check display of suggested box in ui
const checkAutoCompleteOpening = computed(() => {
  const nameExist = autoCompletedusers.value.some(
    (item) => item.name === name.value
  );
  return autoCompletedusers.value.length > 0 && !nameExist;
});

const handleSearch = () => {
    setFormData({
        name:name.value,
        sortingType:sortType.value
    })
    
};
</script>

<style scoped></style>
