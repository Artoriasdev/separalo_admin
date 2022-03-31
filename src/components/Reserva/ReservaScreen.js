import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activateRowReserva, loadReserva } from "../../actions/reserva";

export const ReservaScreen = () => {
  const dispatch = useDispatch();
  const { reservas } = useSelector((state) => state.reserva);

  useEffect(() => {
    if (reservas.length === 0) {
      dispatch(loadReserva());
    }
  }, [dispatch, reservas.length]);

  const handleActionPagar = (id) => {
    dispatch(activateRowReserva(id));
  };

  return (
    <div>
      <br />

      <table className="table">
        <thead>
          <tr>
            <th scope="col">Codigo Reserva</th>
            <th scope="col">Correo del cliente</th>
            <th scope="col">Numero de documento</th>
            <th scope="col">Categoria</th>
            <th scope="col">Tradename</th>
            <th scope="col">Titulo Servicio</th>
            <th scope="col">Precio</th>
            <th scope="col">Fecha</th>
            <th scope="col">Tiempo</th>
            <th scope="col">Estado</th>
            <th scope="col">Pagar</th>
          </tr>
        </thead>
        <tbody>
          {reservas
            .sort(
              ({ id: previousID }, { id: currentID }) => previousID - currentID
            )
            .map((item, i) => {
              return [
                <tr key={i}>
                  <td className="">{item.preCodeReservation} </td>
                  <td className="">{item.emailCustomer} </td>
                  <td className="">{item.mobileCustomer} </td>
                  <td className="">{item.category} </td>
                  <td className="">{item.tradeName} </td>
                  <td className="">{item.titleService} </td>
                  <td className="">{item.price} </td>
                  <td className="">{item.dateReservation} </td>
                  <td className="">{item.timeReservation} </td>
                  <td className="">{item.state} </td>
                  <td className="">
                    {item.state !== "Pagada" && (
                      <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => handleActionPagar(item.id)}
                      >
                        Pagar
                      </button>
                      // <button
                      //   type="button"
                      //   className="btn btn-secondary"
                      //   onClick={() => handleActionEnable(item.id)}
                      // >
                      //   Desactivar
                      // </button>
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
