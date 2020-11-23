import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

import "./App.css";
export function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container></Container>
      </main>
      <Footer />
    </Router>
  );
}
