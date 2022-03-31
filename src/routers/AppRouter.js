import React from "react";
import { Redirect } from "react-router-dom";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { NegocioScreen } from "../components/Negocio/NegocioScreen";
import { PromoScreen } from "../components/promo/PromoScreen";
import { ReservaScreen } from "../components/Reserva/ReservaScreen";
import { Upload } from "../components/upload/Upload";

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path={"/listapromo"} component={PromoScreen} />
          <Route exact path={"/uploadPromo"} component={Upload} />
          <Route exact path={"/listanegocio"} component={NegocioScreen} />
          <Route exact path={"/listareserva"} component={ReservaScreen} />

          <Redirect to="/listapromo" />
        </Switch>
      </div>
    </Router>
  );
};
