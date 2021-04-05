import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeScreen = () => {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h3>Welcome To Travel Journal</h3>
        </Container>
      </main>
      <Footer />
    </div>
  );
};

export default HomeScreen;
