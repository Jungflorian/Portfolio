import '../CSS/Contact.css';

function Contact() {
    return (
        <div id="contact" className="contact">
            <h2>Contactez-moi</h2>
            <form className="contact-form" action="https://formspree.io/f/mayvlrgn" method="POST">
                <label htmlFor="name">Nom:</label>
                <input type="text" id="name" name="name" required />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <button type="submit">Envoyer</button>
            </form>
        </div>
    );
}

export default Contact;
