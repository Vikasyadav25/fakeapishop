import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Products from "./components/Product";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
