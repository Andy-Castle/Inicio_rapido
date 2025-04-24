import MyButton from "./components/Button";
import AboutPage from "./components/About_Page";
import Styles from "./components/Styles";
import MostrarDatos from "./components/Mostrar_datos";

function App() {
  return (
    <>
      <Styles />

      <div>
        <h1>Bienvenido a mi aplicación</h1>
        <MyButton />
      </div>

      <MostrarDatos />

      <AboutPage />
    </>
  );
}

export default App;
