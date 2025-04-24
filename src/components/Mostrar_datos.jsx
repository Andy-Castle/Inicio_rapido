import "../styles/Styles.css";

const user = {
  name: "Plastic Man - Harley Quinn",
  imageUrl:
    "https://i.pinimg.com/474x/53/17/a2/5317a29cfe8e504e6297edb4584478df.jpg",
  imageSize: 90,
};

export default function MostrarDatos() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Foto de " + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
}
