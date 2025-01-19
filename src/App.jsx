import "./App.css";
import Nav from "/src/components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlayList from "./pages/PlayList";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playList" element={<PlayList />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
