import "./App.css";
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Reviews from "./Components/Reviews/Reviews";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blog from "./Components/Blog/Blog";
import Header from "./Components/Header/Header";
import NotFound from "./Components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="reviews" element={<Reviews />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="blog" element={<Blog />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
