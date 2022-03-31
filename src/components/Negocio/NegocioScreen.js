import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateRowNegocio, loadNegocio } from "../../actions/negocio";

export const NegocioScreen = () => {
  const dispatch = useDispatch();
  const { negocios } = useSelector((state) => state.negocio);

  useEffect(() => {
    if (negocios.length === 0) {
      dispatch(loadNegocio());
    }
  }, [dispatch, negocios.length]);

  const handleActionEnable = (id, status) => {
    dispatch(activateRowNegocio(id, status));
  };

  const handleActionDisable = (id, status) => {
    dispatch(activateRowNegocio(id, status));
  };

  return (
    <div>
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Nombre de Negocio</th>
            <th scope="col">Tradename</th>
            <th scope="col">Numero de documento</th>
            <th scope="col">Email</th>
            <th scope="col">Estado</th>
            <th scope="col">Activar/desactivar</th>
          </tr>
        </thead>
        <tbody>
          {negocios
            .sort(
              ({ id: previousID }, { id: currentID }) => previousID - currentID
            )
            .map((item, i) => {
              return [
                <tr key={i}>
                  <td className="">{item.businessName} </td>
                  <td className="">{item.tradeName} </td>
                  <td className="">{item.documentNumber} </td>
                  <td className="">{item.email} </td>
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
