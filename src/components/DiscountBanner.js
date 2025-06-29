import React from 'react';
import { Container } from 'react-bootstrap';

const DiscountBanner = () => {
    return (
        <div style={styles.banner}>
            <Container>
                <p style={styles.marquee}>
                    <span>🔥 20% off on all Fiction books! </span>
                    <span>📚 Use code: READMORE for additional 10% off on orders above $50! </span>
                    <span>💥 Buy 2, Get 1 Free on selected Romance novels! </span>
                </p>
            </Container>
        </div>
    );
};

const styles = {
    banner: {
        backgroundColor: '#fefae0',
        color: '#333',
        fontSize: '16px',
        textAlign: 'center',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
    },
    marquee: {
        display: 'inline-block',
        whiteSpace: 'nowrap',
        animation: 'scroll 20s linear infinite',
    }
};

// Keyframes for scrolling animation
const keyframes = `
@keyframes scroll {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
}
`;

// Inject keyframes into the document
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

export default DiscountBanner;
