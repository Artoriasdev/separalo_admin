import { enablePromotion, fileUpload, loadPromos } from "../helpers/fetch";
import { types } from "../types/types";

export const loadPromo = () => {
  return async (dispatch) => {
    const response = await loadPromos();
    const { data } = response.data;
    dispatch(promos(data));
  };
};

export const registerPromo = (redirectUrl, description, file) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      formData.append("file", file);

      const data = JSON.stringify({
        redirectUrl: redirectUrl,
        description: description,
      });

      formData.append("json", data);

      const response = await fileUpload(formData);
      return response;
    } catch (error) {
      console.log(error);
    }
  };
};

export const activateRow = (id, status) => {
  return async (dispatch) => {
    try {
      const resp = await enablePromotion(id, status);
      const { response } = resp.data;

      if (response === "true") {
        dispatch(loadPromo());
      }

      return resp;
    } catch (error) {
      console.log(error);
    }
  };
};

export const promos = (data) => ({
  type: types.loadPromo,
  payload: data,
});
