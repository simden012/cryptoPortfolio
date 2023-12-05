import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Portfolio from "./pages/Portfolio";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { LoginProvider } from "./contexts/LoginContext";
function App() {
  const routes = [
    { path: "/", element: <Home /> },
    { path: "/portfolio", element: <Portfolio /> },
  ];
  return (
    <div id="container">
      <LoginProvider>
        <Router>
          <Navbar />
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </Router>
      </LoginProvider>
    </div>
  );
}

export default App;
