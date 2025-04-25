import MyButton from "./components/Button";
import AboutPage from "./components/About_Page";
import Styles from "./components/Styles";
import MostrarDatos from "./components/Mostrar_datos";
import RenderizadoCondicional from "./components/Renderizado_condicional";
import RenderizadoDeListas from "./components/RenderizadoDeListas";
import ResponderAEventos from "./components/ResponderAEventos";
import ActualizarLaPantalla from "./components/ActualizarLaPantalla";
import MyButton2 from "./components/MyButton2";

import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <Styles />

      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton />
      </div>

      <MostrarDatos />

      <RenderizadoCondicional />

      <RenderizadoDeListas />

      <ResponderAEventos />

      <div>
        <h1>Contadores que se actualizan separadamente</h1>
        <ActualizarLaPantalla />
        <ActualizarLaPantalla />
      </div>

      <div>
        <h1>Contadores que se actualizan juntos</h1>
        <MyButton2 count={count} onClick={handleClick} />
        <MyButton2 count={count} onClick={handleClick} />
      </div>

      <AboutPage />
    </>
  );
}

export default App;
