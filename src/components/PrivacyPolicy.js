import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PrivacyPolicy = () => {
    return (
        <Container>
            <h2 className="my-4">Privacy Policy</h2>
            <Row>
                <Col md={12}>
                    <h4>Introduction</h4>
                    <p>
                        Your privacy is important to us. This Privacy Policy explains the types of personal information
                        that we collect and how we use, disclose, and safeguard your information when you use our
                        website or services.
                    </p>

                    <h4>Information We Collect</h4>
                    <p>
                        We may collect the following types of personal information when you use our services:
                    </p>
                    <ul>
                        <li><strong>Personal Information:</strong> Information that identifies you, such as name, email address, and payment details.</li>
                        <li><strong>Usage Data:</strong> Information about your use of our website, such as browsing behavior and preferences.</li>
                        <li><strong>Cookies:</strong> Small files stored on your device to enhance your user experience.</li>
                    </ul>

                    <h4>How We Use Your Information</h4>
                    <p>
                        We use the information we collect for the following purposes:
                    </p>
                    <ul>
                        <li>To provide and maintain our services.</li>
                        <li>To personalize your experience and improve our website.</li>
                        <li>To process transactions securely.</li>
                        <li>To communicate with you about your orders and inquiries.</li>
                        <li>To send promotional offers, newsletters, and updates (if you opt-in).</li>
                    </ul>

                    <h4>Sharing Your Information</h4>
                    <p>
                        We do not sell, trade, or rent your personal information to third parties. However, we may share
                        your information in the following circumstances:
                    </p>
                    <ul>
                        <li>With service providers who help us operate our website and process payments.</li>
                        <li>To comply with legal obligations or requests from law enforcement.</li>
                        <li>In the event of a business transfer, such as a merger or acquisition.</li>
                    </ul>

                    <h4>Your Rights</h4>
                    <p>
                        You have the right to:
                    </p>
                    <ul>
                        <li>Access the personal data we hold about you.</li>
                        <li>Request correction of inaccurate or incomplete data.</li>
                        <li>Request deletion of your personal data, subject to legal obligations.</li>
                        <li>Opt-out of promotional communications at any time.</li>
                    </ul>

                    <h4>Security of Your Information</h4>
                    <p>
                        We take reasonable precautions to protect your personal information from unauthorized access, 
                        alteration, or disclosure. However, no method of data transmission over the internet is 100% secure.
                    </p>

                    <h4>Changes to This Privacy Policy</h4>
                    <p>
                        We may update this Privacy Policy from time to time. Any changes will be posted on this page, and 
                        the date of the most recent revision will be indicated at the top of the page. Please review this 
                        policy periodically to stay informed about how we are protecting your information.
                    </p>

                    <h4>Contact Us</h4>
                    <p>
                        If you have any questions or concerns about this Privacy Policy or your personal information, 
                        please contact us at:
                    </p>
                    <p>
                        Email: <a href="mailto:support@yourcompany.com">support@yourcompany.com</a>
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default PrivacyPolicy;
