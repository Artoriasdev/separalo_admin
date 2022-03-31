import { loadReservas, payReserva } from "../helpers/fetch";
import { types } from "../types/types";

export const loadReserva = () => {
  return async (dispatch) => {
    const response = await loadReservas();
    const { data } = response.data;
    dispatch(reservas(data));
  };
};

export const activateRowReserva = (id) => {
  return async (dispatch) => {
    try {
      const resp = await payReserva(id);
      const { response } = resp.data;

      if (response === "true") {
        dispatch(loadReserva());
      }

      return resp;
    } catch (error) {
      console.log(error);
    }
  };
};

export const reservas = (data) => ({
  type: types.loadReserva,
  payload: data,
});
