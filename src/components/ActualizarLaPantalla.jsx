import { useState } from "react";

function ActualizarLaPantalla() {
  const [count, setCount] = useState(0);
  //(count) es el estado actual
  //(setcount) es la funcion que te permite actualizarlo
  /*
  Se pueden llamar como sea, pero que siga esta convencion
  [something, setSomething]
  */

  function handleClick() {
    setCount(count + 1);
  }

  return <button onClick={handleClick}>Hicieste click {count} veces</button>;
}

export default ActualizarLaPantalla;
