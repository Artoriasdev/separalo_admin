import { types } from "../types/types";

const initialState = {
  negocios: [],
};

export const negocioReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadNegocio:
      return {
        negocios: action.payload,
      };
    default:
      return state;
  }
};
