import Headers from "./Components/Header";
import Content from "./Components/Content";
import Footer from "./Components/Footer";

function App() {

  const expiry = new Date().getFullYear();
  const title = "Sastha\'s";

  return (
    <>
    <Headers title = {title}/>
    <Content />
    <Footer expiry = {expiry}/>
    </>
  )
}

export default App
