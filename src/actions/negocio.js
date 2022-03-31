import { enableNegocio, loadNegocios } from "../helpers/fetch";
import { types } from "../types/types";

export const loadNegocio = () => {
  return async (dispatch) => {
    const response = await loadNegocios();
    const { data } = response.data;
    dispatch(negocios(data));
  };
};

export const negocios = (data) => ({
  type: types.loadNegocio,
  payload: data,
});

export const activateRowNegocio = (id, status) => {
  return async (dispatch) => {
    try {
      const resp = await enableNegocio(id, status);
      const { response } = resp.data;

      if (response === "true") {
        dispatch(loadNegocio());
      }

      return resp;
    } catch (error) {
      console.log(error);
    }
  };
};
