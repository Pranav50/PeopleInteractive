import './App.css';
import Home from "./components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {
  return (
    <BrowserRouter basename="/PeopleInteractive/">
      <Route exact path="/" component={Login} />
      <ProtectedRoute exact path="/home" component={Home} />
    </BrowserRouter>
  );
}

export default App;
