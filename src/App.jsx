import MyButton from "./components/Button";
import AboutPage from "./components/About_Page";
import Styles from "./components/Styles";
import MostrarDatos from "./components/Mostrar_datos";
import RenderizadoCondicional from "./components/Renderizado_condicional";
import RenderizadoDeListas from "./components/RenderizadoDeListas";
import ResponderAEventos from "./components/ResponderAEventos";
import ActualizarLaPantalla from "./components/ActualizarLaPantalla";

function App() {
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

      <AboutPage />
    </>
  );
}

export default App;
