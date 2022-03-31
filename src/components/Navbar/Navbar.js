import React from "react";

export const Navbar = () => {
  return (
    <div>
      <ul className="nav">
        <li className="nav-item">
          <a className="nav-link active" href="/listapromo">
            Promociones
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listanegocio">
            Negocios
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/listareserva">
            Reservas
          </a>
        </li>
      </ul>
    </div>
  );
};
