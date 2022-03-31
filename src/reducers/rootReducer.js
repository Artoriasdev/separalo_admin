import { combineReducers } from "redux";
import { negocioReducer } from "./negocioReducer";
import { promoReducer } from "./promoReducer";
import { reservaReducer } from "./reservaReducer";

export const rootReducer = combineReducers({
  promo: promoReducer,
  negocio: negocioReducer,
  reserva: reservaReducer,
});
