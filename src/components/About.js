import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
    return (
        <Container>
            <h2 className="my-4">About Us</h2>
            <p>
                Welcome to Bookstore! We are passionate about books and committed to providing the best collection of books to our customers. Our store offers a wide range of genres and formats to suit every reader's taste.
            </p>
            <p>
                Whether you are looking for a classic novel, a bestseller, or a children's book, we have got you covered. Our team is dedicated to helping you find the perfect book for your reading pleasure.
            </p>
            <b>"We are open, like a Book"</b>

            <div style={{ marginTop: '20px' }}>
                <h4>Find Us Here:</h4>
                <iframe
                    title="Google Map Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d496.27718619946205!2d83.01937112467805!3d25.36775430679821!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2eedfb44aa6f%3A0x84a312191dce71a2!2sVidyathri%20Pustak%20Bhandar!5e0!3m2!1sen!2sin!4v1732175218354!5m2!1sen!2sin"
                    width="800"
                    height="400"
                    style={{ border: '0', borderRadius: '8px' }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>            </div>
        </Container>
    );
};

export default About;


