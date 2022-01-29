import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/layout/Header";
import About from "./components/pages/About";
import AddContact from "./components/contacts/AddContact";
import NotFound from "./components/pages/NotFound";
import Test from "./components//test/Test";

import { Provider } from "./context";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div>
            <Header branding="Contact Manager" />
            <div className="container">
              <Routes>
                <Route exact path="/" element={<Contacts />} />
                <Route exact path="/contact/add" element={<AddContact />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/test" element={<Test />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
