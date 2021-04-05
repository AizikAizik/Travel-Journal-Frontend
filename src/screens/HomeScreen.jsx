import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <LoginForm />
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
