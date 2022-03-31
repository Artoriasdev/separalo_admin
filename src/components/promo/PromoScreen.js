import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { activateRow, loadPromo } from "../../actions/promo";

export const PromoScreen = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { promos } = useSelector((state) => state.promo);

  useEffect(() => {
    if (promos.length === 0) {
      dispatch(loadPromo());
    }
  }, [dispatch, promos.length]);

  const handleRedirectUpload = () => {
    history.push("/uploadPromo");
  };

  const handleActionEnable = (id, status) => {
    dispatch(activateRow(id, status));
  };

  const handleActionDisable = (id, status) => {
    dispatch(activateRow(id, status));
  };

  return (
    <div>
      <div>
        <label>Subir banner</label>
        <button
          type="submit"
          className="btn btn-outline-primary"
          onClick={handleRedirectUpload}
        >
          <i className="fas fa-upload"></i>
        </button>
      </div>

      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Descripcion</th>
            <th scope="col">ImgUrl</th>
            <th scope="col">Estado</th>
            <th scope="col">Activar/desactivar</th>
          </tr>
        </thead>
        <tbody>
          {promos
            .sort(
              ({ id: previousID }, { id: currentID }) => previousID - currentID
            )
            .map((item, i) => {
              return [
                <tr key={i}>
                  <td className="">{item.description} </td>
                  <td className="">{item.imgUrl} </td>
                  <td className="">
                    {item.enabled === "true" ? "Activo" : "Inactivo"}{" "}
                  </td>
                  <td className="">
                    {item.enabled === "true" ? (
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => handleActionEnable(item.id, false)}
                      >
                        Desactivar
                      </button>
                    ) : (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleActionDisable(item.id, true)}
                      >
                        Activar
                      </button>
                    )}
                  </td>
                </tr>,
              ];
            })}
        </tbody>
      </table>
    </div>
  );
};
