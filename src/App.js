import "./App.css";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { AuthContextProvider } from "./contexts/authContext";
import PrivateComponent from "./components/PrivateComponent";

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<PrivateComponent />}>
            <Route index element={<h1>Products</h1>} />
            <Route path="/add" element={<h1>Add Products</h1>} />
            <Route path="/update" element={<h1>Update Products</h1>} />
            <Route path="/logout" element={<h1>Logout</h1>} />
            <Route path="/profile" element={<h1>Profile</h1>} />
          </Route>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </div>
  );
}

export default App;
