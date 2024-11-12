import ApiCall from "./AxiosSetting";
import type { ApiResponseType, User } from "./user.type";

//custom hook for calling userlist api
export const useUserList = async (): Promise<ApiResponseType<Array<User>>> => {
  return await ApiCall.get("users");
};
