import "./components/Navbar/Navbar";
import "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer menu_greeting={"Bienvenido a RetroStore!"} greeting={"La tienda esta vacia..."}/>
    </>
  );
}

export default App;
