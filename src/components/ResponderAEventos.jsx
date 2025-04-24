function ResponderAEventos() {
  function handleClick() {
    alert("Hiciste click");
  }

  return <button onClick={handleClick}>Hazme click</button>;
}

export default ResponderAEventos;
