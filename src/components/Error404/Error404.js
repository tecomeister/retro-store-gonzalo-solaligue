import "./Error404.css";

const Error404 = () => {
  return(
    <div>
      <div className="error__menu">
          <h2 className="error__menu__text">Error 404</h2>
      </div>
      <div className="error__container">
          <p className="error__container__text">La pagina que estas buscando no existe!</p>
      </div>
    </div>
  );
};

export default Error404;