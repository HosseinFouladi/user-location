import { ref } from "vue";
import { defineStore } from "pinia";
import type { User } from "@/utilities";

type FormDataType = {
  sortingType: "1" | "2"|"0";
  name: string;
};
export const useUserStore = defineStore("user", () => {
  const users = ref<Array<User>>();
  const formDatas = ref<FormDataType>({ sortingType: "0", name: "" });
  function setUsers(userlist: Array<User>) {
    users.value = userlist;
  }

  function setFormData(formData: FormDataType) {
    formDatas.value = formData;
  }

  return { users, setUsers, formDatas, setFormData };
});
