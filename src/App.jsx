import MyButton from "./components/Button";
import AboutPage from "./components/About_Page";
import Styles from "./components/Styles";
import MostrarDatos from "./components/Mostrar_datos";
import RenderizadoCondicional from "./components/Renderizado_condicional";
import RenderizadoDeListas from "./components/RenderizadoDeListas";

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

      <AboutPage />
    </>
  );
}

export default App;
