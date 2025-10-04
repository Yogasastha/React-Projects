import Headers from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";
import Counter from "./Components/Counter";

function App() {

  const expiry = new Date().getFullYear();
  const title = "Sastha\'s";

  return (
    <>
    <Headers title = {title}/>
    <Content />
    <Counter />
    <Footer expiry = {expiry}/>
    </>
  )
}

export default App
