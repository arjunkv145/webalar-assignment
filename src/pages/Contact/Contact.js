import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import ContactForm from "../../components/ContactForm/ContactForm";
import ContactDetails from "../../components/ContactDetails/ContactDetails";
import "./contact.scss";

export default function Contact() {
    return (
        <>
            <Navbar />
            <main className="contact">
                <h1 className="contact__title">Connect with us</h1>
                <section className="contact__content">
                    <ContactForm />
                    <ContactDetails />
                </section>
            </main>
            <Footer />
        </>
    );
}