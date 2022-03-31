import axios from "axios";

const baseUrl = process.env.REACT_APP_API_URL;

export const loadPromos = () => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let authApi = `${baseUrl}/administrator/promotion/getPromotions`;

  const response = axios
    .get(authApi, { headers: headers })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};

export const fileUpload = (formdata) => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let fileApi = `${baseUrl}/administrator/promotion/registerPromotion`;

  const response = axios
    .post(fileApi, formdata, { headers: headers })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};

export const enablePromotion = (id, status) => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let enableApi = `${baseUrl}/administrator/promotion/activateDeactivatePromotion?id=${id}&enabled=${status}`;

  const response = axios
    .put(enableApi, [], {
      headers: headers,
    })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};

export const loadNegocios = () => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let authApi = `${baseUrl}/administrator/business/getBusiness`;

  const response = axios
    .get(authApi, { headers: headers })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};

export const enableNegocio = (id, status) => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let enableApi = `${baseUrl}/administrator/business/activateDeactivateBusiness?id=${id}&enabled=${status}`;

  const response = axios
    .put(enableApi, [], {
      headers: headers,
    })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};

export const loadReservas = () => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let authApi = `${baseUrl}/administrator/reservation/getReservationPending`;

  const response = axios
    .get(authApi, { headers: headers })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};

export const payReserva = (id) => {
  var headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: "",
  };

  let enableApi = `${baseUrl}/administrator/reservation/paidReseration?id=${id}`;

  const response = axios
    .put(enableApi, [], {
      headers: headers,
    })
    .then((response) => {
      return response;
    })
    .catch(({ response }) => {
      return response;
    });

  return response;
};
