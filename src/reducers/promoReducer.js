import { types } from "../types/types";

const initialState = {
  promos: [],
};

export const promoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.loadPromo:
      return {
        promos: action.payload,
      };

    default:
      return state;
  }
};
