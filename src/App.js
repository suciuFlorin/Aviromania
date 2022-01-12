import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Atractie from "./components/Oras/Atractie";
import Home from "./components/Home";
import Oras from "./components/Oras";
import External from "./components/External";

function App() {
  return (
    <div className="flex flex-col h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":oras" element={<Oras />}>
            <Route exact path=":atractie" element={<Atractie />} />
          </Route>
          <Route path="external/:zona/:oras" element={<External />} />
          <Route path="*" element={<div>no page</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
