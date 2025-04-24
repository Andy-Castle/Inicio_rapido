import LoginForm from "./LoginForm";
import AdminPanel from "./AdminPanel";

function RenderizadoCondicional() {
  // let content;
  let isLoggedIn = true;
  // if (isLoggedIn) {
  //   content = <AdminPanel />;
  // } else {
  //   content = <LoginForm />;
  // }

  // return <div>{content}</div>;

  //Este de arriba es una forma

  // return <div>{isLoggedIn ? <AdminPanel /> : <LoginForm />}</div>;

  //Este de arriba es otra forma

  return <div>{isLoggedIn && <AdminPanel />}</div>;

  //Este de arriba es una forma sin else
}

export default RenderizadoCondicional;
