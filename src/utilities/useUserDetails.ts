import ApiCall from "./AxiosSetting";
import type { ApiResponseType, User } from "./user.type";

//custom hook for getting user by id
export const useUserDetails = async (id:number): Promise<ApiResponseType<User>> => {
  return await ApiCall.get(`users/${id}`);
};