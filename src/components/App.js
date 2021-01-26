import React from "react"
import { Container } from "react-bootstrap"
import { AuthProvider } from "../contexts/AuthContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Profile from "./auth/Profile"
import PrivateRoute from "./auth/PrivateRoute"
import UpdateProfile from "./auth/UpdateProfile"
import Login from "./auth/Login"
import ForgotPassword from "./auth/ForgotPassword"
import Signup from "./auth/Signup"
import { CenteredContainer } from "./CenteredContainer"

function App() {
  return (
    <Router>
      <AuthProvider>
        <Switch>
          <PrivateRoute exact path="/user" component={Profile} />
          <PrivateRoute path="/update-profile" component={UpdateProfile} />
          <Route path="/signup" component={Signup} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />
        </Switch>
      </AuthProvider>
    </Router>

  )
}

export default App
