import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
