import endpoints from "components/endpoints";
import { authAxios as axios } from "setup/auth/axios";
import { Params } from "components/types";
import getURLParams from "utils/getUrlParams";



class Services {
  async getAllTasks(param: TFormValues) {
    const response = await  axios({
      method: "GET",
      url: `${endpoints.tasks}`,
    });
    return response?.data?.data as DefaultData
  };

  async createTask(payload: Params) {
    return axios({
      method: "POST",
      url: endpoints.tasks,
      data: payload.data,
    });
  }
}

export default new Services();