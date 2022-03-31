import { types } from "../types/types";

const initialState = {
  reservas: [],
};

export const reservaReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadReserva:
      return {
        reservas: action.payload,
      };

    default:
      return state;
  }
};
