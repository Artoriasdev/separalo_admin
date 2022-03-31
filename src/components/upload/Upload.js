import React from "react";
import { useDispatch } from "react-redux";
import { registerPromo } from "../../actions/promo";
import { Formik } from "formik";
import { useHistory } from "react-router-dom";

export const Upload = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  let fileUpload = [];

  const handleAttach = (e) => {
    let file = e.target.files[0];
    fileUpload = file;
  };

  return (
    <div>
      <Formik
        initialValues={{
          redirectUrl: "",
          description: "",
          file: [],
        }}
        validate={(values) => {
          const errors = {};
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          const { redirectUrl, description } = values;
          dispatch(registerPromo(redirectUrl, description, fileUpload));
          history.push("/listapromo");
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <form
            onSubmit={handleSubmit}
            className="animate__animated animate__fadeIn animate__faster form-group"
            style={{ width: "50%" }}
          >
            <input
              type="text"
              placeholder="redirecturl"
              name="redirectUrl"
              className="form-control"
              autoComplete="off"
              value={values.redirectUrl}
              onChange={handleChange}
            />

            <br />

            <input
              type="text"
              placeholder="description"
              name="description"
              className="form-control"
              autoComplete="off"
              value={values.description}
              onChange={handleChange}
            />

            <br />

            <input
              id="fileSelector"
              type="file"
              name="fileUpload"
              onChange={handleAttach}
            />

            <br />
            <br />
            <button type="submit" className="btn btn-primary">
              Subir
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};
