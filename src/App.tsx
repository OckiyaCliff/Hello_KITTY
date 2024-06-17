import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <div className="flex flex-col justify-center max-w-8xl items-center font-comic bg-[#FF3DB4] overflow-x-hidden w-screen">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
