import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Login from "./pages/Auth/Login/Login";
import PrivetRoute from "./pages/Auth/PrivetRoute/PrivetRoute";
import Booking from "./pages/Booking/Booking";
import Home from "./pages/Home/Home";
import Header from "./pages/Shared/Header/Header";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/services">
            <Home />
          </Route>

          <Route exact path="/login">
            <Login />
          </Route>
          <PrivetRoute exact path="/booking/:id">
            <Booking></Booking>
          </PrivetRoute>
          <Route exact path="/exparts">
            <Home />
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </AuthProvider>
  );
}

export default App;
