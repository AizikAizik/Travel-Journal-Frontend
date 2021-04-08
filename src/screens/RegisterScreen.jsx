import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../components/Footer";
import Header from "../components/Header";
import RegisterForm from "../components/RegisterForm";

const RegisterScreen = () => {
    return (
        <div>
            <Header />
            <main className="py-3">
                <Container>
                    <RegisterForm />
                </Container>
            </main>
            <Footer />
        </div>
    );
};

export default RegisterScreen;
